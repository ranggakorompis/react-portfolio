// Import component
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

// Export function Container
export default function Container() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
