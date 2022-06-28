// Import component
import heroimg from "../hero-img.jpg";

// Export function Header
export default function Header() {
  return (
    <header className="header">
      <div className="hero">
        <div className="hero-img">
          <img src={heroimg} alt="Hero Images" />
        </div>
        <h1 className="title">Rangga Aldo Korompis</h1>
        <h2 className="tagline">Student</h2>
      </div>
    </header>
  );
}
