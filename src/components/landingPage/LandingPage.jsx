import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReadyToUse from 'components/readToUse/ReadyToUse';
import FreqeuntlyAskQuestions from 'components/frequentlyAskQuestions/FreqeuntlyAskQuestions';
import NewsLetter from 'components/newsLetter/NewsLetter';
import Cards from 'components/cards/Cards';
import AI from 'components/ai/AI';
import BrandButton from '../button/BrandButton';
import DescriptiveLayout from '../descriptive-layout/DescriptiveLayout';
import { descData, descData1, descData2 } from '../descriptive-layout/descData';
import Testimonial from '../Testimonials/Testimonials';
import girl from '../../../public/images/girl.png';
import dot from '../../../public/images/squareDot.png';
import coverletter from '../../../public/images/portfolio.png';
import medal from '../../../public/images/medal.png';
import partnership from '../../../public/images/partnership.png';
import clockCal from '../../../public/images/clockcalendar.png';
import cover from '../../../public/images/cover.png';
import styles from './LandingPage.module.scss';
import { useMediaQuery } from '../../hooks';

/* eslint-disable */
const LandingPage = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const arr = [
    'Resume that stands the test of time. ',
    'Equates the standard in the job market. ',
    'Easy to use',
  ];
  const arr1 = [
    'Readily available on demand. ',
    'Easy navigation.  ',
    'Little or no time spent.',
  ];
  const arr2 = [
    'Standard materials. ',
    'Human resource recommended. ',
    'Simplified and detailed. ',
  ];

  return (
    <div
      style={{ background: '#edf0f3' }}
      className={styles.get_ready_main_cont}
    >
      <div className={styles.blue_top}>'</div>
      <div className={styles.get_ready_cont}>
        <div className={styles.square_dot}>
          <Image
            priority
            src={dot}
            height={120}
            width={120}
            alt="dotted square"
          />
        </div>
        <div className={styles.get_ready_left}>
          <h1>
            Let's get your Job <span>Ready</span>
          </h1>
          <p>
            Getting you Equip for the journey, allow us take out the stress of
            resume and cover letter writing.
          </p>
        </div>
        <div>
          <div className={styles.img_cont}>
            <div className={styles.img_div}>
              <Image
                priority
                src={girl}
                height={300}
                width={300}
                alt="girl picture"
                style={{
                  objectFit: 'cover',
                  borderRadius: '280px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.get_ready_btn_cont}>
        <Link href="coming-soon">
          <BrandButton
            text="Get Started"
            type="submit"
            styles={styles.get_ready_btn_left}
          />
        </Link>
        <Link href="coming-soon">
          <BrandButton
            type="submit"
            text="Scan Resume"
            styles={styles.get_ready_btn_right}
          />
        </Link>
      </div>
      <div className={styles.entails_cont}>
        <div className={styles.entails_cont_child}>
          <h2>What it entails</h2>
          <p>
            A resume builder is meant to assist the user to swiftly and easily
            fill out resumes that matches their skills.
          </p>
        </div>
      </div>
      <div className={styles.resume_overall_cont}>
        <div className={styles.resume_cont_main}>
          <div className={styles.resume_cont}>
            <div className={styles.resume_left}>
              <ul>
                <li>
                  <Image
                    priority
                    src={coverletter}
                    height={120}
                    width={120}
                    alt="coverletter"
                    style={{
                      marginLeft: '30px',
                    }}
                  />
                </li>
                <li>
                  <h4>Resume Builder + Free Template</h4>
                </li>
                <li>
                  <p>
                    Users have the ability to create a professional resume from
                    scratch using their experiences,skills and education .
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.resume_right}>
              <ul>
                <li>
                  <Image
                    priority
                    src={coverletter}
                    height={120}
                    width={120}
                    alt="resume"
                    style={{
                      marginLeft: '40px',
                    }}
                  />
                </li>
                <li>
                  <h4>Cover Letter Builder + Free Templates</h4>
                </li>
                <li>
                  <p>
                    Users can draft out suitable cover letters to assist and aid
                    cover letter writing.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.resume_middle}>
          <ul>
            <li>
              <Image
                priority
                src={cover}
                height={120}
                width={120}
                alt="resume"
                style={{
                  marginLeft: '40px',
                }}
              />
            </li>
            <li>
              <h4>Cover Letter Builder + Free Templates</h4>
            </li>
            <li>
              <p>
                Users can draft out suitable cover letters to assist and aid
                cover letter writing.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.ecllipse}>
        <p>What our client says</p>
      </div>
      <Testimonial />
      <div className={styles.ecllipse_down}></div>
      <ReadyToUse />
      <div className={styles.cards_cont_main}>
        {isMobile ? (
          <Cards
            image={partnership}
            header="Reliable"
            desc={arr1}
            bgColor="#9B5679"
          />
        ) : (
          <>
            <Cards
              image={clockCal}
              header="Efficient"
              desc={arr}
              bgColor="#CDAABC"
            />
            <Cards
              image={partnership}
              header="Reliable"
              desc={arr1}
              bgColor="#9B5679"
            />
            <Cards
              image={medal}
              header="Verified Quality"
              desc={arr2}
              bgColor="#690136"
            />
          </>
        )}
      </div>
      <AI />
      <div className={styles.desc_main_cont}>
        <p>Some Key Points to Note</p>
        <div className={styles.desc_cont}>
          {descData.map((x, index) => (
            <DescriptiveLayout key={index} image={x.img} desc={x.desc} />
          ))}
        </div>
        <div className={styles.desc_cont1}>
          {descData1.map((x, index) => (
            <DescriptiveLayout key={index} image={x.img} desc={x.desc} />
          ))}
        </div>
        <div className={styles.desc_cont2}>
          {descData2.map((x, index) => (
            <DescriptiveLayout key={index} image={x.img} desc={x.desc} />
          ))}
        </div>
      </div>
      <FreqeuntlyAskQuestions />
      <NewsLetter />
    </div>
  );
};

export default LandingPage;
