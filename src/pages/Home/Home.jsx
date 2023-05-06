import logo from "../../assets/logo.svg";
import "./Home.css";

export default function Home() {
  return (
    <main className="Home">
      <div className="Home-container">
        <h1>Bivenue dans My SandBox ✌🏻</h1>
        <div>
          My SandBox est une application qui me permet créer et d'exposer toutes
          sortes animations CSS{" "}
        </div>
        <img src={logo} className="Home-logo" alt="logo" />
      </div>
    </main>
  );
}
