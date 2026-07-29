import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">

          <h3>Kenya NPO Working Group</h3>

          <p>
            Strengthening Kenya's non-profit sector through
            collaboration, advocacy, research and capacity
            development.
          </p>

        </div>

        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/focus-areas">Focus Areas</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/partner">Partners</Link></li>
            <li><Link to="/resources">Resources</Link></li>
          </ul>

        </div>

        <div className="footer-column">

          <h3>Contact</h3>

          <p>Nairobi, Kenya</p>

          <p>info@npoworkinggroup.or.ke</p>

          <p>+254 XXX XXX XXX</p>

        </div>

        <div className="footer-column">

          <h3>Follow Us</h3>

          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter / X</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Kenya NPO Working Group.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;