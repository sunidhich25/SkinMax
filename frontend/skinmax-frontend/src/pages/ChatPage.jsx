import Sidebar from "../components/Sidebar/Sidebar";
import "../styles/chatPage.css";

export default function ChatPage() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="chat-page">

        <div className="chat-header">
          <div>
            <h2>🤖 SkinMax AI Assistant</h2>
            <p>Online and ready to help</p>
          </div>

          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="chat-avatar"
          />
        </div>

        <div className="chat-empty">

          <div className="bot-icon">
            🤖
          </div>

          <h1>
            Start Chat with Bot
          </h1>

          <p>
            Ask me about your skincare routine,
            latest scan, or weather-based care.
          </p>

        </div>

        <div className="quick-prompts">

          <button>
            📅 Review my routine
          </button>

          <button>
            🔍 Explain my last scan
          </button>

          <button>
            ☀️ Weather tips
          </button>

          <button>
            👨‍⚕️ Talk to Dermatologist
          </button>

        </div>

        <div className="chat-input">

          <input
            type="text"
            placeholder="Ask anything about your skin..."
          />

          <button>
            ➤
          </button>

        </div>

        <p className="chat-disclaimer">
          SkinMax AI can make mistakes.
          Consider consulting a professional
          for severe conditions.
        </p>

      </main>
    </div>
  );
}