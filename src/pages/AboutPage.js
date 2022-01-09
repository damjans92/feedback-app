import Card from "../components/UI/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>This is areac app ato elave feedback for a product</p>

      <p>
        <Link to="/">Back to home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
