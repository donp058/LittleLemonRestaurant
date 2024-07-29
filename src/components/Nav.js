import "../CSS-Styles/Nav.css";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";

export default function Nav() {
  const Navigate = useNavigate();
  const Location = useLocation();

  const handleAboutClick = () => {
    if (Location.pathname !== "/") {
      Navigate("/", { state: { scrollTo: "about-section" } });
    } else {
      scroller.scrollTo("about-section", {
        smooth: true,
        duration: 500,
      });
    }
  };

  return (
    <nav className="nav-container" aria-label="Main Navigation">
      <img src="Logo.svg" alt="Little Lemon Logo" className="nav-logo" />
      <div className="navlinks-container">
        <ul role="list" aria-label="Navigation Links">
          <li role="listitem">
            <RouterLink to="/" aria-label="Home">
              Home
            </RouterLink>
          </li>
          <li role="listitem">
            <ScrollLink
              to="about-section"
              smooth={true}
              duration={500}
              onClick={handleAboutClick}
              style={{ cursor: "pointer" }}
              aria-label="About Little Lemon"
            >
              About
            </ScrollLink>
          </li>
          <li role="listitem">
          <RouterLink to="/comingsoon" aria-label="comingsoon">
              Menu
            </RouterLink>
          </li>
          <li role="listitem">
            <RouterLink to="/reservations" aria-label="Reservations">
              Reservations
            </RouterLink>
          </li>
          <li role="listitem">
          <RouterLink to="/comingsoon" aria-label="comingsoon">
              Order Online
            </RouterLink>
          </li>
          <li role="listitem">
          <RouterLink to="/comingsoon" aria-label="comingsoon">
              Login
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
