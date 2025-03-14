import React, { useState, useEffect, useRef } from 'react';
import styles from './Game.module.scss';

const Game = () => {
  const [isGameActive, setIsGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(localStorage.getItem('record') || 0);
  const [timeLeft, setTimeLeft] = useState(30);
  const gameAreaRef = useRef(null);

  const startGame = () => {
    setIsGameActive(true);
    setScore(0);
    setTimeLeft(30);
  };

  const handleClick = (e) => {
    if (isGameActive) {
      setScore((prev) => prev + 1);
      e.target.remove(); // Удаляем картинку при нажатии
    }
  };

  useEffect(() => {
    if (isGameActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsGameActive(false);
      if (score > record) {
        setRecord(score);
        localStorage.setItem('record', score);
      }
    }
  }, [isGameActive, timeLeft]);

  useEffect(() => {
    if (isGameActive) {
      const interval = setInterval(() => {
        const image = document.createElement('img'); // Используем <img> вместо <div>
  
        // Случайный выбор между двумя картинками
        const randomImage = Math.random() > 0.5 ? '/images/hinkali.png' : '/images/khachpuri.png';
        image.src = randomImage;
  
        image.className = styles.fallingImage;
  
        // Рассчитываем позицию left с учетом ширины картинки
        const maxLeft = window.innerWidth - 75; // Ширина экрана минус ширина картинки
        const leftPosition = Math.random() * maxLeft;
        image.style.left = `${leftPosition}px`;
  
        const animationDuration = Math.random() * 3 + 2; // Медленная скорость падения (от 2 до 5 секунд)
        image.style.animationDuration = `${animationDuration}s`;
        image.onclick = handleClick;
  
        if (gameAreaRef.current) {
          gameAreaRef.current.appendChild(image);
        }
  
        // Удаляем картинку через время, соответствующее её анимации
        setTimeout(() => {
          if (image.parentNode) {
            image.remove(); // Удаляем картинку, если она не была нажата
          }
        }, animationDuration * 1000); // Переводим секунды в миллисекунды
      }, 1000); // Интервал между появлением картинок увеличен до 1 секунды
  
      return () => clearInterval(interval);
    }
  }, [isGameActive]);

  return (
    <div className={styles.game}>
      {!isGameActive && timeLeft === 0 ? (
        <div className={styles.gameOver}>
          <p>Игра окончена! Ваш счет: {score}</p>
          <button className={styles.startButton} onClick={startGame}>
            Начать заново
          </button>
        </div>
      ) : isGameActive ? (
        <>
          <div className={styles.gameArea} ref={gameAreaRef}></div>
          <div className={styles.footer}>
            <div className={styles.timer}>Осталось времени: {timeLeft} сек</div>
            <div className={styles.currentScore}>Поймано вкусностей: {score}</div>
          </div>
          
        </>
      ) : (
        <div className={styles.start}>
          <div className={styles.startText}>
            Собери как можно больше вкусностей!
          </div>
          
          <button className={styles.startButton} onClick={startGame}>
           Начать
          </button>
        </div>
        
      )}
    </div>
  );
};

export default Game;