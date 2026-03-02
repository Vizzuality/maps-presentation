interface Props {
  icon: string;
}

export function SectionIcon({ icon }: Props) {
  const s = 140;
  switch (icon) {
    case "tile":
      return (
        <svg viewBox="0 0 120 120" width={s} height={s} className="icon-glow">
          {[0, 1, 2, 3].map((r) =>
            [0, 1, 2, 3].map((c) => (
              <rect
                key={`${r}${c}`}
                x={5 + c * 28}
                y={5 + r * 28}
                width="26"
                height="26"
                rx="3"
                fill={(r + c) % 2 === 0 ? "#3b82f6" : "#1e3a5f"}
                stroke="#60a5fa"
                strokeWidth="0.7"
                opacity={0.5 + ((r + c) % 3) * 0.15}
              />
            )),
          )}
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 120 120" width={s} height={s} className="icon-glow">
          <defs>
            <radialGradient id="gl" cx="35%" cy="35%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#7c2d12" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="52" fill="url(#gl)" />
          <ellipse cx="60" cy="60" rx="52" ry="18" fill="none" stroke="#fdba74" strokeWidth="1" opacity="0.5" />
          <ellipse cx="60" cy="60" rx="18" ry="52" fill="none" stroke="#fdba74" strokeWidth="1" opacity="0.5" />
          <path d="M8,60 L112,60" stroke="#fdba74" strokeWidth="1" strokeDasharray="3,2" opacity="0.4" />
        </svg>
      );
    case "raster_vector":
      return (
        <svg viewBox="0 0 140 100" width={160} height={114} className="icon-glow">
          <rect x="5" y="10" width="55" height="80" rx="6" fill="#451a03" stroke="#fb923c" strokeWidth="1.5" />
          {[0, 1, 2].map((r) =>
            [0, 1, 2].map((c) => (
              <rect key={`${r}${c}`} x={12 + c * 16} y={18 + r * 22} width="14" height="20" rx="2" fill="#fb923c" opacity={0.25 + r * 0.1} />
            )),
          )}
          <text x="32" y="96" textAnchor="middle" fill="#fdba74" fontSize="8">Raster</text>
          <rect x="80" y="10" width="55" height="80" rx="6" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1.5" />
          <polygon points="95,30 115,25 120,50 100,55" fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.6" />
          <polygon points="100,55 120,50 125,75 108,78" fill="none" stroke="#c4b5fd" strokeWidth="1" opacity="0.5" />
          <circle cx="108" cy="45" r="3" fill="#a78bfa" opacity="0.7" />
          <circle cx="120" cy="55" r="2" fill="#c4b5fd" opacity="0.5" />
          <text x="107" y="96" textAnchor="middle" fill="#c4b5fd" fontSize="8">Vector</text>
        </svg>
      );
    case "libs":
      return (
        <svg viewBox="0 0 120 120" width={s} height={s} className="icon-glow">
          {[
            { x: 35, y: 25, c: "#22c55e" },
            { x: 75, y: 25, c: "#3b82f6" },
            { x: 35, y: 65, c: "#a78bfa" },
            { x: 75, y: 65, c: "#f43f5e" },
            { x: 55, y: 45, c: "#f59e0b" },
          ].map((b, i) => (
            <g key={i}>
              <rect x={b.x - 12} y={b.y - 8} width="24" height="32" rx="3" fill={b.c} opacity="0.2" stroke={b.c} strokeWidth="1" />
              <line x1={b.x - 6} y1={b.y + 2} x2={b.x + 6} y2={b.y + 2} stroke={b.c} strokeWidth="1.5" opacity="0.6" />
              <line x1={b.x - 6} y1={b.y + 8} x2={b.x + 4} y2={b.y + 8} stroke={b.c} strokeWidth="1" opacity="0.4" />
              <line x1={b.x - 6} y1={b.y + 14} x2={b.x + 6} y2={b.y + 14} stroke={b.c} strokeWidth="1" opacity="0.3" />
            </g>
          ))}
        </svg>
      );
    case "compare":
      return (
        <svg viewBox="0 0 120 100" width={140} height={117} className="icon-glow">
          {[
            { h: 70, c: "#3b82f6" },
            { h: 50, c: "#a78bfa" },
            { h: 85, c: "#22c55e" },
            { h: 40, c: "#f59e0b" },
            { h: 65, c: "#ec4899" },
          ].map((b, i) => (
            <rect key={i} x={10 + i * 22} y={90 - b.h} width="18" height={b.h} rx="4" fill={b.c} opacity="0.35" stroke={b.c} strokeWidth="1" />
          ))}
        </svg>
      );
    case "providers":
      return (
        <svg viewBox="0 0 120 120" width={s} height={s} className="icon-glow">
          <circle cx="60" cy="60" r="15" fill="#a78bfa" opacity="0.3" stroke="#a78bfa" strokeWidth="1.5" />
          {[0, 60, 120, 180, 240, 300].map((a) => {
            const rad = (a * Math.PI) / 180;
            const x2 = 60 + 42 * Math.cos(rad);
            const y2 = 60 + 42 * Math.sin(rad);
            return (
              <g key={a}>
                <line x1={60 + 18 * Math.cos(rad)} y1={60 + 18 * Math.sin(rad)} x2={x2} y2={y2} stroke="#a78bfa" strokeWidth="0.8" opacity="0.4" />
                <circle cx={x2} cy={y2} r="10" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1" opacity="0.6" />
              </g>
            );
          })}
        </svg>
      );
    case "decision":
      return (
        <svg viewBox="0 0 120 120" width={s} height={s} className="icon-glow">
          <polygon points="60,10 110,60 60,110 10,60" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1.5" />
          <text x="60" y="58" textAnchor="middle" fill="#c4b5fd" fontSize="22">?</text>
          <line x1="60" y1="110" x2="30" y2="115" stroke="#22c55e" strokeWidth="1.5" />
          <circle cx="28" cy="116" r="5" fill="#22c55e" opacity="0.4" />
          <line x1="60" y1="110" x2="90" y2="115" stroke="#f43f5e" strokeWidth="1.5" />
          <circle cx="92" cy="116" r="5" fill="#f43f5e" opacity="0.4" />
        </svg>
      );
    case "resources":
      return (
        <svg viewBox="0 0 120 120" width={s} height={s} className="icon-glow">
          {[0, 1, 2].map((i) => (
            <rect key={i} x={20 + i * 8} y={15 + i * 8} width="60" height="75" rx="6" fill="none" stroke="#a78bfa" strokeWidth="1.2" opacity={0.3 + i * 0.2} />
          ))}
          <line x1="42" y1="50" x2="72" y2="50" stroke="#c4b5fd" strokeWidth="2" opacity="0.5" />
          <line x1="42" y1="60" x2="68" y2="60" stroke="#c4b5fd" strokeWidth="1.5" opacity="0.4" />
          <line x1="42" y1="70" x2="65" y2="70" stroke="#c4b5fd" strokeWidth="1" opacity="0.3" />
        </svg>
      );
    default:
      return null;
  }
}
