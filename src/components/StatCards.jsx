export default function StatCards({ downloadsText, reviewsText, appsText }) {
  return (
    <section className="stats-band">
      <div className="stats-inner">
        <div className="stat">
          <div className="stat-label">Total Downloads</div>
          <div className="stat-value">{downloadsText}</div>
          <div className="stat-sub">21% More Than Last Month</div>
        </div>

        <div className="stat">
          <div className="stat-label">Total Reviews</div>
          <div className="stat-value">{reviewsText}</div>
          <div className="stat-sub">46% More Than Last Month</div>
        </div>

        <div className="stat">
          <div className="stat-label">Active Apps</div>
          <div className="stat-value">{appsText}</div>
          <div className="stat-sub">31 More Will Launch</div>
        </div>
      </div>
    </section>
  );
}