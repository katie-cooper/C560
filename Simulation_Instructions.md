# Simulation Instructions
1. Go live in your browser from `index.html`
2. From your browser console, run `nSimulations(n, optimalOpponent)`
   * `n` = number of games you want to simulate
   * `optimalOpponent` = boolean value
     * `true` plays against opponent using minimax algorithm
     * `false` plays against opponent making random moves
4. **Expectations**
   * Against a *random opponent*, the AI will never lose (the opponent *O* will have zero wins)
   * Against an *optimal opponent* (both parties use minimax agorithm), 100% of the results will be a tie

![Simulation Example with 500 games against an optimal and random opponent.](media/simulation.png)
