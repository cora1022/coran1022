import React, { useEffect, useRef, useState } from "react";
import "./Informational.css";

const MODEL = "gpt-4o-mini"; // 가볍고 빠른 실험용

export default function Informational() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "안녕하세요! 무엇을 도와드릴까요? 😊" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  // 스크롤 자동 내리기
  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }]; 
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      // ── 스트리밍 요청 ─────────────────────────────────────────────
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 🔑 실험용으로만 사용하세요 (배포 금지)
          Authorization: "Bearer sk-",
        },
        body: JSON.stringify({
          model: MODEL,
          messages: nextMessages,
          stream: true, // <- 스트리밍
          // temperature: 0.7,
        }),
      });

      if (!res.ok || !res.body) {
        const errText = await res.text().catch(() => "(no body)");
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              `❌ OpenAI 응답 오류\n` +
              `- status: ${res.status}\n` +
              `- body: ${errText}`,
          },
        ]);
        setLoading(false);
        return;
      }

      // ── SSE(텍스트 스트림) 읽기 ───────────────────────────────────
      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");

      // 우선 빈 assistant 메시지를 추가해두고, 토큰을 이어붙임
      let acc = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        // chat/completions 스트림은 "data: {json}\n\n" 형식의 SSE
        const lines = chunk.split("\n").filter((l) => l.startsWith("data: "));

        for (const line of lines) {
          const data = line.replace("data: ", "").trim();
          if (data === "[DONE]") continue;

          try {
            const json = JSON.parse(data);
            const delta = json.choices?.[0]?.delta?.content ?? "";
            if (delta) {
              acc += delta;
              // 마지막 assistant 말풍선을 업데이트
              setMessages((prev) => {
                const updated = [...prev];
                const last = updated[updated.length - 1];
                if (last?.role === "assistant") {
                  updated[updated.length - 1] = {
                    ...last,
                    content: acc,
                  };
                }
                return updated;
              });
            }
          } catch {
            // 스트림 중간에 깨진 라인이 있을 수 있음 (무시)
          }
        }
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "응답 중 문제가 발생했어요. 잠시 후 다시 시도해주세요.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-wrap">
      <header className="chat-header">GPT 챗봇 (현재 기값이 꺼져 있음.)</header>

      <div className="chat-list" ref={listRef}>
        {messages.map((m, i) => (
          <div key={i} className={`bubble ${m.role}`}>
            {m.content}
          </div>
        ))}
        {loading && <div className="bubble assistant">생각 중…</div>}
      </div>

      <form className="chat-input" onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요…"
          aria-label="message"
        />
        <button type="submit" disabled={loading || !input.trim()}>
          보내기
        </button>
      </form>
    </div>
  );
}
