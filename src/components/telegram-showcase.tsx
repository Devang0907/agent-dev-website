import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ChatMessage = {
  id: string;
  from: "user" | "agent";
  text: string;
  time: string;
};

type PermissionOption = "Approve" | "Deny";

type DemoStep =
  | { kind: "user"; text: string; ms: number }
  | { kind: "typing"; ms: number }
  | { kind: "agent"; text: string; ms: number }
  | { kind: "approval-prompt"; ms: number }
  | { kind: "approval-pick"; option: PermissionOption; ms: number }
  | { kind: "building"; ms: number }
  | { kind: "time-skip"; ms: number }
  | { kind: "notification"; text: string; ms: number }
  | { kind: "pause"; ms: number };

const PERMISSION_OPTIONS: PermissionOption[] = ["Approve", "Deny"];

const DEMO_STEPS: DemoStep[] = [
  { kind: "user", text: "Hi", ms: 900 },
  { kind: "typing", ms: 700 },
  { kind: "agent", text: "Hey! How can I help you today?", ms: 1400 },
  { kind: "user", text: "Create an Uber clone", ms: 1100 },
  { kind: "typing", ms: 900 },
  { kind: "approval-prompt", ms: 2200 },
  { kind: "approval-pick", option: "Approve", ms: 700 },
  { kind: "typing", ms: 800 },
  { kind: "building", ms: 2400 },
  { kind: "agent", text: "✅ Your website is created!\n\n🚀 uber-clone.vercel.app", ms: 2200 },
  { kind: "user", text: "Remind me to drink water in 5 mins", ms: 1200 },
  { kind: "typing", ms: 700 },
  { kind: "agent", text: "⏰ Reminder set — I'll ping you in 5 minutes.", ms: 1600 },
  { kind: "time-skip", ms: 1400 },
  { kind: "notification", text: "💧 Time to drink water!", ms: 2800 },
  { kind: "pause", ms: 1200 },
];

function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function addMinutes(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60_000);
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-3 py-2.5 shadow-sm">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="telegram-typing-dot h-1.5 w-1.5 rounded-full bg-[#8e98a4]"
            style={{ animationDelay: `${i * 0.18}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.from === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[88%] px-2.5 py-1.5 shadow-sm sm:max-w-[85%]",
          isUser
            ? "rounded-2xl rounded-br-sm bg-[#effdde] text-[#0f1419]"
            : "rounded-2xl rounded-bl-sm bg-white text-[#0f1419]",
        )}
      >
        <p className="whitespace-pre-wrap text-[11px] leading-snug sm:text-[12px]">{message.text}</p>
        <p className={cn("mt-0.5 text-right text-[9px]", isUser ? "text-[#5fb05f]" : "text-[#8e98a4]")}>
          {message.time}
        </p>
      </div>
    </div>
  );
}

function ApprovalKeyboard({
  selected,
  picking,
}: {
  selected: PermissionOption | null;
  picking: PermissionOption | null;
}) {
  return (
    <div className="flex justify-start">
      <div className="grid w-full max-w-[92%] grid-cols-2 gap-1 sm:max-w-[88%]">
        {PERMISSION_OPTIONS.map((option) => {
          const isSelected = selected === option;
          const isPicking = picking === option;
          const isApprove = option === "Approve";

          return (
            <div
              key={option}
              className={cn(
                "rounded-lg border px-2.5 py-1.5 text-center text-[10px] font-medium transition-all duration-300 sm:text-[11px]",
                isSelected
                  ? isApprove
                    ? "border-[#3390ec] bg-[#3390ec] text-white shadow-sm"
                    : "border-[#c8d1da] bg-[#eef1f5] text-[#8e98a4]"
                  : isPicking
                    ? "border-[#3390ec] bg-[#e8f4fd] text-[#3390ec] scale-[0.98]"
                    : "border-[#c8d1da] bg-white text-[#3390ec]",
              )}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ReminderNotification({
  text,
  time,
  visible,
}: {
  text: string;
  time: string;
  visible: boolean;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-2 top-2 z-20 transition-all duration-500 sm:inset-x-3 sm:top-3",
        visible ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
      )}
    >
      <div className="flex items-start gap-2.5 rounded-xl border border-black/6 bg-white/95 p-2.5 shadow-lg backdrop-blur-md sm:p-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3390ec] text-[11px] font-bold text-white">
          A
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold text-[#0f1419] sm:text-[11px]">agent-dev bot</p>
          <p className="mt-0.5 text-[10px] leading-snug text-[#3d4852] sm:text-[11px]">{text}</p>
          <p className="mt-1 text-[9px] text-[#8e98a4]">{time}</p>
        </div>
      </div>
    </div>
  );
}

export function TelegramShowcase({ className }: { className?: string }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const [building, setBuilding] = useState(false);
  const [showApproval, setShowApproval] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState<PermissionOption | null>(null);
  const [pickingPermission, setPickingPermission] = useState<PermissionOption | null>(null);
  const [showTimeSkip, setShowTimeSkip] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [notificationTime, setNotificationTime] = useState("");
  const [hint, setHint] = useState("Chatting with agent-dev on Telegram…");

  const scrollRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef(0);
  const msgIdRef = useRef(0);
  const reminderSetAtRef = useRef<Date | null>(null);

  const scrollToBottom = () => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing, building, showApproval, showTimeSkip, notification]);

  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];

    const reset = () => {
      setMessages([]);
      setTyping(false);
      setBuilding(false);
      setShowApproval(false);
      setSelectedPermission(null);
      setPickingPermission(null);
      setShowTimeSkip(false);
      setNotification(null);
      setNotificationTime("");
      setHint("Chatting with agent-dev on Telegram…");
      msgIdRef.current = 0;
      reminderSetAtRef.current = null;
    };

    const addMessage = (from: "user" | "agent", text: string, at?: Date) => {
      msgIdRef.current += 1;
      setMessages((prev) => [
        ...prev,
        {
          id: String(msgIdRef.current),
          from,
          text,
          time: formatTime(at ?? new Date()),
        },
      ]);
    };

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms));
      });

    const runStep = async (step: DemoStep) => {
      if (cancelled) return;

      switch (step.kind) {
        case "user":
          setTyping(false);
          setBuilding(false);
          setHint("You sent a message");
          addMessage("user", step.text);
          break;
        case "typing":
          setBuilding(false);
          setHint("agent-dev is typing…");
          setTyping(true);
          break;
        case "agent":
          setTyping(false);
          setBuilding(false);
          if (step.text.startsWith("⏰ Reminder set")) {
            reminderSetAtRef.current = new Date();
          }
          addMessage("agent", step.text);
          setHint("agent-dev replied");
          break;
        case "approval-prompt":
          setTyping(false);
          addMessage(
            "agent",
            "Can I create the project in D:/projects directory with name uber-clone?",
          );
          setShowApproval(true);
          setHint("Approve or deny…");
          break;
        case "approval-pick":
          setTyping(false);
          setPickingPermission(step.option);
          await wait(320);
          if (cancelled) return;
          setPickingPermission(null);
          setSelectedPermission(step.option);
          setShowApproval(false);
          addMessage("user", step.option);
          setHint(`${step.option}d from phone`);
          break;
        case "building":
          setTyping(false);
          setHint("Building your Uber clone…");
          setBuilding(true);
          addMessage("agent", "On it — creating uber-clone in D:/projects…");
          break;
        case "time-skip":
          setShowTimeSkip(true);
          setHint("5 minutes later…");
          break;
        case "notification": {
          setShowTimeSkip(false);
          const reminderAt = reminderSetAtRef.current
            ? addMinutes(reminderSetAtRef.current, 5)
            : addMinutes(new Date(), 5);
          const reminderTimeLabel = formatTime(reminderAt);
          setNotification(step.text);
          setNotificationTime(reminderTimeLabel);
          addMessage("agent", step.text, reminderAt);
          setHint("Reminder delivered");
          break;
        }
        case "pause":
          break;
      }

      await wait(step.ms);
    };

    const runLoop = async () => {
      while (!cancelled) {
        reset();
        stepRef.current = 0;

        for (const step of DEMO_STEPS) {
          if (cancelled) return;
          await runStep(step);
        }
      }
    };

    runLoop();

    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return (
    <div
      className={cn(
        "relative flex h-full min-h-0 flex-col overflow-hidden rounded-lg bg-[#d6dfea] sm:rounded-xl",
        className,
      )}
      aria-hidden
    >
      <div className="flex shrink-0 items-center gap-2.5 border-b border-[#c8d1da] bg-white px-3 py-2 sm:px-3.5 sm:py-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3390ec] text-xs font-bold text-white sm:h-9 sm:w-9">
          A
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[12px] font-semibold text-[#0f1419] sm:text-[13px]">agent-dev bot</p>
          <p className="text-[10px] text-[#3390ec] sm:text-[11px]">
            {typing || building ? "typing…" : "online"}
          </p>
        </div>
      </div>

      <div className="relative min-h-0 flex-1">
        <ReminderNotification
          text={notification ?? ""}
          time={notificationTime}
          visible={Boolean(notification)}
        />

        <div
          ref={scrollRef}
          className="telegram-chat-scroll absolute inset-0 overflow-y-auto overflow-x-hidden px-2 py-3 sm:px-3 sm:py-4"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8c5d1' fill-opacity='0.22'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        >
          <div className="flex min-h-full flex-col gap-2">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}

            {showApproval ? (
              <ApprovalKeyboard selected={selectedPermission} picking={pickingPermission} />
            ) : null}

            {typing ? <TypingIndicator /> : null}

            {building ? (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="telegram-build-spinner h-3.5 w-3.5 rounded-full border-2 border-[#3390ec]/25 border-t-[#3390ec]" />
                    <span className="text-[10px] text-[#3d4852] sm:text-[11px]">Generating project files…</span>
                  </div>
                </div>
              </div>
            ) : null}

            {showTimeSkip ? (
              <div className="flex justify-center py-1">
                <span className="rounded-full bg-[#c8d1da]/80 px-3 py-1 text-[9px] font-medium uppercase tracking-wide text-[#5d6d7e] sm:text-[10px]">
                  5 minutes later
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="shrink-0 border-t border-[#c8d1da] bg-[#eef1f5] px-2 py-2 sm:px-3">
        <div className="flex items-center gap-2 rounded-full border border-[#c8d1da] bg-white px-3 py-1.5">
          <span className="flex-1 text-[10px] text-[#8e98a4] sm:text-[11px]">Message</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3390ec] text-[10px] text-white">
            ↑
          </span>
        </div>
      </div>

      <div className="border-t border-[#c8d1da] bg-white/80 px-3 py-1.5 text-[9px] text-[#5d6d7e] sm:text-[10px]">
        {hint}
      </div>
    </div>
  );
}
