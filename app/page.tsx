import Image from "next/image";
import { PieceCard } from "@/components/PieceCard";
import { SunMark } from "@/components/SunMark";
import { featuredPieces, processSteps } from "@/content/site";

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <p>Handcrafted jewelry · Phoenix, Arizona</p>
        <p>First collection in the works</p>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Little Sun Workshop home">
          <SunMark />
          <span>Little Sun Workshop</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#collections">Collections</a>
          <a href="#story">Story</a>
          <a href="#process">Process</a>
          <a href="#first-light">First light</a>
        </nav>

        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#collections">Collections</a>
            <a href="#story">Story</a>
            <a href="#process">Process</a>
            <a href="#first-light">First light</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Made slowly under a wide desert sky</p>
          <h1>
            Color made
            <span> by hand.</span>
          </h1>
          <p className="hero-lede">
            Bead by bead, Little Sun Workshop creates joyful, small-batch
            jewelry for color lovers, sun seekers, and beautifully ordinary
            days.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#collections">
              See what’s taking shape
            </a>
            <a className="underlined-link" href="#story">
              Our little story <span aria-hidden="true">↘</span>
            </a>
          </div>
          <p className="hero-note">No two handmade pieces are quite alike.</p>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <Image
              src="/products/golden-shell-hoops.png"
              alt="Handcrafted golden shell hoop earrings displayed in warm Arizona sunlight"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 55vw"
            />
          </div>
          <div className="image-caption">
            <span>Beadwork in progress</span>
            <span>Phoenix · AZ</span>
          </div>
          <div className="sun-stamp">
            <SunMark />
            <span>Made with a little sun</span>
          </div>
        </div>
      </section>

      <div className="values-ribbon" aria-label="Little Sun Workshop values">
        <div>
          <span>Small batch</span>
          <SunMark />
          <span>Made in Phoenix</span>
          <SunMark />
          <span>Joyfully irregular</span>
          <SunMark />
          <span>Built by hand</span>
        </div>
      </div>

      <section className="collection-section" id="collections">
        <div className="section-intro">
          <p className="eyebrow">Fresh from the worktable</p>
          <h2>Pieces with warmth, rhythm, and a point of view.</h2>
          <p>
            A first look at the shapes, colors, and materials coming out of
            Little Sun Workshop. Names and release details are still taking
            shape—every piece shown here was made by hand.
          </p>
        </div>

        <div className="piece-grid">
          {featuredPieces.map((piece, index) => (
            <PieceCard piece={piece} index={index} key={piece.name} />
          ))}
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-logo">
          <Image
            src="/brand/little-sun-workshop-logo.png"
            alt="Little Sun Workshop logo with a smiling sun"
            fill
            sizes="(max-width: 820px) 100vw, 45vw"
          />
        </div>

        <div className="story-copy">
          <p className="eyebrow">The workshop</p>
          <h2>A little sun, strung one bead at a time.</h2>
          <p className="story-lede">
            Little Sun Workshop is a handcrafted jewelry studio taking shape
            in Phoenix, Arizona—a place for color, careful hands, and pieces
            with enough spirit to feel personal.
          </p>
          <p>
            The final maker story will live here: the first strand, the
            traditions and textures behind the work, and the reason this tiny
            workshop came to be. For now, consider this an open door and a
            warm patch of light on the worktable.
          </p>
          <blockquote>
            “The good stuff should feel made, not manufactured.”
          </blockquote>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="process-heading">
          <p className="eyebrow">How it comes together</p>
          <h2>Slow work. Bright result.</h2>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <article key={step.number}>
              <p>{step.number}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-strip" aria-label="More work from the studio">
        <div className="gallery-image">
          <Image
            src="/products/turquoise-sun-necklace.png"
            alt="Turquoise and cream beaded necklace"
            fill
            sizes="(max-width: 760px) 100vw, 33vw"
          />
        </div>
        <div className="gallery-image">
          <Image
            src="/products/desert-garden-bracelet.png"
            alt="Turquoise and purple floral beaded bracelet"
            fill
            sizes="(max-width: 760px) 100vw, 33vw"
          />
        </div>
        <div className="gallery-image">
          <Image
            src="/products/sunset-shell-earrings.jpg"
            alt="Pearl and shell earrings in warm sunset colors"
            fill
            sizes="(max-width: 760px) 100vw, 33vw"
          />
        </div>
      </section>

      <section className="first-light" id="first-light">
        <div className="first-light-mark">
          <SunMark />
        </div>
        <div>
          <p className="eyebrow">Catch the first light</p>
          <h2>Be here when the first pieces drop.</h2>
          <p>
            Quiet notes from the worktable, early looks, and first access to
            small-batch releases. No noise—just the good stuff.
          </p>
        </div>

        <form
          className="email-form"
          name="first-light"
          method="POST"
          action="/thanks"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="first-light" />
          <label htmlFor="email">Email address</label>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
            <button type="submit">Join the list</button>
          </div>
        </form>
      </section>

      <footer>
        <div className="footer-brand">
          <SunMark />
          <h2>Little Sun Workshop</h2>
          <p>Handcrafted jewelry from Phoenix, Arizona.</p>
        </div>

        <div className="footer-links">
          <div>
            <p>Explore</p>
            <a href="#collections">Collections</a>
            <a href="#story">Our story</a>
            <a href="#process">The process</a>
          </div>
          <div>
            <p>Follow along</p>
            <span>Instagram coming soon</span>
            <span>Shop coming soon</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Little Sun Workshop</p>
          <p>Made with care in the Valley of the Sun</p>
        </div>
      </footer>
    </main>
  );
}
