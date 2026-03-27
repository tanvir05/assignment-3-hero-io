import { useMemo, useState } from "react";
import { appsData } from "../data/apps";
import { getInstalledIds, uninstallApp } from "../utils/storage";
import { formatDownloads } from "../utils/format";
import { toast } from "react-toastify";

export default function Installation() {
  const [sort, setSort] = useState("high");
  const [installedIds, setInstalledIds] = useState(() => getInstalledIds());

  const installedApps = useMemo(() => {
    const list = appsData.filter((a) => installedIds.includes(a.id));
    const sorted = [...list].sort((a, b) =>
      sort === "high" ? b.downloads - a.downloads : a.downloads - b.downloads
    );
    return sorted;
  }, [installedIds, sort]);

  const onUninstall = (id) => {
    const next = uninstallApp(id);
    setInstalledIds(next);
    toast.info("App uninstalled successfully.");
  };

  return (
    <section className="section">
      <div className="section-head">
        <h2>Your Installed Apps</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="apps-toolbar">
        <div className="apps-count">{installedApps.length} Apps Found</div>

        <div className="sort">
          <label>Sort By Size</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="high">High-Low</option>
            <option value="low">Low-High</option>
          </select>
        </div>
      </div>

      {installedApps.length === 0 ? (
        <div className="empty">No installed apps yet.</div>
      ) : (
        <div className="installed-list">
          {installedApps.map((app) => (
            <div key={app.id} className="installed-row">
              <div className="installed-left">
                <img src={app.image} alt={app.title} />
                <div>
                  <div className="installed-title">{app.title}</div>
                  <div className="installed-sub">
                    ⬇ {formatDownloads(app.downloads)} &nbsp; ★ {app.rating} &nbsp; {app.sizeMB} MB
                  </div>
                </div>
              </div>

              <button className="btn btn-success" onClick={() => onUninstall(app.id)}>
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}