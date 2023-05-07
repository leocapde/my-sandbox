import logo from "../../assets/logo.svg";
import "./Home.scoped.css";

export default function Home() {
  return (
    <main id="Home" className="container">
      <h1 className="title">Bienvenue dans My SandBox ✌🏻</h1>
      <div className="description">
        My SandBox est une application qui me permet créer et d'exposer toutes
        sortes de loaders et d'animations CSS{" "}
      </div>
      <img src={logo} className="Home-logo" alt="logo" />
    </main>
  );
}
