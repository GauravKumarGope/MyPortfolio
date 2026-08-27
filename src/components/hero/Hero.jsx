import heroImg from '../../assets/hero.png';

import design1 from '../../assets/design1.2.png';
import design2 from '../../assets/design1.png';
import design3 from '../../assets/design2.2.jpeg';
import design4 from '../../assets/design2.jpeg';
import design5 from '../../assets/design3.png';
import design6 from '../../assets/design4.png';

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";


const projectImages = [
  design1,
  design2,
  design3,
  design4,
  design5,
  design6
];


export default function Hero() {

  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      /* =========================
         TITLE
      ========================= */

      const titles = [
        "SOFTWARE ENGINEER",
        "FRONTEND ENGINEER",
        "BACKEND ENGINEER"
      ];

      const title = titleRef.current;

      let titleIndex = 0;

      const titleTimer = setInterval(() => {

        const nextIndex =
          (titleIndex + 1) % titles.length;

        gsap.timeline()

          .to(title, {
            yPercent: -100,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in"
          })

          .set(title, {
            textContent: titles[nextIndex],
            yPercent: 100
          })

          .to(title, {
            yPercent: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
          });

        titleIndex = nextIndex;

      }, 3000);


      /* =========================
         PROJECT CAROUSEL
      ========================= */

      const cards = gsap.utils.toArray(
        ".project-card"
      );


      /*
        Six positions.

        Only positions 1 → 4
        are clearly visible.

        Positions 0 and 5
        are entering/leaving.
      */

      const positions = [

        // LEFT OUT
        {
          x: -900,
          y: 70,
          scale: 0.65,
          opacity: 0,
          rotation: -10
        },

        // LEFT
        {
          x: -480,
          y: 30,
          scale: 0.82,
          opacity: 0.45,
          rotation: -6
        },

        // CENTER LEFT
        {
          x: -160,
          y: 0,
          scale: 0.95,
          opacity: 0.65,
          rotation: -2
        },

        // CENTER RIGHT
        {
          x: 160,
          y: 0,
          scale: 0.95,
          opacity: 0.65,
          rotation: 2
        },

        // RIGHT
        {
          x: 480,
          y: 30,
          scale: 0.82,
          opacity: 0.45,
          rotation: 6
        },

        // RIGHT OUT
        {
          x: 900,
          y: 70,
          scale: 0.65,
          opacity: 0,
          rotation: 10
        }

      ];


      /* =========================
         INITIAL POSITIONS
      ========================= */

      cards.forEach((card, index) => {

        const position = positions[index];

        gsap.set(card, {

          x: position.x,
          y: position.y,

          scale: position.scale,

          opacity: position.opacity,

          rotation: position.rotation,

          xPercent: -50,
          yPercent: -50,

          zIndex: 10 - Math.abs(2.5 - index)

        });

      });


      /* =========================
         MOVE CARDS
      ========================= */

      const animateCard = (
        card,
        currentPosition
      ) => {

        const nextPosition =
          (currentPosition + 1) %
          positions.length;

        const position =
          positions[nextPosition];


        gsap.to(card, {

          x: position.x,
          y: position.y,

          scale: position.scale,

          opacity: position.opacity,

          rotation: position.rotation,

          zIndex:
            10 -
            Math.abs(2.5 - nextPosition),

          duration: 4,

          ease: "power2.inOut",

          onComplete: () => {

            animateCard(
              card,
              nextPosition
            );

          }

        });

      };


      /* =========================
         START CAROUSEL
      ========================= */

      cards.forEach((card, index) => {

        animateCard(
          card,
          index
        );

      });


      /* =========================
         CLEANUP
      ========================= */

      return () => {

        clearInterval(titleTimer);

      };

    }, heroRef);


    return () => {
      ctx.revert();
    };

  }, []);


  return (

    <div
      className="HeroSection"
      ref={heroRef}
    >

      {/* BACKGROUND EDITORIAL LAYER */}
      <div className="hero-bg-layer" aria-hidden="true">
        {/* Oversized background numbers */}
        <div className="hero-bg-number">00</div>
        <div className="hero-bg-word">INDEX</div>

        {/* Vertical guide lines 
        <div className="hero-grid-line hero-grid-line-left" />
        <div className="hero-grid-line hero-grid-line-center" />
        <div className="hero-grid-line hero-grid-line-right" /> */}

        {/* Horizontal rules 
        <div className="hero-rule hero-rule-top" />
        <div className="hero-rule hero-rule-mid" />
        <div className="hero-rule hero-rule-bottom" /> */}

        {/* Technical / Editorial labels */}
        {/*<span className="hero-label-top-left">00 / INDEX</span>
        <span className="hero-label-top-right">12.2958° N, 76.6394° E</span>
        <span className="hero-label-mid-left">FIG. 0.0 — SELECTED WORKS</span>*/}
        <span className="hero-label-bottom-right">SCROLL TO EXPLORE ↓</span>

        {/* Crosshair marks 
        <span className="hero-mark mark-tl">+</span>
        <span className="hero-mark mark-tr">+</span>
        <span className="hero-mark mark-bl">+</span>
        <span className="hero-mark mark-br">+</span> */}
      </div>

      {/* TITLE */}

      <div className="hero-title">

        <span
          ref={titleRef}
          className="hero-title-text"
        >
          SOFTWARE ENGINEER
        </span>

      </div>


      {/* PROJECT IMAGES */}

      <div className="project-carousel">

        <div className="project-track">

          {projectImages.map(
            (image, index) => (

              <div
                className="project-card"
                key={index}
              >

                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                />

              </div>

            )
          )}

        </div>

      </div>


      {/* BOTTOM LEFT */}

      <div className="hero-meta hero-meta-left">

        <span>
          GAURAV KUMAR GOPE
        </span>

      </div>


      {/* BOTTOM RIGHT */}

      <div className="hero-meta hero-meta-right">

        <span>
          FULL STACK / SOFTWARE ENGINEER
        </span>

      </div>


      {/* CHARACTER */}

      <div id="me">

        <img
          src={heroImg}
          alt=""
        />

      </div>

    </div>

  );
}