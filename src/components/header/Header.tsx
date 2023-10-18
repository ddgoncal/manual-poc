import React, { SetStateAction } from 'react';
import styles from './Header.module.scss';
import { func } from 'prop-types';
import { Button } from '@mui/material';
import Image from 'next/image';

interface HeaderProps {
  setTakeQuiz: (value: SetStateAction<boolean>) => void;
}

const Header: React.FC<HeaderProps> = ({ setTakeQuiz }) => {
    const title = 'Be good to yourself';
    const subtitle = 'We are working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.';

    return (
        <div className={styles.header_wrapper}>
          <div className={styles.content_wrapper}>
            <Image src='/symbol.png' alt='logo' width={40} height={40} className={styles.header_logo} />
            <div className={styles.content}>
              <h1 className={styles.title}>
                {title}
              </h1>
              <p className={styles.subtitle}>{subtitle}</p>
              <Button className={styles.button} variant="contained" onClick={() => setTakeQuiz(true)} color="son_red"> Take the Quizz </Button>
            </div>
          </div>
          <div className={styles.background_image_wrapper}></div>
       </div>
    );
};

Header.propTypes = {
  setTakeQuiz: func.isRequired,
};

export default Header;
