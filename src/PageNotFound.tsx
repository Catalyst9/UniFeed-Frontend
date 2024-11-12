import { Link } from "react-router-dom";
import "./styles/PageNotFoundStyles.css"; // Assuming you have a CSS file for styling

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <p>
        It might have been moved or deleted, or perhaps the URL was mistyped.
      </p>
      <Link to="/home">Go back to Home</Link>
    </div>
  );
};

export default PageNotFound;
