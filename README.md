# tic-tac-toe

An MIT Exec Full-Stack Javascript Boot Camp Project

### Description

- The classic game of Tic-Tac-Toe

### Run Instructions

- Place contents of this repository on web server, or spin-up a development web server locally
- Navigate to the standalone.html page via browser

### Roadmap

- Track wins and losses per named player - It would be nice to track win/loss statistics
  from game to game.  This would be paired with saving player name for display.  These features would be implemented using useState to track state, game logic in the Board to calculate and display the ongoing stats.
- Stop input after win until 'reset' by toggling mount/unmount or refreshing the screen
  This would be accomplished with a boolean set by the win-calculating logic, that can be read within the context of a Square to determine of the onClick should do anything

### License

MIT
