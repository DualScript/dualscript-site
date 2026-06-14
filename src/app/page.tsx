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
          <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-8">
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
              minHeight: "calc(100vh - 56px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              zIndex: 1,
              paddingTop: "2rem",
              paddingBottom: "2rem",
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
              <div style={{ width: "min(520px, 80vw)", marginBottom: "2.5rem" }}>
                <svg
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="320 860 1340 280"
                  role="img"
                  aria-label="DualScript"
                  style={{ width: "100%", height: "auto" }}
                >
                  <defs>
                    <style>{`.st0{fill:url(#linear-gradient2)}.st1{fill:#fff}.st2{fill:url(#linear-gradient1)}.st3{fill:url(#linear-gradient3)}.st4{fill:#030421}.st5{fill:url(#linear-gradient)}`}</style>
                    <linearGradient
                      id="linear-gradient"
                      x1="461.81"
                      y1="891.67"
                      x2="461.81"
                      y2="1080.74"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="aqua" />
                      <stop offset="1" stopColor="#006ee3" />
                    </linearGradient>
                    <linearGradient
                      id="linear-gradient1"
                      x1="780.78"
                      y1="891.67"
                      x2="780.78"
                      y2="1080.74"
                      xlinkHref="#linear-gradient"
                    />
                    <linearGradient
                      id="linear-gradient2"
                      x1="640.5"
                      y1="891.67"
                      x2="640.5"
                      y2="1080.74"
                      xlinkHref="#linear-gradient"
                    />
                    <linearGradient
                      id="linear-gradient3"
                      x1="891.65"
                      y1="891.67"
                      x2="891.65"
                      y2="1080.74"
                      xlinkHref="#linear-gradient"
                    />
                  </defs>
                  <g>
                    <path
                      className="st1"
                      d="M1108.8,886.71c-.79,2.15-.95,2.93-1.33,3.58q-16.65,28.01-49.13,28.02c-15.28.01-30.6-.47-45.84.38-6.31.35-13.44,2.22-18.49,5.8-12.98,9.21-10.81,24.83,4.34,29.65,15.23,4.85,31.12,7.66,46.76,11.2,18.56,4.21,34.88,11.26,37.55,33.01,2.94,24-9.63,48.01-30.78,57.07-10.23,4.38-21.74,7.58-32.77,7.92-33.67,1.01-67.39.39-101.1.34-2.21,0-10.32.24-10.32.24,8.4-10.6,16.35-21.61,24.3-29.95,2.66-2.78,8.53-3.37,12.96-3.44,22.73-.36,45.47.13,68.19-.49,6.79-.18,14.74-1.27,19.88-5.05,4.47-3.28,7.81-11.01,7.67-16.66-.11-4.03-6.17-10.03-10.71-11.43-14.17-4.36-28.88-6.95-43.39-10.22-2.29-.52-4.59-.95-6.87-1.5-16.33-3.99-31.5-10.34-34.53-29.06-3.57-22.01-.25-43.07,20.15-56.23,9.62-6.2,21.36-12.13,32.38-12.6,36.68-1.56,73.46-.59,111.1-.59Z"
                    />
                    <path
                      className="st1"
                      d="M1369.82,1115.16c4.39-19.56,8.52-37.36,12.36-55.23,7.55-35.15,15.02-70.31,22.29-105.51,1.33-6.47,3.39-10.35,11.12-10.2,24.65.48,49.38-.7,73.97.67,32.74,1.82,46.2,19.21,41.96,51.44-.56,4.27-1.25,8.53-2.12,12.74-7.23,35.35-29.76,53.83-66.14,54.26-10.96.13-22,.97-32.87,0-10.95-.98-14.23,4.17-15.45,13.72-1.29,10.08-3.96,19.97-5.52,30.02,0,0-1.63,8.21-1.63,8.21-9.27-.48-27.13-.12-37.98-.12ZM1448.49,1036.8c30.84-.21,45.73-14.16,46.71-43.75.45-13.56-5.72-20.45-19.33-20.87-9.75-.3-19.54.43-29.27-.03-7.02-.33-9.66,2.98-10.9,9.22-2.12,10.71-5,21.27-7.01,31.99-4.74,25.27-8.5,23.45,19.8,23.43Z"
                    />
                    <path
                      className="st1"
                      d="M1222.27,944.14c-3.84,22.3-9.91,27.83-29.35,28.05-8.62.1-17.26-.12-25.87.27-23.9,1.07-43.07,33.28-31.06,53.97,3.1,5.34,12.55,9.1,19.43,9.71,15.88,1.41,31.98.45,48.71.45-.28,3.66-.29,5.91-.64,8.1-2.98,18.5-3,18.68-22.14,18.51-16.83-.15-33.8.45-50.46-1.47-24.34-2.81-35.71-17.08-35.59-41.38.21-46.37,27.87-74.93,74.2-76.13,17.5-.46,35.02-.07,52.77-.07Z"
                    />
                    <g>
                      <path
                        className="st5"
                        d="M384.14,885.65c42.49,0,84.12-2.52,125.31.71,40.49,3.18,55.29,23.18,53.63,63.83-1.28,31.54-8.67,61.27-31.43,85.1-15.88,16.62-35.52,26.62-58.16,27.36-37.07,1.21-74.22.33-113.08.33,4.74-21.08,9.41-41.93,14.12-62.78,3.97-17.55,8.25-35.04,11.81-52.68,1.22-6.06,3.4-8.87,9.88-8.63,10.42.4,20.86.11,32.25.11-6.24,29.94-12.2,58.5-18.84,90.36,24.17-1.26,47.12,1.11,67.98-4.42,28.85-7.65,38.39-33.56,42.34-60.81,4.45-30.69-8.46-45.11-39.46-45.06-21.56.03-43.14-.5-64.68.26-10.07.36-16.14-3.14-20.24-11.99-3.42-7.39-7.58-14.44-11.45-21.71Z"
                      />
                      <path
                        className="st2"
                        d="M737.79,969.9c.67-9.44,1.22-17.14,1.93-27.07,9.2,0,18.38-.16,27.55.03,17.99.39,36.07-.02,53.93,1.75,21.14,2.09,32.73,16.73,29.1,37.37-4.46,25.39-10.71,50.48-16.84,75.54-.69,2.83-5.58,6.54-8.57,6.59-27.8.49-55.62.71-83.41.03-12.13-.3-23.69-4.47-28.14-17.39-5.19-15.07-3.18-29.56,7.97-41.61,10.84-11.73,25.35-14.93,40.54-15.39,13.3-.4,26.63-.16,39.95-.16,5.26,0,11.88-.06,10.48-7.11-.89-4.49-5.84-10.9-9.77-11.54-10.7-1.74-21.83-.93-32.79-1.02-10.45-.08-20.9-.02-31.92-.02ZM800.64,1038.98c1.32-8.21,2.48-15.4,3.85-23.95-9.33,0-17.5-.37-25.62.11-7.34.43-15.32.31-21.67,3.29-3.94,1.85-7.27,8.82-7.27,13.94,0,5.96,7.33,6.02,11.52,6.3,12.45.86,24.99.31,39.18.31Z"
                      />
                      <path
                        className="st0"
                        d="M621.69,942.66c-5.24,24.88-10.14,47.74-14.87,70.63-3.23,15.63.9,20.87,16.87,21.88,30.9,1.96,31.03,1.99,38.23-27.63,4.34-17.86,8.35-35.81,12.21-53.78,1.61-7.47,4.61-10.99,13.35-10.99s17.02.17,27.17.17c-2.87,14.15-5.2,26.72-8,39.18-5.41,24.03-11.3,47.95-16.52,72.02-1.56,7.19-4.24,10.59-12.29,10.36-26.61-.77-53.35.54-79.83-1.57-24.58-1.96-34.37-15.59-31.05-40.21,2.45-18.18,6.86-36.11,10.36-54.15q4.99-25.68,30.91-25.91c3.85-.03,7.7,0,13.45,0Z"
                      />
                      <path
                        className="st3"
                        d="M931.19,885.38c-13.27,60.97-26.06,119.72-38.89,178.65h-40.2c3.55-17.05,6.77-33.29,10.35-49.45,8.7-39.32,17.75-78.57,26.22-117.94,1.73-8.07,4.39-11.58,13.64-11.45,9.37-.13,17.88.19,28.89.19Z"
                      />
                    </g>
                    <path
                      className="st1"
                      d="M1215.93,1062.73c4.08-18.97,7.73-36.11,11.46-53.24,4-18.35,7.73-36.77,12.42-54.94,1-3.86,5.57-9.57,8.64-9.67,26.33-.85,52.7-.63,79.06-.62,1.43,0,5.79-.03,5.79-.03-2.48,7.58-4.37,17.16-7.56,24.09-1,2.18-5.46,3.7-8.43,3.88-9.37.55-18.8.08-28.19.46-14.02.58-18.71,4.5-21.7,18.29-4.48,20.66-8.9,41.34-12.85,62.11-1.33,7.01-4.25,10.2-11.61,9.78-8.13-.47-16.32-.11-27.04-.11Z"
                    />
                    <path
                      className="st1"
                      d="M1384.77,944.9c-4.93,23.43-9.31,44.47-13.81,65.49-3.11,14.56-6.6,29.04-9.48,43.64-1.17,5.94-3.61,8.92-10.03,8.67-8.88-.35-17.79-.09-28.01-.09,3.47-16.93,6.47-32.22,9.76-47.44,4.47-20.67,9.39-41.24,13.64-61.95,1.28-6.21,4.09-8.62,10.29-8.39,8.54.31,17.1.08,27.64.08Z"
                    />
                    <polygon
                      className="st1"
                      points="1352.88 932.78 1360.14 905.33 1394.22 905.33 1387.16 932.78 1352.88 932.78"
                    />
                    <path
                      className="st1"
                      d="M1572.61,908.07h36.45l-8.66,40.33h39.19l-8.66,26.88h-37.59l-11.62,50.81s-3.65,15.26,12.07,15.26h26.43l-6.61,26.43h-41.01s-27.8-1.59-27.8-28.48,12.76-62.43,12.76-62.43h-18.91l5.7-29.16h18l10.25-39.64Z"
                    />
                  </g>
                </svg>
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
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 500,
                  color: "var(--text)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                  fontFamily: "var(--mono)",
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
              padding: "4rem 0",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                maxWidth: "1100px",
                width: "100%",
                margin: "0 auto",
                padding: "0 2rem",
              }}
            >
              <div
                className="mb-12 inline-flex rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.12em]"
                style={{
                  color: "var(--muted)",
                  border: "1px solid var(--border-mid)",
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
              padding: "4rem 0",
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
                className="mx-auto mb-8 h-px w-[120px]"
                style={{ background: "var(--border)" }}
                role="presentation"
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
                We build focused, vertical-specific software — not platforms,
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
            <a
              href="mailto:info@dualscript.io"
              className="transition-colors duration-200 hover:text-[var(--accent)]"
              style={{ color: "var(--muted)" }}
            >
              info@dualscript.io
            </a>
          </div>
        </footer>
    </>
  );
}
