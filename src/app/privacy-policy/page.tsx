import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | DualScript",
  description:
    "How DualScript LLC collects, uses, and protects information on dualscript.io.",
};

export default function PrivacyPolicy() {
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
          <Link
            href="/"
            className="text-[15px] tracking-[0.08em] transition-colors duration-200 hover:text-[var(--accent)]"
            style={{ color: "var(--text)" }}
          >
            DualScript
          </Link>
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-[var(--accent)]"
            style={{ color: "var(--muted)" }}
          >
            Home
          </Link>
        </div>
      </nav>

      <main style={{ margin: 0, padding: 0 }}>
        <section
          style={{
            width: "100%",
            paddingTop: "4rem",
            paddingBottom: "4rem",
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
            }}
          >
            <h1
              className="mb-3 text-[clamp(1.75rem,4vw,2.5rem)] font-medium"
              style={{ color: "var(--text)" }}
            >
              Privacy Policy
            </h1>
            <p
              className="mb-10 text-sm font-light"
              style={{ color: "var(--muted)" }}
            >
              Last updated: June 13, 2026
            </p>

            <div
              className="space-y-8 text-[15px] font-light leading-[1.85]"
              style={{ color: "var(--muted)" }}
            >
              <p style={{ color: "var(--text)" }}>
                DualScript LLC (&ldquo;DualScript,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us&rdquo;) operates dualscript.io. This policy explains
                what information we collect when you visit our website, how we
                use it, and the choices you have. We are a pre-product software
                company with a small data footprint — we collect only what we
                need to respond to you and share occasional company updates.
              </p>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  What we collect
                </h2>
                <p className="mb-3">
                  We collect information only when you choose to give it to us:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong style={{ color: "var(--text)", fontWeight: 400 }}>
                      Contact form
                    </strong>{" "}
                    — your name, email address, and message when you reach out
                    to us.
                  </li>
                  <li>
                    <strong style={{ color: "var(--text)", fontWeight: 400 }}>
                      Email signup form
                    </strong>{" "}
                    — your email address when you sign up to hear about DualScript
                    products and updates.
                  </li>
                </ul>
                <p className="mt-3">
                  We do not collect payment information, account credentials, or
                  any data from product users — we do not have customers or
                  end-user products at this time.
                </p>
              </section>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  How we use your information
                </h2>
                <p className="mb-3">We use the information you provide to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Respond to inquiries you send through our contact form.</li>
                  <li>
                    Send occasional company and product updates to people who
                    signed up for our email list.
                  </li>
                </ul>
                <p className="mt-3">
                  That is the full list. We do not use your information for
                  advertising, profiling, or any purpose beyond what is
                  described here.
                </p>
              </section>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  Third-party processors
                </h2>
                <p className="mb-3">
                  Form submissions and email signups are stored using{" "}
                  <strong style={{ color: "var(--text)", fontWeight: 400 }}>
                    Supabase
                  </strong>
                  , a database service hosted on{" "}
                  <strong style={{ color: "var(--text)", fontWeight: 400 }}>
                    Amazon Web Services (AWS)
                  </strong>
                  . Supabase is our only third-party data processor — it stores
                  data on our behalf so we can operate the website.
                </p>
                <p>
                  We do not sell your information. We do not share it with third
                  parties for their marketing purposes.
                </p>
              </section>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  How long we keep your data
                </h2>
                <p>
                  We retain your information only as long as needed for the
                  purpose it was collected — to respond to your inquiry or to
                  send you updates you asked for. When information is no longer
                  needed, we delete it or anonymize it. We do not store personal
                  data indefinitely.
                </p>
              </section>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  Your rights
                </h2>
                <p>
                  You may request access to, correction of, or deletion of your
                  personal information at any time by emailing{" "}
                  <a
                    href="mailto:info@dualscript.io"
                    className="transition-colors duration-200 hover:text-[var(--accent)]"
                    style={{ color: "var(--accent)" }}
                  >
                    info@dualscript.io
                  </a>
                  . We will respond to reasonable requests promptly.
                </p>
              </section>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  Cookies and tracking
                </h2>
                <p className="mb-3">
                  This site may set functional cookies required for basic
                  operation. We do not currently use analytics or advertising
                  tracking tools.
                </p>
                <p>
                  We may add analytics or similar tools in the future to
                  understand how visitors use the site. If we do, we will update
                  this policy and describe what is collected and why. Continued
                  use of the site after an update means you accept the revised
                  policy.
                </p>
              </section>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  Children
                </h2>
                <p>
                  dualscript.io is not directed at children under 13, and we do
                  not knowingly collect personal information from anyone under
                  that age. If you believe we have received information from a
                  child, please contact us and we will delete it.
                </p>
              </section>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  Contact us
                </h2>
                <p>
                  Questions about this policy or how we handle your data? Email{" "}
                  <a
                    href="mailto:info@dualscript.io"
                    className="transition-colors duration-200 hover:text-[var(--accent)]"
                    style={{ color: "var(--accent)" }}
                  >
                    info@dualscript.io
                  </a>
                  .
                </p>
                <p className="mt-3">
                  DualScript LLC
                  <br />
                  Wyoming, United States
                </p>
              </section>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  Changes to this policy
                </h2>
                <p>
                  We may update this privacy policy from time to time. When we
                  do, we will revise the &ldquo;Last updated&rdquo; date at the
                  top of this page. Your continued use of dualscript.io after
                  any update constitutes acceptance of the revised policy.
                </p>
              </section>
            </div>
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
