# C560
Final project for C560.002, Spring 2025

## Group Members 
Katie Fort 
Jean Cheng 
Aaditi Jadhav 
Arun Somasundaram 
Nathan Jacobs

## Project Directive 

*Goal*: Develop an intelligent agent capable of playing Othello.  

*Game Rules*: 
[Official Othello Rules](https://www.worldothello.org/about/about-othello/othello-rules/official-rules/english)

*Topics*: 
- MINIMAX: The agent will utilize a depth-limited minimax algorithm to evaluate possible moves and select the most advantageous one. This method ensures the agent anticipates its opponent’s responses and chooses moves that maximize its position while minimizing the opponent’s advantage.
- ALPHA-BETA PRUNING: To enhance efficiency, we will implement alpha-beta pruning, which reduces the number of nodes explored in the minimax tree. This optimization will improve the speed and memory usage of the search. 

*Implementation*: 
Each search node will encapsulate the: 
- Current state of the game 
- Parent node
- Possible next moves
- Current depth in the seach tree
- Path cost (the cost of each path in our tree is one)

*Successor Function*: Our model will evaluate the possible next states based on the current game state. Since a valid move in Othello must capture at least one opponent piece, the function generates only legal moves. The value of each resulting state is determined by the number of pieces captured when making that move.

Given that our search is depth-limited, we will set the search depth to 4.

*Start State*: A 2x2 square in the center of the board, with each player's pieces placed diagonally from one another. The white piece is positioned in the upper-left corner of this square.

*Goal State*: Maximize the number of pieces controlled by our agent when the board is completely filled.

*Technology*: 
- Programming Language: Python
- Development Environment: Visual Studio Code
- Libraries & Tools: NumPy, custom AI/game logic
