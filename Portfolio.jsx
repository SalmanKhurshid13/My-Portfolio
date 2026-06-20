import { useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, FileCode2, Terminal, ExternalLink, Award, BookOpen, GraduationCap } from "lucide-react";

const palette = {
  bg: "#161821",
  panel: "#1e2030",
  panelAlt: "#23263a",
  line: "#2c2f45",
  text: "#cbd0e0",
  textDim: "#7c819a",
  accent: "#7dd3a8",   // mint green — "compiled successfully" green
  accent2: "#e0af68",  // amber — comments
  accent3: "#7aa2f7",  // blue — keywords/links
  pink: "#bb70d2",
};

const skills = [
  { name: "Python", cat: "lang" },
  { name: "DSA with Python", cat: "lang" },
  { name: "C++", cat: "lang" },
  { name: "Java", cat: "lang" },
  { name: "Machine Learning", cat: "ml" },
  { name: "Data Analysis", cat: "ml" },
  { name: "Prompt Engineering / GenAI", cat: "ml" },
  { name: "MS Excel", cat: "tool" },
  { name: "MS Word / PPT", cat: "tool" },
  { name: "Canva AI", cat: "tool" },
];

const certificates = [
  {
    title: "Build & Deploy AI Apps with Google AI Studio",
    sub: "Multilingual AI Speech App Development",
    issuer: "GUVI x HCL · Google for Education Partner",
    date: "Jun 2026",
    id: "461y352u77txJE88k1",
  },
  {
    title: "ChatGPT for Everyone",
    sub: "Complete Generative AI & Prompt Engineering Course",
    issuer: "GUVI x HCL · Google for Education Partner",
    date: "Jun 2026",
    id: "8173t50m0L18We131F",
  },
  {
    title: "Machine Learning",
    sub: "Core ML concepts & applied practice",
    issuer: "Tutedude",
    date: "13 Jun 2026",
    id: "TD-SALM-ML-1917",
  },
  {
    title: "Data Analytics Job Simulation",
    sub: "Data analysis & forensic technology tasks",
    issuer: "Deloitte (via Forage)",
    date: "12 Jun 2026",
    id: "69db3bc9...a69d3",
  },
  {
    title: "Python",
    sub: "Foundational Python programming",
    issuer: "Kaggle Learn",
    date: "14 Jun 2026",
    id: "Kaggle Certified",
  },
  {
    title: "Remote Sensing Program",
    sub: "5-day intensive remote sensing fundamentals",
    issuer: "ISRO",
    date: "5 Days",
    id: "ISRO RS Program",
  },
  {
    title: "AI Agents & Vibe Coding",
    sub: "Building AI agents & rapid prototyping workflows",
    issuer: "Kaggle",
    date: "5 Days",
    id: "Kaggle Certified",
  },
  {
    title: "Diploma in Computer Application",
    sub: "Computer fundamentals, MS Office, internet & basic programming",
    issuer: "DCA",
    date: "Completed",
    id: "Foundational",
  },
];

const courses = [
  { name: "DSA with Python, C++ & Java", org: "Tutedude", period: "Jan 2026 – Present" },
];

function SectionLabel({ index, total, children }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 28 }}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: palette.textDim }}>
        {String(index).padStart(2, "0")}/{String(total).padStart(2, "0")}
      </span>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: palette.accent2 }}>
        // {children}
      </span>
      <div style={{ flex: 1, height: 1, background: palette.line }} />
    </div>
  );
}

export default function Portfolio() {
  const [tab, setTab] = useState("about.py");
  const tabs = ["about.py", "certificates.md", "contact.sh"];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: palette.bg,
        color: palette.text,
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        ::selection { background: ${palette.accent}; color: ${palette.bg}; }
        a { color: inherit; }
        .glow:hover { box-shadow: 0 0 0 1px ${palette.accent}55, 0 8px 30px -10px ${palette.accent}33; }
        .card { transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
        .card:hover { transform: translateY(-3px); border-color: ${palette.accent}88 !important; }
        .navbtn { transition: color .2s ease, border-color .2s ease; cursor: pointer; }
        .blink { animation: blink 1.1s steps(2, start) infinite; }
        @keyframes blink { to { visibility: hidden; } }
        @media (max-width: 720px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-row { flex-wrap: wrap !important; }
        }
      `}</style>

      {/* Top bar - editor chrome */}
      <header
        style={{
          borderBottom: `1px solid ${palette.line}`,
          background: palette.panel,
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, height: 52 }}>
            <div style={{ display: "flex", gap: 7 }}>
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#f87171" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: palette.accent2 }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: palette.accent }} />
            </div>
            <div style={{ display: "flex", gap: 2, marginLeft: 12 }}>
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="navbtn"
                  style={{
                    background: "transparent",
                    border: "none",
                    borderBottom: `2px solid ${tab === t ? palette.accent : "transparent"}`,
                    color: tab === t ? palette.text : palette.textDim,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 13,
                    padding: "16px 12px",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <div style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: palette.textDim }}>
              salman-khurshid ~ portfolio
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "70px 24px 60px" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, alignItems: "start" }}>
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                color: palette.accent,
                marginBottom: 18,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Terminal size={14} />
              <span>~/salman-khurshid$ whoami</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 56px)",
                lineHeight: 1.05,
                fontWeight: 800,
                margin: "0 0 6px",
                letterSpacing: "-0.02em",
              }}
            >
              Salman Khurshid
            </h1>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 17,
                color: palette.accent3,
                margin: "0 0 22px",
              }}
            >
              <span style={{ color: palette.textDim }}>const role = </span>
              "CS &amp; Data Analytics Student, IIT Patna"
              <span className="blink" style={{ color: palette.accent }}>▌</span>
            </p>

            <p style={{ fontSize: 16, lineHeight: 1.7, color: palette.text, maxWidth: 560, marginBottom: 28 }}>
              Computer Science student at <strong>IIT Patna</strong>, building a foundation in Python, data
              structures &amp; algorithms, and data analysis. I like turning curiosity about how things work
              into working code — and I'm currently exploring ML, generative AI, and remote sensing alongside
              my coursework.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
              <a
                href="mailto:salmanksd1@gmail.com"
                className="glow"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 18px",
                  background: palette.accent,
                  color: palette.bg,
                  fontWeight: 700,
                  fontSize: 14,
                  borderRadius: 6,
                  textDecoration: "none",
                }}
              >
                <Mail size={15} /> Get in touch
              </a>
              <a
                href="https://www.linkedin.com/in/salman-khurshid13"
                target="_blank"
                rel="noreferrer"
                className="glow"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 18px",
                  border: `1px solid ${palette.line}`,
                  color: palette.text,
                  fontWeight: 600,
                  fontSize: 14,
                  borderRadius: 6,
                  textDecoration: "none",
                }}
              >
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>

            <div className="stats-row" style={{ display: "flex", gap: 28 }}>
              {[
                ["8+", "Certifications"],
                ["2028", "Expected Grad"],
                ["3", "Languages"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 24, fontWeight: 700, color: palette.accent }}>
                    {num}
                  </div>
                  <div style={{ fontSize: 12, color: palette.textDim, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* code card signature element */}
          <div
            style={{
              background: palette.panel,
              border: `1px solid ${palette.line}`,
              borderRadius: 10,
              overflow: "hidden",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              boxShadow: "0 20px 60px -20px rgba(0,0,0,0.5)",
            }}
          >
            <div style={{ padding: "10px 16px", borderBottom: `1px solid ${palette.line}`, color: palette.textDim, fontSize: 12 }}>
              student.json
            </div>
            <pre style={{ margin: 0, padding: 20, lineHeight: 1.9, whiteSpace: "pre-wrap" }}>
              <span style={{ color: palette.textDim }}>{"{"}</span>{"\n"}
              {"  "}<span style={{ color: palette.pink }}>"institute"</span>: <span style={{ color: palette.accent2 }}>"IIT Patna"</span>,{"\n"}
              {"  "}<span style={{ color: palette.pink }}>"degree"</span>: <span style={{ color: palette.accent2 }}>"B.Sc CS &amp; Data Analytics"</span>,{"\n"}
              {"  "}<span style={{ color: palette.pink }}>"batch"</span>: <span style={{ color: palette.accent3 }}>"2025 – 2028"</span>,{"\n"}
              {"  "}<span style={{ color: palette.pink }}>"location"</span>: <span style={{ color: palette.accent2 }}>"Patna, India"</span>,{"\n"}
              {"  "}<span style={{ color: palette.pink }}>"languages"</span>: [{"\n"}
              {"    "}<span style={{ color: palette.accent2 }}>"Hindi"</span>, <span style={{ color: palette.accent2 }}>"English"</span>, <span style={{ color: palette.accent2 }}>"Urdu"</span>{"\n"}
              {"  "}],{"\n"}
              {"  "}<span style={{ color: palette.pink }}>"openTo"</span>: [{"\n"}
              {"    "}<span style={{ color: palette.accent2 }}>"internships"</span>,{"\n"}
              {"    "}<span style={{ color: palette.accent2 }}>"projects"</span>,{"\n"}
              {"    "}<span style={{ color: palette.accent2 }}>"collaborations"</span>{"\n"}
              {"  "}]{"\n"}
              <span style={{ color: palette.textDim }}>{"}"}</span>
            </pre>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "20px 24px 60px" }}>
        <SectionLabel index={1} total={4}>skills.list()</SectionLabel>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {skills.map((s) => (
            <span
              key={s.name}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                padding: "8px 14px",
                borderRadius: 6,
                border: `1px solid ${palette.line}`,
                background: palette.panel,
                color:
                  s.cat === "ml" ? palette.pink : s.cat === "lang" ? palette.accent3 : palette.textDim,
              }}
            >
              {s.name}
            </span>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px 60px" }}>
        <SectionLabel index={2} total={4}>education &amp; coursework</SectionLabel>
        <div style={{ display: "grid", gap: 14 }}>
          <div
            className="card"
            style={{
              background: palette.panel,
              border: `1px solid ${palette.line}`,
              borderRadius: 10,
              padding: 22,
              display: "flex",
              gap: 16,
            }}
          >
            <GraduationCap size={22} color={palette.accent} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 16 }}>B.Sc Computer Science &amp; Data Analytics</div>
              <div style={{ color: palette.accent3, fontSize: 14, margin: "4px 0" }}>Indian Institute of Technology, Patna</div>
              <div style={{ color: palette.textDim, fontSize: 13, fontFamily: "'JetBrains Mono', monospace" }}>
                Jul 2025 – Jun 2028 · Patna
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: palette.text, marginTop: 10, marginBottom: 0 }}>
                Developing expertise in programming (Python), data analysis, statistical methods, and
                analytical thinking through academic and practical projects.
              </p>
            </div>
          </div>
          {courses.map((c) => (
            <div
              key={c.name}
              className="card"
              style={{
                background: palette.panel,
                border: `1px solid ${palette.line}`,
                borderRadius: 10,
                padding: 22,
                display: "flex",
                gap: 16,
              }}
            >
              <BookOpen size={22} color={palette.accent2} style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>{c.name}</div>
                <div style={{ color: palette.accent3, fontSize: 14, margin: "4px 0" }}>{c.org}</div>
                <div style={{ color: palette.textDim, fontSize: 13, fontFamily: "'JetBrains Mono', monospace" }}>
                  {c.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px 60px" }}>
        <SectionLabel index={3} total={4}>certificates ({certificates.length})</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
          {certificates.map((c) => (
            <div
              key={c.id}
              className="card"
              style={{
                background: palette.panel,
                border: `1px solid ${palette.line}`,
                borderRadius: 10,
                padding: 18,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <Award size={18} color={palette.accent} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: palette.textDim }}>
                  {c.date}
                </span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 14.5, lineHeight: 1.35, marginBottom: 4 }}>{c.title}</div>
              <div style={{ fontSize: 12.5, color: palette.textDim, lineHeight: 1.5, marginBottom: 8 }}>{c.sub}</div>
              <div style={{ fontSize: 12, color: palette.accent3, fontFamily: "'JetBrains Mono', monospace" }}>
                {c.issuer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PUBLICATION */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px 60px" }}>
        <SectionLabel index={4} total={4}>publication</SectionLabel>
        <div
          className="card"
          style={{
            background: palette.panel,
            border: `1px solid ${palette.line}`,
            borderRadius: 10,
            padding: 22,
            display: "flex",
            gap: 16,
          }}
        >
          <FileCode2 size={22} color={palette.pink} style={{ flexShrink: 0, marginTop: 2 }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 16 }}>Tech Made Easy</div>
            <div style={{ color: palette.textDim, fontSize: 13, fontFamily: "'JetBrains Mono', monospace", margin: "4px 0 10px" }}>
              S. Khurshid · Oct 2025
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, color: palette.text }}>
              A beginner-friendly guide to computers — covering the basics of using a computer, browsing
              the internet, working with files, and staying safe online. Written for students and job
              seekers who want to feel confident with tech, with content shaped using AI to stay clear,
              modern, and approachable.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "10px 24px 80px" }}>
        <div
          style={{
            background: palette.panelAlt,
            border: `1px solid ${palette.line}`,
            borderRadius: 12,
            padding: "40px 32px",
            textAlign: "center",
          }}
        >
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: palette.accent2, marginBottom: 10 }}>
            // let's build something
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 24px" }}>Open to internships, projects &amp; collaborations</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 22, fontSize: 14 }}>
            <a href="mailto:salmanksd1@gmail.com" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: palette.text }}>
              <Mail size={16} color={palette.accent} /> salmanksd1@gmail.com
            </a>
            <a href="tel:+916201879401" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: palette.text }}>
              <Phone size={16} color={palette.accent} /> +91 62018 79401
            </a>
            <span style={{ display: "flex", alignItems: "center", gap: 8, color: palette.text }}>
              <MapPin size={16} color={palette.accent} /> Patna, India
            </span>
            <a
              href="https://www.linkedin.com/in/salman-khurshid13"
              target="_blank"
              rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: palette.text }}
            >
              <Linkedin size={16} color={palette.accent} /> salman-khurshid13
            </a>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 28, fontSize: 12, color: palette.textDim, fontFamily: "'JetBrains Mono', monospace" }}>
          built by Salman Khurshid · exit code 0
        </div>
      </section>
    </div>
  );
}
