export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Little Sun Workshop home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Little Sun Workshop</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#collections">Collections</a>
          <a href="#story">Our story</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Handmade beadwork · Arizona</p>
          <h1>Jewelry made slowly, worn joyfully.</h1>
          <p className="lede">
            Colorful, small-batch pieces shaped by hand and inspired by warm
            days, desert light, and the little things worth celebrating.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#collections">
              Explore the workshop
            </a>
            <a className="text-link" href="#story">
              Meet the maker <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="A playful arrangement of beads">
          <div className="bead strand-one" />
          <div className="bead strand-two" />
          <div className="bead strand-three" />
          <div className="sun-disc" />
        </div>
      </section>

      <section className="collections" id="collections">
        <div className="section-heading">
          <p className="eyebrow">A place to begin</p>
          <h2>Future collections</h2>
          <p>
            These placeholders give us a simple structure for product photos,
            stories, and shopping when you are ready.
          </p>
        </div>

        <div className="collection-grid">
          {[
            ["01", "Earrings", "Light-catching color for everyday wear."],
            ["02", "Necklaces", "Layerable beadwork made one strand at a time."],
            ["03", "One of a kind", "Small experiments and singular pieces."],
          ].map(([number, title, description]) => (
            <article className="collection-card" key={title}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <span aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="story" id="story">
        <div className="story-art" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="story-copy">
          <p className="eyebrow">Made by hand</p>
          <h2>A small workshop with a bright point of view.</h2>
          <p>
            This is a starter home for the maker’s story: what inspires the
            work, how each piece is made, and why Little Sun Workshop exists.
            We will replace this copy together as the brand takes shape.
          </p>
        </div>
      </section>

      <footer id="contact">
        <div>
          <p className="eyebrow">Little Sun Workshop</p>
          <h2>More color is coming.</h2>
        </div>
        <p>
          Product photography, shop links, contact details, and social accounts
          will live here when they are ready.
        </p>
        <p className="copyright">
          © {new Date().getFullYear()} Little Sun Workshop
        </p>
      </footer>
    </main>
  );
}
