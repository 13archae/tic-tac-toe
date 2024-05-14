const Square = ({ id }) => {
  const [color, setColor] = React.useState("green");
  const palet = ["indigo", "red", "green"];
  const getRandColor = () => {
    return palet[Math.floor(Math.random() * 3)];
  };
  return (
    <button
      onClick={(e) => {
        setColor(getRandColor());
        e.target.style.background = color;
      }}
    >
      <h1>{id}</h1>
    </button>
  );
};

const Board = () => {
  const [player, setPlayer] = React.useState(0);
  let status = `Player ${player}`;
  function renderSquare(i) {
    return <Square id={i}></Square>;
  }
  return (
    <div className="game-board">
      <div className="grid-row">
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
      </div>
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
