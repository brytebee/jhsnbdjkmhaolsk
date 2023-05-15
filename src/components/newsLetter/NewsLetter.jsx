import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import BrandButton from '../button/BrandButton';
import girl from '../../../public/images/girl.png';
import styles from './NewsLetter.module.scss';
/* eslint-disable */
const NewsLetter = () => {
  const [email, setEmail] = useState('');
  
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }
    
  return (
    <div className={styles.news_main_cont}>
      <div className={styles.news_inner_cont}>
        <div className={styles.img_cont_news}>
          <div className={styles.img_div_news}>
            <Image
              priority
              src={girl}
              height={150}
              width={150}
              alt="girl picture"
              style={{
                objectFit: 'cover',
                borderRadius: '280px',
              }}
            />
          </div>
        </div>
        <div className={styles.news_and_envelop}>
          <ul className={styles.news_text_cont}>
            <li className={styles.news_letter_li1}>Subscribe to our Newsletter</li>
            <li>
              <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x" />
            </li>
          </ul>
          <form onSubmit={handleEmail}>
            <div className={styles.input_cont}>
              <input
                type="email"
                name="newsLetter"
                id="newsLetter"
                placeholder="Enter your email address"
                required
              />
              <BrandButton text="Subscribe" type="submit" styles={styles.news_btn} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
