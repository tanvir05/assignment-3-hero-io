import { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { appsData } from "../data/apps";
import { installApp, isInstalled } from "../utils/storage";
import { formatDownloads } from "../utils/format";
import { toast } from "react-toastify";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function AppDetails() {
  const { id } = useParams();
  const navigate = useNavigate();


  const app = useMemo(
    () => appsData.find((a) => String(a.id) === String(id)),
    [id]
  );

  const [installed, setInstalled] = useState(() =>
    app ? isInstalled(app.id) : false
  );


  const chartData = useMemo(() => {
    if (!app) return [];

    return [...app.ratings].reverse();
  }, [app]);

  if (!app) {
    return (
      <section className="section">
        <div className="error-box">
          <h2>OPPS!! APP NOT FOUND</h2>
          <p>
            The App you are requesting is not found on our system. Please try
            another app.
          </p>
          <button className="btn btn-primary" onClick={() => navigate("/apps")}>
            Go Back!
          </button>
        </div>
      </section>
    );
  }

  const onInstall = () => {
    if (installed) return;
    installApp(app.id);
    setInstalled(true);
    toast.success(`Installed: ${app.title}`);
  };

  return (
    <section className="section">
      <div className="details">
        <div className="details-left">
          <div className="details-img">
            <img src={app.image} alt={app.title} />
          </div>
        </div>

        <div className="details-right">
          <h2 className="details-title">{app.title}</h2>


          <div className="details-sub">
            Developed by <span className="accent">{app.companyName}</span>
          </div>

          <div className="details-metrics">
            <div className="metric">
              <div className="metric-icon">⬇</div>
              <div className="metric-label">Downloads</div>
              <div className="metric-value">{formatDownloads(app.downloads)}</div>
            </div>

            <div className="metric">
              <div className="metric-icon">★</div>
              <div className="metric-label">Average Ratings</div>


              <div className="metric-value">{app.ratingAvg}</div>
            </div>

            <div className="metric">
              <div className="metric-icon">▣</div>
              <div className="metric-label">Total Reviews</div>
              <div className="metric-value">{formatDownloads(app.reviews)}</div>
            </div>
          </div>

          <button
            className={installed ? "btn btn-disabled" : "btn btn-success"}
            disabled={installed}
            onClick={onInstall}
          >

            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="divider" />

      <h3 className="block-title">Ratings</h3>
      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height={260}>

          <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 20 }}>
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Bar dataKey="count" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="divider" />

      <h3 className="block-title">Description</h3>
      <p className="desc">{app.description}</p>
    </section>
  );
}