import React from "react"

const About = () => {
  return (
    <section className="pt-5">
      <div className="container about-container">
        <h1 className="main-header">Quaulity products at your convenience.</h1>
        <div className="about__section-grid">
          <div className="socials">
            <p>logoproducts@gmail.com</p>
          </div>
          <div className="about__description">
            <p>
              <span className="text-span">(About)</span>A brand that began with
              a designer searching the world for natural, sustainable materials.
              The fruits of his search were then combined with the superlative
              technologies of Japan to create refined and elegant garments for
              the discerning adult.
            </p>
            <div className="store-img">
              <img src="/imgs/store.jpg" alt="" />
            </div>
            <p className="text-muted">
              Find our store at your nearest locations...
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
