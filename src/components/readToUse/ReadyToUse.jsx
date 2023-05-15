import React from 'react';
import BrandButton from 'components/button/BrandButton';
import Image from 'next/image';
import image from '../../../public/images/image.png';
import image1 from '../../../public/images/image1.png';
import image2 from '../../../public/images/image2.png';
import styles from './ReadyToUse.module.scss';

const ReadyToUse = () => {
  const data = [
    {
      id: 1,
      img: image,
      header: 'Ready to Use Resume',
      desc: 'Easily implement and design resume  that suits your qualifications and skills',
    },
    {
      id: 2,
      img: image1,
      header: 'Suitable Cover Letter',
      desc: 'Get Job noticed with a brillant written cover letter. We offer beautiful templetes to make this an easy journey for you.',
    },
    {
      id: 3,
      img: image2,
      header: 'Detailed Portfolio',
      desc: 'We know devolopers and designers love a good resume. So we made it easy for you',
    },
  ];
  return (
    <div>
      {data.map((x) => (
        <div
          key={x.id}
          className={styles.read_to_use_cont}
          style={{ flexDirection: x.id % 2 === 1 ? 'row-reverse' : 'row' }}
        >
          <div className={styles.img_cont}>
            <Image
              src={x.img}
              width={500}
              height={500}
              alt="ready to use image"
            />
          </div>
          <div className={styles.left_cont}>
            <ul>
              <li>{x.header}</li>
              <li>{x.desc}</li>
              <li className={styles.ready_to_use_btn}>
                {x.id === 1 && (
                  <BrandButton
                    text="Create Resume"
                    type="button"
                    styles={styles.btn_readyTo}
                  />
                )}
                {x.id === 2 && (
                  <BrandButton
                    text="Create Cover Letter"
                    type="button"
                    styles={styles.btn_readyTo}
                  />
                )}
                {x.id === 3 && (
                  <BrandButton
                    text="Create your Portfolio"
                    type="button"
                    styles={styles.btn_readyTo}
                  />
                )}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadyToUse;
