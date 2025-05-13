import { Link } from "react-router";
import { GithubIcon, LinkedinIcon, TwitterIcon, ShipWheelIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <div className="flex items-center gap-2">
          <ShipWheelIcon className="size-8 text-primary" />
          <Link to="/" className="text-2xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Streamify
          </Link>
        </div>
        <p className="max-w-xs mt-2 opacity-80">
          Connect with language learners worldwide. Practice, chat, and grow together.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">App</h6>
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/friends" className="link link-hover">Friends</Link>
        <Link to="/notifications" className="link link-hover">Notifications</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link to="/terms" className="link link-hover">Terms of Service</Link>
        <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
        <Link to="/cookie-policy" className="link link-hover">Cookie Policy</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://x.com/Saksham1199805?t=zXphGYbG0qBywBpTBX8EoA&s=09" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="size-5 hover:text-primary transition-colors" />
          </a>
          <a href="https://github.com/Saksham-Goel1107/streamify" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="size-5 hover:text-primary transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/saksham-goel-88b74b33a/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="size-5 hover:text-primary transition-colors" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
