# C560
Final project for C560.002, Spring 2025

## Group Members 
Katie Fort 

Jean Cheng 

Aaditi Jadhav 

Arun Somasundaram 

Nathan Jacobs

## Project Directive 
**Goal:** Develop an intelligent agent capable of playing Othello.  

**Game Rules:** [Official Othello Rules](https://www.worldothello.org/about/about-othello/othello-rules/official-rules/english)

## Topics 
- **MINIMAX:** The agent will utilize a depth-limited minimax algorithm (depth = 4) to evaluate possible moves and select the optimal one. This method ensures the agent anticipates its opponent’s responses and chooses moves that maximize its position while minimizing the opponent’s. 
- **ALPHA-BETA PRUNING:** To improve the speed and memory usage of the search, we will implement alpha-beta pruning, which reduces the number of nodes explored in the minimax tree.

## Implementation 
Each search node will encapsulate the:
- Current game state 
- Parent node
- Possible next moves
- Current depth in the seach tree

**Start State:** A 2x2 square in the center of the board (the white peice in the upper-left corder), with each player's pieces placed diagonally from one another.

**Goal State:** Maximize the number of pieces controlled by our agent when the board is filled.

**Successor Function:** Our model will evaluate the possible next states based on the current game state. Since a valid move in Othello must capture at least one opponent piece, the function generates only legal moves. The value of the successor state is determined by the number of pieces captured when making that move.

## Technology 
- Programming Language: Python
- Development Environment: Visual Studio Code
- Libraries & Tools: NumPy, custom AI/game logic
