export default function FacelessYouTubePage() {
  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#111",
      }}
    >
      {/* HERO */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: 800,
            marginBottom: "20px",
          }}
        >
          Faceless YouTube
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "700px",
            margin: "0 auto",
            color: "#444",
            lineHeight: 1.6,
          }}
        >
          Learn how to build powerful YouTube channels without showing your
          face. Discover a modern content model that allows you to publish
          videos consistently and grow your presence online.
        </p>

        <div style={{ marginTop: "40px" }}>
          <button
            style={{
              backgroundColor: "#ff0000",
              color: "white",
              border: "none",
              padding: "16px 32px",
              fontSize: "18px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Get Instant Access
          </button>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        style={{
          backgroundColor: "white",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "40px",
          }}
        >
          <div>
            <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
              No Camera Needed
            </h3>
            <p style={{ color: "#555", lineHeight: 1.6 }}>
              Create engaging content without appearing on camera. Perfect for
              those who value privacy while building a strong online presence.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
              Simple Content Model
            </h3>
            <p style={{ color: "#555", lineHeight: 1.6 }}>
              Learn a streamlined structure for producing videos quickly and
              consistently without complex editing workflows.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
              Scalable Strategy
            </h3>
            <p style={{ color: "#555", lineHeight: 1.6 }}>
              Discover how creators scale channels by using repeatable systems
              that allow continuous growth.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          Start Your Faceless Channel Today
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            maxWidth: "650px",
            margin: "0 auto 40px",
          }}
        >
          Access the full guide and learn the exact process used to create and
          grow faceless YouTube channels step by step.
        </p>

        <button
          style={{
            backgroundColor: "#ff0000",
            color: "white",
            border: "none",
            padding: "18px 36px",
            fontSize: "18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Access Now
        </button>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #e5e7eb",
          textAlign: "center",
          padding: "30px",
          fontSize: "14px",
          color: "#666",
        }}
      >
        © {new Date().getFullYear()} Faceless YouTube
      </footer>
    </div>
  );
}