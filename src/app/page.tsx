"use client"

import styles from './page.module.css'
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Card from '@/components/card/Card';
import React, { useState } from 'react';
import { cardsInfo } from '@/constants';
import Quiz from '@/components/quiz/Quiz';

const Home: React.FC = () =>  {
  const [takeQuiz, setTakeQuiz] = useState(false);

  return (
    <>
      {takeQuiz && <Quiz setTakeQuiz={setTakeQuiz}/>}
      {!takeQuiz && (
        <>
          <Header setTakeQuiz={setTakeQuiz}/>
          <div className="flex flex-col justify-center items-center">
            <div className="">
              <h1 className={styles.title}>What we can help with</h1>
              {cardsInfo.map((card, index) => (
                <Card
                  number={index + 1}
                  key={card.title}
                  imageSrc={card.image}
                  title={card.title}
                  subtitle={card.subtitle}
                  text={card.text}
                />
              ))}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
