import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-mark">▶</span>
          <span className="logo-text">HERO.IO</span>
        </Link>

        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Home
          </NavLink>
          <NavLink to="/apps" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Apps
          </NavLink>
          <NavLink to="/installation" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Installation
          </NavLink>
        </nav>

        <a
          className="btn btn-primary"
          href="https://github.com/tanvir05"
          target="_blank"
          rel="noreferrer"
        >
          Contribute
        </a>
      </div>
    </header>
  );
}