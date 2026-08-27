import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Intro2 from "./sections/Intro2.jsx";
import Skills from "./sections/Skills.jsx";
import Goals from "./sections/Goals.jsx";

import "./sections/Intro2.css";
import "./sections/Skills.css";
import "./sections/Goals.css";
import "./MyJourney.css";

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = ["01 INTRO", "02 SKILLS", "03 GOALS"];

export default function MyJourney() {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const progressFillRef = useRef(null);
  const dotRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const totalSections = 3;
      const scrollDistance = (totalSections - 1) * 100; // vw units → use px

      /* ===========================
         HORIZONTAL SCROLL
      =========================== */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outerRef.current,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Update progress bar fill
            if (progressFillRef.current) {
              gsap.set(progressFillRef.current, {
                scaleX: self.progress,
              });
            }
            // Update active dot
            const activeIndex = Math.round(
              self.progress * (SECTIONS.length - 1)
            );
            dotRefs.current.forEach((dot, i) => {
              if (!dot) return;
              dot.classList.toggle("active", i <= activeIndex);
            });
          },
        },
      });

      tl.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
      });

      /* ===========================
         SECTION REVEAL ANIMATIONS
      =========================== */

      // Intro section
      const introSection = outerRef.current.querySelector(".intro2-section");
      const introLabel = introSection.querySelector(".intro2-label");
      const introLines = introSection.querySelectorAll(".intro2-line");
      const introRight = introSection.querySelector(".intro2-right");

      gsap.from([introLabel], {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(introLines, {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from(introRight, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.8,
      });

      // Skills section — trigger when scrolled into view
      const skillsSection = outerRef.current.querySelector(".skills-section");
      const skillsLabel = skillsSection.querySelector(".mj-label");
      const skillsHeadline = skillsSection.querySelector(".skills-headline");
      const skillClusters = skillsSection.querySelectorAll(".skills-cluster");

      ScrollTrigger.create({
        trigger: outerRef.current,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        scrub: false,
        onUpdate: (self) => {
          // Skills panel is at ~33%-66% progress
          if (self.progress > 0.28 && !skillsSection._revealed) {
            skillsSection._revealed = true;
            gsap.from(skillsLabel, {
              opacity: 0,
              y: 20,
              duration: 0.7,
              ease: "power3.out",
            });
            gsap.from(skillsHeadline, {
              opacity: 0,
              y: 40,
              duration: 0.8,
              ease: "power3.out",
              delay: 0.15,
            });
            gsap.from(skillClusters, {
              opacity: 0,
              y: 30,
              stagger: 0.1,
              duration: 0.7,
              ease: "power3.out",
              delay: 0.3,
            });
          }
        },
      });

      // Goals section — trigger at ~66%+ progress
      const goalsSection = outerRef.current.querySelector(".goals-section");
      const goalsLabel = goalsSection.querySelector(".mj-label");
      const goalsCols = goalsSection.querySelectorAll(".goals-col");
      const goalsFootnote = goalsSection.querySelector(".goals-footnote");

      ScrollTrigger.create({
        trigger: outerRef.current,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        scrub: false,
        onUpdate: (self) => {
          if (self.progress > 0.62 && !goalsSection._revealed) {
            goalsSection._revealed = true;
            gsap.from(goalsLabel, {
              opacity: 0,
              y: 20,
              duration: 0.7,
              ease: "power3.out",
            });
            gsap.from(goalsCols, {
              opacity: 0,
              y: 50,
              stagger: 0.12,
              duration: 0.9,
              ease: "power3.out",
              delay: 0.2,
            });
            gsap.from(goalsFootnote, {
              opacity: 0,
              y: 20,
              duration: 0.7,
              ease: "power3.out",
              delay: 0.6,
            });
          }
        },
      });
    }, outerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mj-outer" ref={outerRef}>

      {/* Horizontal track */}
      <div id="journey" className="mj-track" ref={trackRef}>
        <Intro2 />
        <Skills />
        <Goals />
      </div>

      {/* Progress indicator */}
      <div className="mj-progress">

        {/* Thin line */}
        <div className="mj-progress-track">
          <div
            className="mj-progress-fill"
            ref={progressFillRef}
          />
        </div>

        {/* Labels + dots */}
        <div className="mj-progress-labels">
          {SECTIONS.map((label, i) => (
            <div className="mj-progress-item" key={label}>
              <span
                className="mj-progress-dot"
                ref={(el) => (dotRefs.current[i] = el)}
              />
              <span className="mj-progress-label">{label}</span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
