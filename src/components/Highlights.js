import React from "react";
import "../CSS-Styles/Highlights.css";
import SpecialsMenuSelections from "./SpecialsMenuSelections";

export default function Highlights() {
  return (
    <section className="highlights" aria-labelledby="highlights-title">
      <div className="highlights-title">
        <h2 id="highlights-title">This week's specials!</h2>
      </div>
      <div className="online-menu-button">
        <button aria-label="View Online Menu">Online Menu</button>
      </div>
      <section
        className="menu-selections"
        aria-label="Specials Menu Selections"
      >
        <p>
          <em>Scroll/Swipe to the right</em> &rarr;
        </p>
        <SpecialsMenuSelections />
      </section>
    </section>
  );
}
