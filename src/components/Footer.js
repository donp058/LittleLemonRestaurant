import React from "react";
import "../CSS-Styles/Footer.css";

export default function Footer() {
  return (
    <div className="outer-container">
      <footer className="footer">
        <div className="inner-container">
          <section className="footer-section">
            <img
              src="restaurant.jpg"
              alt="Restaurant Image"
              className="footer-item"
            />
          </section>
          <section className="footer-section">
            <h3 className="footer-item">Site Navigation</h3>
            <ul
              className="footer-item"
              role="list"
              aria-label="Site Navigation"
            >
              <li role="listitem">Home</li>
              <li role="listitem">About</li>
              <li role="listitem">Menu</li>
              <li role="listitem">Reservations</li>
              <li role="listitem">Order Online</li>
              <li role="listitem">Login</li>
            </ul>
          </section>
          <section className="footer-section">
            <h3 className="footer-item">Contact</h3>
            <ul
              className="footer-item"
              role="list"
              aria-label="Contact Information"
            >
              <li role="listitem">Address</li>
              <li role="listitem">Phone Number</li>
              <li role="listitem">Email</li>
            </ul>
          </section>
          <section className="footer-section">
            <h3 className="footer-item">Social Media Links</h3>
            <ul
              className="footer-item"
              role="list"
              aria-label="Social Media Links"
            >
              <li role="listitem">Address</li>
              <li role="listitem">Phone Number</li>
              <li role="listitem">Email</li>
            </ul>
          </section>
        </div>
        <p className="copyright">
          &copy; 2024 Little Lemon. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
