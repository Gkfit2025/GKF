// pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Grace Kennett Foundation, Madurai</title>
        <meta name="description" content="Grace Kennett Foundation Hospital – caring, adoption, community college, volunteering in Madurai." />
      </Head>

      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/hospital">Hospital</a></li>
            <li><a href="/burns-centre">Burns Centre</a></li>
            <li><a href="/adoption">Adoption</a></li>
            <li><a href="/volunteering">Volunteering</a></li>
            <li><a href="/save-a-child">Save a Child</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero / intro */}
        <section id="hero">
          <h1>Grace Kennett Foundation Hospital</h1>
          <p>Serving Madurai for over 60 years. Compassionate care, community empowerment, child adoption and education.</p>
        </section>

        {/* Key Units */}
        <section id="units">
          <h2>Our Units / Services</h2>
          <div className="cards">
            <div className="card">
              <h3>Mazhalai Illam – Child Adoption & Care</h3>
              <p>A recognized adoption centre for abandoned, surrendered and orphaned children. Over 1,500 adoptions completed.</p>
              <a href="/adoption">Learn more ↓</a>
            </div>
            <div className="card">
              <h3>Hospital Services</h3>
              <p>Medical, surgical, diabetic foot clinic, insurance empanelment and more.</p>
              <a href="/hospital">Book an appointment</a>
            </div>
            <div className="card">
              <h3>Burns Centre</h3>
              <p>Comprehensive burn prevention, first‑aid, rehabilitation and skin bank services.</p>
              <a href="/burns-centre">Explore services</a>
            </div>
            <div className="card">
              <h3>Community College & Training</h3>
              <p>Diploma & certificate courses in skill‑based education at affordable cost.</p>
              <a href="/community-college">Join now</a>
            </div>
            <div className="card">
              <h3>Volunteering & Support</h3>
              <p>Join as a volunteer, donor or well‑wisher to support child care and health services in Madurai.</p>
              <a href="/volunteering">Get involved</a>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about">
          <h2>About Us</h2>
          <p>Founded over six decades ago in Madurai, GKF is a non‑profit committed to healthcare, child protection, training and adoption services across India.</p>
          <p>CEO Dr (Capt) Augustus Samuel Dodd leads our mission—drawing on years of medical, military and community leadership.:contentReference[oaicite:1]{index=1}</p>
        </section>

        {/* Call to Action */}
        <section id="cta">
          <div className="cta-box">
            <h3>Want to support our mission?</h3>
            <a href="/donate" className="button">Donate Now</a>
          </div>
        </section>
      </main>

      <footer>
        <address>
          Grace Kennett Foundation Hospital<br/>
          8, Kennett Road, Madurai, Tamil Nadu, India<br/>
          Tel: +91‑452‑2601767 / +91‑95854‑40401
        </address>
        <div className="social">
          <a href="https://www.facebook.com/gkfmadurai">Facebook</a> • 
          <a href="https://www.instagram.com/gkfmadurai">Instagram</a>
        </div>
        <nav className="footer-links">
          <a href="/privacy">Privacy Policy</a> • <a href="/contact">Contact</a>
        </nav>
      </footer>

      <style jsx>{`
        /* basic responsive grid, typography etc. */
      `}</style>
    </>
  );
}
