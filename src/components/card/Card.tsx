import Image from 'next/image';
import React from 'react';
import styles from './Card.module.css';
import BackgroundNumber from '../background_number/BackgroundNumber';

interface CardProps {
  imageSrc: string;
  title: string;
  number: number;
  subtitle: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, number, title, subtitle, text }) => {
  return (
    <div className={styles.card_wrapper}>
      <BackgroundNumber number={number} />
      <Image src={imageSrc} height={445} width={370} alt={title} className={styles.card_image} />
      <div className={styles.card_content}>
        <h2 className={styles.card_title}>{title}</h2>
        <div className={styles.card_subtitle}>{subtitle}</div>
        <div className={styles.card_text}>{text}</div>
      </div>
    </div>
  );
};

export default Card;
