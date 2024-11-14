"use client";

import React, {useState, useEffect} from "react";
import "./snake-game.css";

const BOARD_SIZE = 10;
const INITIAL_SNAKE = [[4, 4]];
const INITIAL_FOOD = [
  Math.floor(Math.random() * BOARD_SIZE),
  Math.floor(Math.random() * BOARD_SIZE),
];

function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState([0, 1]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!isGameOver) {
      const handleKeyPress = (e: KeyboardEvent) => {
        switch (e.key) {
          case "ArrowUp":
            setDirection([-1, 0]);
            break;
          case "ArrowDown":
            setDirection([1, 0]);
            break;
          case "ArrowLeft":
            setDirection([0, -1]);
            break;
          case "ArrowRight":
            setDirection([0, 1]);
            break;
          default:
            break;
        }
      };

      document.addEventListener("keydown", handleKeyPress);

      const moveSnake = setInterval(() => {
        setSnake((prevSnake) => {
          const newHead = [prevSnake[0][0] + direction[0], prevSnake[0][1] + direction[1]];

          if (checkCollision(newHead)) {
            setIsGameOver(true);
            return prevSnake;
          }

          const newSnake = [newHead, ...prevSnake];

          if (newHead[0] === food[0] && newHead[1] === food[1]) {
            setFood(generateNewFood(newSnake));
            setScore(score + 1);
          } else {
            newSnake.pop();
          }

          return newSnake;
        });
      }, 200);

      return () => {
        document.removeEventListener("keydown", handleKeyPress);
        clearInterval(moveSnake);
      };
    }
  }, [direction, food, isGameOver, score]);

  const generateNewFood = (snake: number[][]) => {
    let newFood: number[];
    do {
      newFood = [Math.floor(Math.random() * BOARD_SIZE), Math.floor(Math.random() * BOARD_SIZE)];
    } while (snake.some((segment) => segment[0] === newFood[0] && segment[1] === newFood[1]));
    return newFood;
  };

  const checkCollision = (head: number[]) => {
    if (head[0] < 0 || head[0] >= BOARD_SIZE || head[1] < 0 || head[1] >= BOARD_SIZE) {
      return true;
    }
    for (let i = 1; i < snake.length; i++) {
      if (snake[i][0] === head[0] && snake[i][1] === head[1]) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="App">
      <h1>Snake Game</h1>
      <h2>Score: {score}</h2>
      <div className={`board ${isGameOver ? "game-over" : ""}`}>
        {Array.from({length: BOARD_SIZE}).map((_, row) => (
          <div className="row" key={row}>
            {Array.from({length: BOARD_SIZE}).map((_, col) => (
              <div
                key={col}
                className={`cell ${
                  snake.some((segment) => segment[0] === row && segment[1] === col)
                    ? "snake"
                    : food[0] === row && food[1] === col
                    ? "food"
                    : ""
                }`}
              ></div>
            ))}
          </div>
        ))}
      </div>
      {isGameOver && <h2>Game Over</h2>}
    </div>
  );
}

export default SnakeGame;
