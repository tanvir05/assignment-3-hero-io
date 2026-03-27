import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="section">
      <div className="error-box">
        <div className="error-code">404</div>
        <h2>Oops, page not found!</h2>
        <p>The page you are looking for is not available.</p>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Go Back!
        </button>
      </div>
    </section>
  );
}