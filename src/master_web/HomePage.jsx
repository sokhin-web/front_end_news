import Entertainment from "../components/Entertainment";
import Highlight from "../components/Highlight";
import Society from "../components/Society";
import Sport from "../components/Sport";
import Technology from "../components/Technology";

function HomePage() {
  return (
    <div>
      <Highlight />
      <Sport />
      <Entertainment />
      <Technology />
      <Society />
    </div>
  );
}

export default HomePage;
