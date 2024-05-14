const Square = ({ id, player }) => {
  const [color, setColor] = React.useState("green");

  return (
    <button id={id}>
      <h1>{player}</h1>
    </button>
  );
};

const Board = () => {
  const [player, setPlayer] = React.useState(0);
  const [mounted, setMounted] = React.useState(true);
  const [random, setRandom] = React.useState(0);
  let status = `Player ${player}`;
  const toggle = () => {
    setMounted(!mounted);
  };
  const reRender = () => {
    setRandom(Math.random());
  };
  function renderSquare(i) {
    return <Square id={i} player={player}></Square>;
  }
  return (
    <div className="game-board">
      <div className="grid-row">
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>
      <div id="info">
        <button onClick={toggle}>Mount/UnMount</button>
        <button onClick={reRender}>Re-render</button>
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
