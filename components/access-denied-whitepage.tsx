export default function FacelessYouTube() {

  const checkout = "https://pay.hotmart.com/U104758447T?off=imqt8k2q"

  return (
    <div style={{
      background:"#f5f5f5",
      minHeight:"100vh",
      fontFamily:"system-ui",
      color:"#111"
    }}>

      {/* HERO */}

      <section style={{
        maxWidth:"1100px",
        margin:"0 auto",
        padding:"80px 20px",
        textAlign:"center"
      }}>

        <div style={{
          background:"#ffffff",
          padding:"10px 20px",
          borderRadius:"999px",
          display:"inline-block",
          fontWeight:"600",
          color:"#ff0000",
          marginBottom:"20px"
        }}>
          YouTube Growth System
        </div>

        <h1 style={{
          fontSize:"54px",
          fontWeight:"800",
          lineHeight:"1.1",
          marginBottom:"20px"
        }}>
          Build Powerful <span style={{color:"#ff0000"}}>Faceless YouTube</span> Channels
        </h1>

        <p style={{
          fontSize:"22px",
          color:"#444",
          maxWidth:"720px",
          margin:"0 auto"
        }}>
          Discover how modern creators are building massive YouTube audiences
          without recording themselves, without expensive equipment and without
          spending hours editing videos.
        </p>

        <div style={{marginTop:"40px"}}>

          <button
            onClick={()=>window.open(checkout)}
            style={{
              background:"#ff0000",
              color:"#fff",
              border:"none",
              padding:"18px 40px",
              fontSize:"20px",
              borderRadius:"10px",
              cursor:"pointer",
              fontWeight:"700"
            }}
          >
            Get Instant Access
          </button>

        </div>

      </section>


      {/* BENEFITS */}

      <section style={{
        background:"#ffffff",
        padding:"80px 20px"
      }}>

        <div style={{
          maxWidth:"1100px",
          margin:"0 auto",
          textAlign:"center"
        }}>

          <h2 style={{
            fontSize:"36px",
            fontWeight:"800",
            marginBottom:"40px"
          }}>
            What You'll Discover Inside
          </h2>

          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
            gap:"30px"
          }}>

            <div>
              <h3>Faceless Content Model</h3>
              <p style={{color:"#555"}}>
                Learn the structure used by successful creators to publish
                videos consistently without filming themselves.
              </p>
            </div>

            <div>
              <h3>Viral Video Framework</h3>
              <p style={{color:"#555"}}>
                Discover how to create videos designed to capture attention and
                keep viewers watching.
              </p>
            </div>

            <div>
              <h3>Channel Growth Strategy</h3>
              <p style={{color:"#555"}}>
                Understand how channels scale quickly when using the right
                niche and content structure.
              </p>
            </div>

            <div>
              <h3>Simple Production System</h3>
              <p style={{color:"#555"}}>
                Create videos faster using tools that simplify editing and
                content creation.
              </p>
            </div>

            <div>
              <h3>Shorts Growth Strategy</h3>
              <p style={{color:"#555"}}>
                Learn how YouTube Shorts accelerate audience growth for new
                channels.
              </p>
            </div>

            <div>
              <h3>Content Ideas Engine</h3>
              <p style={{color:"#555"}}>
                Never run out of video ideas with a repeatable system used by
                top creators.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section style={{
        padding:"90px 20px",
        textAlign:"center"
      }}>

        <h2 style={{
          fontSize:"42px",
          fontWeight:"800",
          marginBottom:"20px"
        }}>
          Start Your Faceless YouTube Channel Today
        </h2>

        <p style={{
          fontSize:"20px",
          color:"#555",
          maxWidth:"700px",
          margin:"0 auto 40px"
        }}>
          Access the complete guide and learn how to create YouTube channels
          designed to grow consistently using modern content strategies.
        </p>

        <button
          onClick={()=>window.open(checkout)}
          style={{
            background:"#ff0000",
            color:"#fff",
            border:"none",
            padding:"20px 45px",
            fontSize:"20px",
            borderRadius:"10px",
            cursor:"pointer",
            fontWeight:"700"
          }}
        >
          Access The Program
        </button>

      </section>


      {/* FOOTER */}

      <footer style={{
        borderTop:"1px solid #ddd",
        textAlign:"center",
        padding:"40px",
        color:"#666",
        fontSize:"14px"
      }}>
        © {new Date().getFullYear()} Faceless YouTube
      </footer>

    </div>
  )
}