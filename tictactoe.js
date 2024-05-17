const Square = ({ id, player, newState }) => {
  const [color, setColor] = React.useState("green");
  const [status, setStatus] = React.useState(null);
  const xo = ["X", "O"];
  const palet = ["fuchsia", "mediumAquamarine"];
  const getColor = () => {
    let chosenIndex = player;
    console.log(`chosen index: ${chosenIndex}`);
    return palet[chosenIndex];
  };

  // React.useEffect(() => {
  //   console.log(`Render ${id}`);
  //   return () => console.log(`unmounting square ${id}`);
  // });

  return (
    <button
      id={id}
      onClick={(e) => {
        let col = getColor();
        setColor(col);
        console.log(`color: ${col}`);
        e.target.style.background = col;
        let nextPlayer = newState(id);
        setStatus(nextPlayer);
      }}
    >
      <h1>{xo[status]}</h1>
    </button>
  );
};

const Board = () => {
  const [state, setState] = React.useState(Array(9).fill(null));
  const [player, setPlayer] = React.useState(0);
  const [mounted, setMounted] = React.useState(true);
  const [random, setRandom] = React.useState(0);
  let status = `Player ${player}`;
  let winner = checkWinner(state);
  console.log(`winner: ${winner}`);
  if (winner != null) {
    status = `Player ${winner} wins`;
  }
  const newState = (sqrId) => {
    let thePlayer = player;
    state[sqrId] = player;
    setState(state);
    let nextPlayer = (player + 1) % 2;
    setPlayer(nextPlayer);

    return thePlayer;
  };
  function checkWinner(state) {
    console.log(`Begin state: ${state}`);
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    console.log(`win.length: ${win.length}`);

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      console.log(`a,b,c: ${win[i]}`);
      console.log(`a == b: ${state[a] == state[b]}`);
      console.log(`a == c: ${state[a] == state[c]}`);
      if (state[a] != null && state[a] == state[b] && state[a] == state[c]) {
        return state[a];
      }
      console.log(`state[a]: ${state[a]}`);
      console.log(`state[b]: ${state[b]}`);
      console.log(`state[c]: ${state[c]}`);
    }
    return null;
  }
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
      <div className="grid-row">
        {mounted && renderSquare(3)}
        {mounted && renderSquare(4)}
        {mounted && renderSquare(5)}
      </div>
      <div className="grid-row">
        {mounted && renderSquare(6)}
        {mounted && renderSquare(7)}
        {mounted && renderSquare(8)}
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
