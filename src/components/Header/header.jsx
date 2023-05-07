import "./header.scoped.css";

export default function Header() {
  return (
    <header className="Header">
      <a href="/">
        <h2 className="title">My Sandbox</h2>
      </a>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/codesandbox">CodeSandbox</a>
          </li>
          <li className="nav-item">
            <a href="/heart">Heart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
