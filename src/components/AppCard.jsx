import { formatDownloads } from "../utils/format";

export default function AppCard({ app, onClick }) {
  return (
    <button className="app-card" type="button" onClick={onClick}>
      <div className="app-img">
        <img src={app.image} alt={app.title} />
      </div>

      <div className="app-title">{app.title}</div>

      <div className="app-meta">
        <div className="pill pill-green">⬇ {formatDownloads(app.downloads)}</div>
        <div className="pill pill-orange">★ {app.ratingAvg}</div>
      </div>
    </button>
  );
}