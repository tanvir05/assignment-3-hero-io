import { useNavigate } from "react-router-dom";
import { appsData } from "../data/apps";
import AppCard from "../components/AppCard";

import googlePlayLogo from "../assets/store-logos/google-play.png";
import appStoreLogo from "../assets/store-logos/app-store.png";
import iphoneImg from "../assets/Iphone.png";

import e24 from "../assets/hero-icons/Ellipse 24.png";
import e25 from "../assets/hero-icons/Ellipse 25.png";
import e26 from "../assets/hero-icons/Ellipse 26.png";
import e27 from "../assets/hero-icons/Ellipse 27.png";
import e28 from "../assets/hero-icons/Ellipse 28.png";
import e29 from "../assets/hero-icons/Ellipse 29.png";

export default function Home() {
  const navigate = useNavigate();
  const topApps = appsData.slice(0, 8);

  return (
    <div id="home">
      {/* Banner */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-title">
            We Build
            <br />
            <span className="accent">Productive</span> Apps
          </div>

          <div className="hero-sub">
            At HERO.IO, we craft innovative apps designed to make everyday life simpler,
            smarter, and more exciting.
            <br />
            Our goal is to turn your ideas into digital experiences that truly make an impact.
          </div>

          <div className="hero-actions">
            <a
              className="btn btn-light store-btn"
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
            >
              <img className="store-logo" src={googlePlayLogo} alt="Google Play" />
              Google Play
            </a>

            <a
              className="btn btn-light store-btn"
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="store-logo" src={appStoreLogo} alt="App Store" />
              App Store
            </a>
          </div>

          {/* Phone + floating icons */}
          <div className="hero-mock">
            <div className="phone-wrap">
              {/* Left icons */}
              <div className="float-icon fi-1">
                <img src={e24} alt="icon" />
              </div>
              <div className="float-icon fi-2">
                <img src={e25} alt="icon" />
              </div>
              <div className="float-icon fi-3">
                <img src={e26} alt="icon" />
              </div>

              {/* Right icons */}
              <div className="float-icon fi-4">
                <img src={e27} alt="icon" />
              </div>
              <div className="float-icon fi-5">
                <img src={e28} alt="icon" />
              </div>
              <div className="float-icon fi-6">
                <img src={e29} alt="icon" />
              </div>

              {/* Phone */}
              <div className="phone">
                <img className="phone-img" src={iphoneImg} alt="iPhone preview" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="stats-band">
        <div className="stats-inner">
          <h2 className="stats-title">Trusted By Millions, Built For You</h2>

          <div className="stats-grid">
            <div className="stat">
              <div className="stat-label">Total Downloads</div>
              <div className="stat-value">29.6M</div>
              <div className="stat-sub">21% More Than Last Month</div>
            </div>

            <div className="stat">
              <div className="stat-label">Total Reviews</div>
              <div className="stat-value">906K</div>
              <div className="stat-sub">46% More Than Last Month</div>
            </div>

            <div className="stat">
              <div className="stat-label">Active Apps</div>
              <div className="stat-value">132+</div>
              <div className="stat-sub">31 More Will Launch</div>
            </div>
          </div>
        </div>
      </section>

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