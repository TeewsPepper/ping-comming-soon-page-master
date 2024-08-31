import "./styles/reset.css"
import "./App.css";

import { Header } from "./components/Header";
import Dashboard from "./components/Dashboard";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="app-container">
      <Header />

  <div className="content">
      <Dashboard />
      
  </div>
    </div>
      <Footer />

    </>
  );
}

export default App;
