
import React, { useState, useEffect } from 'react';
import styles from './SliderSection.module.css';



const SliderSection: React.FC = () => {

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  type SlideContent = string;
  const slides: SlideContent[] = [
    "Hacer que tus desafios sean mi preocupacion",
    "Ahorrarte tiempo y dinero",
    "Entregarte la mejor solución y optimizar tus ideas",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="slider" className={styles["slider-container"]}>
      <h2 className={styles["main-phrase"]}> Permíteme... </h2>
      <div className={styles["slider"]}>
        {slides.map((slide: SlideContent, index: number) => (
          <p
            key={index}
            className={`${styles["slide-text"]} ${index === currentIndex ? styles["active"] : ''}`}
          >
            {slide}
          </p>
        ))}
      </div>
      <div className={styles["dots"]}>
        {slides.map((_: SlideContent, index: number) => (
          <span
            key={index}
            className={`${styles["dot"]} ${index === currentIndex ? styles["active-dot"] : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default SliderSection;