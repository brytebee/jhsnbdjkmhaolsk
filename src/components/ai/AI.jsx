import React from 'react';
import Image from 'next/image';
import BrandButton from '../button/BrandButton';
import ai1 from '../../../public/images/ai1.png';
import ai2 from '../../../public/images/ai2.png';
import ai3 from '../../../public/images/ai3.png';
import styles from './AI.module.scss';
/* eslint-disable */
const AI = () => {
  return (
    <div className={styles.ai_main_container}>
      <h1>Welcome to jobhunter AI Efficient builder </h1>
      <div className={styles.ai_card}>
        <ul className={styles.ai_cards_ul1}>
          <li>
            <p>
              Create your resume within the next 5 seconds with our AI generator
            </p>
          </li>
          <li>
            <BrandButton
              type="submit"
              text="Get Started"
              styles={styles.buttonAi}
            />
          </li>
        </ul>
        <ul className={styles.ai_cards_ul2}>
          <li>
            <Image src={ai1} alt="ai1" />
          </li>
        </ul>
      </div>
      <div className={styles.ai_card_middle}>
        <ul className={styles.ai_cards_ul1}>
          <li>
            <p>Use AI to generate powerful cover letter in 5 seconds</p>
          </li>
          <li>
            <BrandButton
              type="submit"
              text="Get Started"
              styles={styles.buttonAi2}
            />
          </li>
        </ul>
        <ul className={styles.ai_cards_ul2}>
          <li>
            <Image src={ai2} alt="ai2" />
          </li>
        </ul>
      </div>
      <div className={styles.ai_card} id={styles.ai_card_bottom}>
        <ul className={styles.ai_cards_ul1}>
          <li>
            <p>
              Build your website /portfolio within the next 5 seconds with our
              AI generator
            </p>
          </li>
          <li>
            <BrandButton
              type="submit"
              text="Get Started"
              styles={styles.buttonAi3}
            />
          </li>
        </ul>
        <ul className={styles.ai_cards_ul2}>
          <li>
            <Image src={ai3} alt="ai3" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AI;
