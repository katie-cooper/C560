# C560
Final project for C560.002, Spring 2025

## Group Members 
Kathleen Fort, Jean Cheng, Aaditi Jadhav, Arun Somasundaram, & Nathan Jacobs

## Project Directive 
**Goal:** Develop an intelligent agent capable of playing Tic Tac Toe.  

**Game Rules:** [Official Tic Tac Toe Rules]([https://www.worldothello.org/about/about-othello/othello-rules/official-rules/english](https://en.wikipedia.org/wiki/Tic-tac-toe))

## Topics 
- **MINIMAX:** The agent will utilize a minimax algorithm to evaluate possible moves and select the optimal one. This method ensures the agent anticipates its opponent’s responses and chooses moves that maximize its position while minimizing the opponent’s. 
- **ALPHA-BETA PRUNING:** To improve the speed and memory usage of the search, we will implement alpha-beta pruning, which reduces the number of nodes explored in the minimax tree.

## Implementation 
Each search node will encapsulate the:
- Current game state 
- Parent node
- Possible next moves
- Current depth in the seach tree

**Start State:** A 3x3 grid board initialized with all blank spaces. 

**Goal State:** Get three of your symbol in a row. In our tic-tac-toe, the agent will be "X" and the opponent will be "O". 

**Successor Function:** Our model will evaluate the possible next states based on the current game state. The current player can only make their move in a blank space. Each resulting state is evaluated based on whether it creates a win, blocks an opponent’s win, or leads to a strategic advantage.

## Technology 
- Programming Language: Python
- Development Environment: Visual Studio Code
- Libraries & Tools: NumPy, custom AI/game logic
