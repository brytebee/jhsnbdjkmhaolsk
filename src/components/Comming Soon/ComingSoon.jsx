import React from 'react';
import Image from 'next/image';
import propTypes from 'prop-types';
import GroupPhone from '../../../public/svgs/group-phones.svg';
import Styles from './ComingSoon.module.scss';
import ComingSoonImg from '../../../public/svgs/coming-soon.svg';
import ArrowSvg from '../../../public/svgs/curly-design.svg';
import CustomPopup from './CustomPopup';
import MobilePhones from '../../../public/svgs/grouped-phones.svg';
import { useMediaQuery } from '../../hooks';

const ComingSoon = ({ handleSubmit, handleChange, value }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="md:container md:mx-auto p-8">
      <h1 className={`${Styles.header} text-center p-4 font-bold my-10`}>
        <span className={Styles.blue}>Our</span>
        {' '}
        Website is Launching
        {' '}
        <span className={Styles.blue}>Soon.</span>
      </h1>
      <div className={`${Styles.imgContainer} flex justify-between px-8 w-11/12 mx-auto`}>
        {isMobile ? (
          <>
            <Image
              src={MobilePhones}
              alt="Group of phones"
              width={330.99}
              height={338}
              className="relative"
            />
            <div>
              <p className={`${Styles.launch} my-10`}>
                Get notified when we launch
                <Image
                  src={ArrowSvg}
                  alt="Arrow"
                  width={20}
                  height={20}
                  className="w-auto h-auto"
                />
              </p>
              <form onSubmit={handleSubmit}>
                <div className={`${Styles.form} relative w-1/2 mx-auto`}>
                  <input type="email" id="search" className={`${Styles.input} block text-2xl w-full py-8 px-2 mt-2 rounded-lg border`} value={value} placeholder="Enter your email address" required onChange={handleChange} />
                  <button type="submit" className={`${Styles.soonBtn}`}>Notify Me</button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <Image
              src={GroupPhone}
              alt="Group of phones"
              width={330.99}
              height={338}
              className="relative"
            />
            <CustomPopup className={Styles.popleft}>
              <p>Job Notification</p>
              <p>Template</p>
              <p>Job Notification</p>
            </CustomPopup>

            <CustomPopup className={Styles.popright}>
              <p>Resume</p>
              <p>Cover Letter</p>
              <p>Portfolio</p>
            </CustomPopup>
          </>
        )}

        <Image
          src={ComingSoonImg}
          alt="Coming Soon"
          width={330.99}
          height={338}
        />
      </div>
      {!isMobile && (
        <div>
          <p className={`${Styles.launch} my-10`}>
            Get notified when we launch
            <Image
              src={ArrowSvg}
              alt="Arrow"
              width={20}
              height={20}
              className="w-auto h-auto"
            />
          </p>
          <form onSubmit={handleSubmit}>
            <div className="relative w-1/2 mx-auto">
              <input type="email" id="search" className="block text-2xl w-full py-8 px-2 mt-2 rounded-lg border" value={value} placeholder="Enter your email address" required onChange={handleChange} />
              <button type="submit" className={`${Styles.soonBtn}`}>Notify Me</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ComingSoon;

ComingSoon.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  handleChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
