import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Card from '@/components/card/Card';
import React, { useState } from 'react';
import styles from './Home.module.css';
import { cardsInfo } from '@/constants';
import Quiz from '@/components/quiz/Quiz';

const Home: React.FC = () => {
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

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
//export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
  //  const res = //await fetch('https://.../posts')
   // const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
   // return {
   //   props: {
     //   quizQuestions: posts,
   //   },
   // }
 // }