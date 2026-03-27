import { useNavigate } from "react-router-dom";
import { appsData } from "../data/apps";
import AppCard from "../components/AppCard";
import StatCards from "../components/StatCards";

export default function Home() {
  const navigate = useNavigate();
  const topApps = appsData.slice(0, 8);

  return (
    <div id="home">
      {/* Banner */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-title">
            We Build <span className="accent">Productive</span> Apps
          </div>
          <div className="hero-sub">
            At HERO.IO, we craft innovative apps designed to make everyday life simpler,
            smarter, and more exciting.
          </div>

          <div className="hero-actions">
            <a className="btn btn-light" href="https://play.google.com/store" target="_blank" rel="noreferrer">
              Google Play
            </a>
            <a className="btn btn-light" href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
              App Store
            </a>
          </div>

          {/* Fake phone mock area to match layout */}
          <div className="hero-mock">
            <div className="phone">
              <div className="phone-screen">App Preview</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <StatCards downloadsText="29.6M" reviewsText="906K" appsText="132+" />

      {/* Top Apps */}
      <section className="section">
        <div className="section-head">
          <h2>Trending Apps</h2>
          <p>Explore All Trending Apps on the Market developed by us</p>
        </div>

        <div className="grid grid-4">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} onClick={() => navigate(`/apps/${app.id}`)} />
          ))}
        </div>

        <div className="center">
          <button className="btn btn-primary" onClick={() => navigate("/apps")}>
            Show All
          </button>
        </div>
      </section>
    </div>
  );
}