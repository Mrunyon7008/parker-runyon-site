export default function Home() {
  const deployDate = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <nav>
            <a href="#about">about</a>
            <a href="#projects">projects</a>
            <a href="#experience">experience</a>
            <a href="#pivot">pivot</a>
            <a href="#contact">contact</a>
          </nav>
          <div className="topbar-status">
            <span className="dot"></span> ACTIVE
          </div>
        </div>
      </div>

      <div className="wrap">
        <section className="hero" style={{ borderTop: "none" }}>
          <div className="eyebrow">Network Operations &amp; Process Tooling</div>
          <h1>
            10 years keeping
            <br />
            networks <span className="accent">up</span>.<br />
            Now building the
            <br />
            systems behind them.
          </h1>
          <p className="hero-sub">
            I&apos;m Parker Runyon, a Senior NOC Technician who got tired of
            manual reporting and built the tools to kill it. Looking to bring
            that same instinct — find the broken process, automate it, ship it —
            into project management.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View the tooling →
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
          <div className="uptime-strip">
            <div className="uptime-cell">
              <div className="uptime-label">Time in NOC</div>
              <div className="uptime-value">
                6<span className="unit">+ yrs</span>
              </div>
            </div>
            <div className="uptime-cell">
              <div className="uptime-label">Current Role</div>
              <div className="uptime-value" style={{ fontSize: "1.15rem" }}>
                Sr. NOC Tech
              </div>
            </div>
            <div className="uptime-cell">
              <div className="uptime-label">Now Building</div>
              <div
                className="uptime-value"
                style={{ fontSize: "1.15rem", color: "var(--green)" }}
              >
                AI Tooling
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="section-head">
            <span className="section-num">01</span>
            <span className="section-title">About</span>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I&apos;ve spent the last six-plus years on the front line of
                network operations — monitoring, triaging, and escalating issues
                across critical infrastructure where downtime isn&apos;t an
                option. <strong>That work taught me to think in systems</strong>
                : every alert, every ticket, every handoff is a process, and
                most processes have slack in them.
              </p>
              <p>
                Rather than just absorb the manual grind — writing the same
                status reports, manually checking the same ticket fields — I
                started using AI tools to remove it. That turned into real,
                working tooling I use on the job today.
              </p>
              <p>
                I&apos;m now actively moving toward{" "}
                <strong>project management and AI-driven operations</strong>{" "}
                roles, where I can apply that same &ldquo;find the bottleneck,
                build the fix&rdquo; approach at a wider scale.
              </p>
            </div>
            <div className="panel">
              <div className="skill-panel-title">Core Skills</div>
              <div className="skill-row">
                <span>Network Operations</span>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="skill-row">
                <span>Incident Triage</span>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="skill-row">
                <span>Process Automation</span>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: "78%" }}></div>
                </div>
              </div>
              <div className="skill-row">
                <span>AI-Assisted Scripting</span>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: "72%" }}></div>
                </div>
              </div>
              <div className="skill-row">
                <span>Cross-team Coordination</span>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="section-head">
            <span className="section-num">02</span>
            <span className="section-title">AI-Built Tooling</span>
          </div>
          <p className="section-desc">
            Two tools I built using AI assistance to remove manual work from my
            day-to-day NOC role — not concepts, things I actually run.
          </p>

          <div className="project">
            <div className="project-head">
              <span className="project-title">Automated Reporting Script</span>
              <span className="project-status">
                <span className="dot"></span>IN PRODUCTION
              </span>
            </div>
            <div className="project-meta">
              TYPE: AUTOMATION · BUILT WITH: AI-ASSISTED SCRIPTING
            </div>
            <div className="project-body">
              <p>
                Shift and incident reporting ate a meaningful chunk of every
                shift — pulling the same data points, formatting them the same
                way, every single time. I worked with AI to write a script that
                generates these reports and summaries automatically, pulling
                from existing system data instead of building them by hand.
              </p>
            </div>
            <div className="metric-row">
              <div className="metric">
                <div className="metric-val">Manual →</div>
                <div className="metric-lbl">Automated</div>
              </div>
              <div className="metric">
                <div className="metric-val">Daily</div>
                <div className="metric-lbl">Usage</div>
              </div>
            </div>
            <div className="project-stack">
              <span className="stack-chip">AI-assisted scripting</span>
              <span className="stack-chip">Report generation</span>
              <span className="stack-chip">Data formatting</span>
            </div>
          </div>

          <div className="project">
            <div className="project-head">
              <span className="project-title">Ticket Audit Workflow</span>
              <span className="project-status">
                <span className="dot"></span>IN PRODUCTION
              </span>
            </div>
            <div className="project-meta">
              TYPE: QUALITY ASSURANCE · BUILT WITH: AI-ASSISTED SCRIPTING
            </div>
            <div className="project-body">
              <p>
                Ticket quality and consistency matters for downstream reporting,
                but manually auditing tickets for completeness and accuracy
                doesn&apos;t scale. I built a script-driven workflow that audits
                work tickets automatically, flagging gaps so issues get caught
                early instead of after the fact.
              </p>
            </div>
            <div className="metric-row">
              <div className="metric">
                <div className="metric-val">Faster</div>
                <div className="metric-lbl">Audit Cycle</div>
              </div>
              <div className="metric">
                <div className="metric-val">Earlier</div>
                <div className="metric-lbl">Issue Detection</div>
              </div>
            </div>
            <div className="project-stack">
              <span className="stack-chip">Workflow automation</span>
              <span className="stack-chip">Ticket auditing</span>
              <span className="stack-chip">Process QA</span>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="section-head">
            <span className="section-num">03</span>
            <span className="section-title">Experience Log</span>
          </div>
          <div className="log panel">
            <div className="log-entry">
              <div className="log-time">PRESENT</div>
              <div>
                <div className="log-title">
                  Sr. NOC Technician{" "}
                  <span className="log-co">// Telecom</span>
                </div>
                <div className="log-desc">
                  Leading network monitoring, incident response, and
                  coordination across critical infrastructure. Built and
                  deployed internal AI-assisted tooling for reporting and ticket
                  QA.
                </div>
              </div>
            </div>
            <div className="log-entry">
              <div className="log-time">6+ YRS</div>
              <div>
                <div className="log-title">
                  Network Operations <span className="log-co">// Telecom</span>
                </div>
                <div className="log-desc">
                  Progressed through NOC roles handling escalations, monitoring,
                  and cross-team coordination on live network systems.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pivot">
          <div className="section-head">
            <span className="section-num">04</span>
            <span className="section-title">Why Project Management</span>
          </div>
          <div className="pivot-panel">
            <p style={{ color: "var(--text-dim)", maxWidth: "600px" }}>
              NOC work is project management at high frequency — triage
              priorities, coordinate stakeholders, hit a deadline measured in
              minutes, document everything. I&apos;m looking to take that
              instinct into a role with a longer time horizon.
            </p>
            <ul className="pivot-list">
              <li>
                Years spent prioritizing under pressure and coordinating across
                teams during live incidents
              </li>
              <li>
                Direct experience identifying inefficient processes and building
                working fixes, not just flagging them
              </li>
              <li>
                Comfortable using AI tools practically — for automation and
                reporting, not as a buzzword
              </li>
              <li>
                Strong documentation habits from incident reporting, ready to
                apply to project tracking and stakeholder updates
              </li>
            </ul>
          </div>
        </section>

        <section id="contact">
          <div className="contact-panel">
            <h2>Let&apos;s talk.</h2>
            <p>
              Open to project management, operations, and AI-driven process
              roles. Happy to walk through the tooling above in more detail.
            </p>
            <div className="contact-links">
              <a href="mailto:ParkerRunyon@gmail.com" className="btn btn-primary">
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/REPLACE-ME"
                className="btn btn-ghost"
              >
                LinkedIn
              </a>
              <a href="/resume.pdf" className="btn btn-ghost">
                Resume (PDF)
              </a>
            </div>
          </div>
        </section>

        <section
          id="colophon"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="colophon">
            <div className="colophon-tag">// about_this_site</div>
            <p>
              Built with <strong>Claude Code</strong>, Anthropic&apos;s agentic
              coding CLI. Deployed on <strong>Vercel</strong> via GitHub
              integration — push to <code>main</code> ships. Custom domain
              wired through Vercel DNS.
            </p>
            <div className="colophon-stack">
              <span className="stack-chip">Next.js 15</span>
              <span className="stack-chip">TypeScript</span>
              <span className="stack-chip">Vercel</span>
              <span className="stack-chip">Claude Code</span>
              <a
                href="https://github.com/Mrunyon7008/parker-runyon-site"
                target="_blank"
                rel="noreferrer"
                className="stack-chip colophon-link"
              >
                → source
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer>
        parker-runyon.com · last deploy: <span id="deploy-date">{deployDate}</span>
      </footer>
    </>
  );
}
