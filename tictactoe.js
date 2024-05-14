const Square = () => {
  return <button></button>;
};

const Board = () => {
  const [player, setPlayer] = React.useState(0);
  let status = `Player ${player}`;
  function renderSquare() {
    return <Square></Square>;
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
