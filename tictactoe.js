const Square = ({ id, player, newState }) => {
  const [color, setColor] = React.useState("green");
  const [status, setStatus] = React.useState(null);
  const xo = ["O", "X"];
  const palet = ["blue", "red", "green"];
  const randomColor = () => {
    let chosenIndex = Math.floor(Math.random() * 3);
    console.log(`chosen index: ${chosenIndex}`);
    return palet[chosenIndex];
  };

  React.useEffect(() => {
    console.log(`Render ${id}`);
    return () => console.log(`unmounting square ${id}`);
  });

  return (
    <button
      id={id}
      onClick={(e) => {
        let col = randomColor();
        setColor(col);
        console.log(`color: ${color}`);
        e.target.style.background = col;
        let nextPlayer = newState({ id: id, color: col });
        setStatus(nextPlayer);
      }}
    >
      <h1>{xo[status]}</h1>
    </button>
  );
};

const Board = () => {
  const [state, setState] = React.useState([]);
  const [player, setPlayer] = React.useState(0);
  const [mounted, setMounted] = React.useState(true);
  const [random, setRandom] = React.useState(0);
  let status = `Player ${player}`;
  const newState = (obj) => {
    let nextPlayer = (player + 1) % 2;
    setPlayer(nextPlayer);
    setState([...state, obj]);
    console.log(`adding state: ${JSON.stringify(obj)}`);
    status = `Player ${player}`;
    return nextPlayer;
  };

  const toggle = () => {
    setMounted(!mounted);
  };
  const reRender = () => {
    let randomNum = Math.random();
    setRandom(randomNum);
    console.log(`randomNum: ${randomNum}`);
  };
  function renderSquare(i) {
    return <Square id={i} player={player} newState={newState}></Square>;
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
