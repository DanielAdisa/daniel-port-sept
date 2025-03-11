import React from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import SnakeGame from '../Games';

const Games = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-12">
        <h2 className={styles.sectionHeadText}>Games</h2>
        <p className={`${styles.sectionSubText} mt-3 mb-10 max-w-3xl text-center`}>
          Take a break and enjoy a game of Snake!
        </p>
        <SnakeGame />
      </div>
    </>
  );
};

export default SectionWrapper(Games, "games");
