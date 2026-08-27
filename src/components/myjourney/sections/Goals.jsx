const goals = [
  {
    verb: "BUILD",
    lines: ["real", "software", "that works"],
  },
  {
    verb: "UNDERSTAND",
    lines: ["systems,", "data &", "architecture"],
  },
  {
    verb: "GROW",
    lines: ["as a", "software", "engineer"],
  },
];

export default function Goals() {
  return (
    <div className="mj-section goals-section">

      {/* Label */}
      <span className="mj-label goals-label">03 / GOALS</span>

      {/* Three columns */}
      <div className="goals-columns">
        {goals.map((goal, i) => (
          <div className="goals-col" key={goal.verb}>

            {/* Column number */}
            <span className="goals-col-num">0{i + 1}</span>

            {/* Big verb */}
            <h2 className="goals-verb">{goal.verb}</h2>

            {/* Supporting lines */}
            <div className="goals-lines">
              {goal.lines.map((line) => (
                <p className="goals-line" key={line}>{line}</p>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Closing thought */}
      <p className="goals-footnote">
        Contribute to meaningful engineering work<br />
        and keep exploring through projects &amp; experimentation.
      </p>

    </div>
  );
}
