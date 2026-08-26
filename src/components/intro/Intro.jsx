import './Intro.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Intro() {
    useEffect(() => {
        gsap.set(".name", {
            rotationZ: 5,
            skewX: -10,
            transformPerspective: 500,
        });

        gsap.to(".name", {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
        });
    }, []);

    return (
        <section className="intro">
            <h1 className="name">GAURAV KUMAR GOPE</h1>
            <h3>PORTFOLIO</h3>
        </section>
    );
}