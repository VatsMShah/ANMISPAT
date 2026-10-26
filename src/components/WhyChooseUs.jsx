//WhyChooseUs.jsx
import React, { useEffect, useRef } from "react";

import whyCard1Img from "../assets/images/why-choose-us-card1.png";
import whyProductRangeImg from "../assets/images/why-choose-us-product-range.jpg";
import whyTrustImg from "../assets/images/why-choose-us-trust.jpg";
import whyCapabilityImg from "../assets/images/why-choose-us-capability.jpg";

const cards = [
  {
    id: "quality",
    className: "why-card why-card-tall",
    eyebrow: "01 / QUALITY",
    title: "Steel you can rely on.",
    description:
      "Consistent quality, dependable supply, and materials built to perform across demanding industrial applications.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85",
    overlay: "quality-overlay",
  },

  {
    id: "products",
    className: "why-card why-card-products",
    eyebrow: "02 / PRODUCT RANGE",
    title: "Built for every requirement.",
    description:
      "From structural steel to industrial requirements, our portfolio is designed around the needs of modern businesses.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=85",
    overlay: "products-overlay",
  },

  {
    id: "partnership",
    className: "why-card why-card-team",
    eyebrow: "03 / PARTNERSHIPS",
    title: "Business built on trust.",
    description:
      "Strong supplier relationships and responsive service keep your projects moving without unnecessary delays.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    overlay: "team-overlay",
  },
];

function WhyChooseUsSection({ id = "why-choose-us", qualityTheme = "orange", subtitleTag = null }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".why-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const isBlue = qualityTheme === "blue";

  return (
    <section
      ref={sectionRef}
      className="why-section"
      id={id}
    >
      <div className="why-container">

        {/* SECTION HEADING */}
        <div className="why-heading why-reveal">
          <span className="why-heading-line" />

          <h2>
            Why Choose <span>Us?</span> {subtitleTag && <span className="text-base font-normal text-gray-500 ml-2">({subtitleTag})</span>}
          </h2>

          <p>
            More than steel. A dependable partner for businesses
            that build, manufacture and move industries forward.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="why-grid">

          {/* LEFT TALL CARD */}
          <article
            className={`${cards[0].className} ${isBlue ? 'why-card-tall-blue' : ''} why-reveal`}
            style={{ "--delay": "120ms" }}
          >
            <div className="why-card-content">

              <div>
                <span className="why-eyebrow">
                  {cards[0].eyebrow}
                </span>

                <h3>{cards[0].title}</h3>

                <p>{cards[0].description}</p>
              </div>

              <div className="quality-visual">
                <img
                  src={whyCard1Img}
                  alt={cards[0].title}
                  className="why-card1-image"
                />
              </div>
            </div>

          </article>

          {/* TOP MIDDLE: 02 / PRODUCT RANGE */}
          <article
            className={`${cards[1].className} why-reveal`}
            style={{ "--delay": "260ms" }}
          >
            <div className="why-card-top-content">
              <div>
                <span className="why-eyebrow">
                  {cards[1].eyebrow}
                </span>

                <h3>{cards[1].title}</h3>

                <p>{cards[1].description}</p>
              </div>
            </div>

            <div className="product-image-wrapper">
              <img
                src={whyProductRangeImg}
                alt="Tata Steel warehouse and structural steel"
              />

              <div className="image-fade" />

              <div className="product-tags">
                <span>Long Products</span>
                <span>Flat Products</span>
                <span>Structural Steel</span>
              </div>
            </div>
          </article>

          {/* TOP RIGHT: 03 / PARTNERSHIPS */}
          <article
            className={`${cards[2].className} why-reveal`}
            style={{ "--delay": "400ms" }}
          >
            <div className="why-card-top-content">
              <div>
                <span className="why-eyebrow">
                  {cards[2].eyebrow}
                </span>

                <h3>{cards[2].title}</h3>

                <p>{cards[2].description}</p>
              </div>
            </div>

            <div className="product-image-wrapper">
              <img
                src={whyTrustImg}
                alt="Business built on trust - Steel industry partnership"
              />

              <div className="image-fade" />

              <div className="product-tags">
                <span>Long-Term Trust</span>
                <span>Integrity</span>
              </div>
            </div>
          </article>

          {/* BOTTOM LARGE CARD: 04 / CAPABILITY */}
          <article
            className="why-card why-card-capability why-reveal"
            style={{ "--delay": "540ms" }}
          >
            <div className="capability-content">

              <div className="capability-copy">
                <span className="why-eyebrow">
                  04 / CAPABILITY
                </span>

                <h3>
                  Strength that moves
                  <br />
                  industry forward.
                </h3>

                <p>
                  With a focus on quality, efficiency and long-term
                  relationships, ANM Ispat delivers steel solutions
                  that businesses can depend on.
                </p>

                <div className="capability-actions flex flex-wrap items-center gap-3 mt-5">
                  <button className="why-pill primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 font-bold shadow-md hover:shadow-lg transition-all">
                    Our Products
                  </button>

                  <button className="why-pill text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 font-bold shadow-md hover:shadow-lg transition-all">
                    Explore ANM Ispat →
                  </button>
                </div>
              </div>

              {/* INDUSTRIAL IMAGE */}
              <div className="capability-image">
                <img
                  src={whyCapabilityImg}
                  alt="ANM Ispat logistics and transport fleet"
                />

                <div className="capability-image-overlay" />
              </div>

            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default function WhyChooseUs() {
  return (
    <>
      {/* Original Section (Orange 01/Quality Card) */}
      <WhyChooseUsSection id="why-choose-us" qualityTheme="orange" />

      {/* Duplicate Section (Option B - Logo Blue Theme, Hidden per request, not deleted) */}
      {false && (
        <WhyChooseUsSection id="why-choose-us-blue" qualityTheme="blue" subtitleTag="Option B - Logo Blue Theme" />
      )}
    </>
  );
}