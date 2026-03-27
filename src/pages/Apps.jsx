import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { appsData } from "../data/apps";
import AppCard from "../components/AppCard";
import Loader from "../components/Loader";

export default function Apps() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  // Loading animation during search operation
  useEffect(() => {
    setSearchLoading(true);
    const t = setTimeout(() => setSearchLoading(false), 350);
    return () => clearTimeout(t);
  }, [query]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return appsData;
    return appsData.filter((a) => a.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <section className="section">
      <div className="section-head">
        <h2>Our All Applications</h2>
        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div className="apps-toolbar">
        <div className="apps-count">({appsData.length}) Apps Found</div>

        <div className="search">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search Apps"
          />
        </div>
      </div>

      {searchLoading ? (
        <Loader label="Searching..." />
      ) : filtered.length === 0 ? (
        <div className="empty">No App Found</div>
      ) : (
        <div className="grid grid-4">
          {filtered.map((app) => (
            <AppCard key={app.id} app={app} onClick={() => navigate(`/apps/${app.id}`)} />
          ))}
        </div>
      )}
    </section>
  );
}