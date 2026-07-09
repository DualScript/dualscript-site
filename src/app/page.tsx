import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      <nav
          className="sticky top-0 z-50 border-b backdrop-blur-md"
          style={{
            background: "rgba(8, 13, 20, 0.8)",
            borderColor: "var(--border)",
          }}
        >
          <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-4 md:px-8">
            <span
              className="text-[15px] tracking-[0.08em]"
              style={{ color: "var(--text)" }}
            >
              DualScript
            </span>
            <a
              href="#products"
              className="transition-colors duration-200 hover:text-[var(--accent)]"
              style={{ color: "var(--muted)" }}
            >
              Products
            </a>
          </div>
        </nav>

        <main style={{ margin: 0, padding: 0 }}>
          <section
            style={{
              position: "relative",
              width: "100%",
              minHeight: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              zIndex: 1,
              paddingTop: "4rem",
              paddingBottom: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "0 2rem",
                maxWidth: "800px",
                width: "100%",
              }}
            >
              <div style={{ width: "min(420px, 85vw)", marginBottom: "2.5rem" }}>
                <img
                  src="/dualspoke-logo.png"
                  alt="DualSpoke"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  background: "var(--accent-glow)",
                  border: "1px solid var(--accent-dim)",
                  padding: "6px 16px",
                  borderRadius: "100px",
                  marginBottom: "1.75rem",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    background: "var(--accent)",
                    borderRadius: "50%",
                    display: "inline-block",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
                Vertical Software
              </div>

              <h1
                style={{
                  fontSize: "clamp(1.75rem, 5vw, 3.2rem)",
                  fontWeight: 500,
                  color: "var(--text)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                }}
              >
                Built for{" "}
                <span style={{ color: "var(--accent)" }}>professionals</span> who
                need it done right.
              </h1>

              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 300,
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  maxWidth: "500px",
                  fontFamily: "var(--mono)",
                }}
              >
                Purpose-built software tools for professionals with specific
                workflow problems. Not platforms. Not suites. One product, one
                problem, done well.
              </p>
            </div>

          </section>

          <section
            id="products"
            style={{
              width: "100%",
              paddingTop: "2.5rem",
              paddingBottom: "1.5rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div className="product-section-inner">
              <div
                className="rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.12em]"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  border: "1px solid var(--border-mid)",
                  display: "inline-block",
                  marginBottom: "2rem",
                }}
              >
                Our Products
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "1.5rem",
                  width: "100%",
                }}
              >
                <article className="product-card">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.08em]"
                    style={{
                      color: "var(--accent)",
                      background: "var(--accent-glow)",
                      border: "1px solid var(--accent-dim)",
                    }}
                  >
                    Live
                  </span>
                  <h2
                    className="mb-3 mt-4 text-lg font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    StencilMind
                  </h2>
                  <p
                    className="text-sm font-light leading-[1.7]"
                    style={{ color: "var(--muted)" }}
                  >
                    Professional stencil conversion for tattoo artists. Converts
                    reference images into clean, print-ready stencils in
                    seconds.
                  </p>
                  <a
                    href="https://stencilmind.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-[13px] transition-all duration-200 hover:underline"
                    style={{ color: "var(--accent)" }}
                  >
                    Visit stencilmind.com →
                  </a>
                </article>

                <article className="product-card">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.08em]"
                    style={{
                      color: "var(--muted)",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    In Development
                  </span>
                  <h2
                    className="mb-3 mt-4 text-lg font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    Trading System
                  </h2>
                  <p
                    className="text-sm font-light leading-[1.7]"
                    style={{ color: "var(--muted)" }}
                  >
                    Software infrastructure for systematic trading strategies.
                    Built for quantitative workflows and multi-asset
                    environments.
                  </p>
                </article>

                <article className="product-card">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.08em]"
                    style={{
                      color: "var(--muted)",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    In Development
                  </span>
                  <h2
                    className="mb-3 mt-4 text-lg font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    Field Service SaaS
                  </h2>
                  <p
                    className="text-sm font-light leading-[1.7]"
                    style={{ color: "var(--muted)" }}
                  >
                    Operations software for field teams. Workflow tooling built
                    for professionals who work outside an office.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section
            style={{
              width: "100%",
              paddingTop: "1.5rem",
              paddingBottom: "1.5rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                maxWidth: "720px",
                width: "100%",
                margin: "0 auto",
                padding: "0 2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "1px",
                  background: "var(--border)",
                  margin: "0 auto 3rem",
                }}
              />
              <h2
                className="mb-6 text-[clamp(1.5rem,3vw,2.2rem)] font-medium"
                style={{ color: "var(--text)" }}
              >
                One approach. Every product.
              </h2>
              <p
                className="text-[15px] font-light leading-[1.85]"
                style={{ color: "var(--muted)" }}
              >
                We build focused, vertical-specific software - not platforms,
                not consulting, not AI wrappers. Every product DualScript ships
                solves one real problem for one defined professional audience.
                From financial markets to creative trades.
              </p>
            </div>
          </section>
        </main>

        <footer
          style={{
            borderTop: "1px solid var(--border)",
            padding: "1.5rem 2rem",
          }}
        >
          <div
            className="mx-auto flex max-w-[1100px] flex-col items-center gap-2 text-center text-xs md:flex-row md:items-center md:justify-between"
            style={{ color: "var(--muted)" }}
          >
            <span>© 2026 DualScript LLC</span>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy"
                className="transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ color: "var(--muted)" }}
              >
                Privacy Policy
              </Link>
              <a
                href="mailto:info@dualscript.io"
                className="transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ color: "var(--muted)" }}
              >
                info@dualscript.io
              </a>
            </div>
          </div>
        </footer>
    </>
  );
}
