import "./Spin.scoped.css";

export default function Spin() {
  return (
    <main id="Spin">
      <h3 className="title">Spin</h3>
      <div className="container">
        <div className="circle outside">
          <div />
          <div className="color" />
          <div className="color" />
          <div />
        </div>
        <div className="circle outside-empty" />
        <div className="circle inside">
          <div />
          <div className="color" />
          <div className="color" />
          <div />
        </div>
        <div className="circle inside-empty" />
      </div>
    </main>
  );
}
