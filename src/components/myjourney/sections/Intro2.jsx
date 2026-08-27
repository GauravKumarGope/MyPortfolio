export default function Intro2() {
  return (
    <div className="mj-section intro2-section">

      {/* Label */}
      <span className="mj-label intro2-label">01 / INTRO</span>

      {/* LEFT — Main headline */}
      <div className="intro2-headline">
        <h2 className="intro2-line">
          I LIKE TO BUILD
          AND INNOVATE{" "}
          <span className="intro2-accent">FOR THE FUTURE.</span>
        </h2>
      </div>

      {/* RIGHT — Supporting text + identity */}
      <div className="intro2-right">

        {/* Three statements */}
        <div className="intro2-statements">
          <p className="intro2-statement">I build to understand.</p>
          <p className="intro2-statement">I experiment to learn.</p>
          <p className="intro2-statement">And I keep building to get better.</p>
        </div>

        {/* Identity block */}
        <div className="intro2-identity">
          <p className="intro2-name">GAURAV KUMAR GOPE</p>
          <p className="intro2-detail">CS Engineer · University of Mysore</p>
          <p className="intro2-detail">Exploring · Travelling · Gaming · Building</p>
        </div>

      </div>

    </div>
  );
}
