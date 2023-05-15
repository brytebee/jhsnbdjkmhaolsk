import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './FrequentlyAskQuestions.module.scss';
/* eslint-disable */
const FreqeuntlyAskQuestions = () => {
  return (
    <div className={styles.frequent_cont}>
      <h2>Frequently Asked Questions</h2>
      <table className={styles.tab}>
        <thead>
          <tr>
            <th scope="col" />
            <th scope="col" />
            <th scope="col" />
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className={styles.td}
              style={{ borderTop: '1px solid #a29e9e' }}
            >
              <li>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className={styles.frequent_icon}
                />
              </li>
              <li>How do we go about this ?</li>
            </td>
          </tr>
          <tr>
            <td className={styles.td}>
              <li>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className={styles.frequent_icon}
                />
              </li>
              <li>Is it Free?</li>
            </td>
          </tr>
          <tr>
            <td className={styles.td}>
              <li>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className={styles.frequent_icon}
                />
              </li>
              <li>Can it be downloaded</li>
            </td>
          </tr>
          <tr>
            <td className={styles.td}>
              <li>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className={styles.frequent_icon}
                />
              </li>
              <li>How reliable is this ?</li>
            </td>
          </tr>
        </tbody>
        {/* <tr>
          <th>""</th>
          <td className={styles.td} style={{ borderTop: '1px solid #a29e9e' }}>
            <li>
              <FontAwesomeIcon
                icon={faArrowRight}
                size="lg"
                className={styles.frequent_icon}
              />
            </li>
            <li>How do we go about this ?</li>
          </td>
        </tr> */}
        {/* <tr>
          <th>""</th>
          <td className={styles.td}>
            <li>
              <FontAwesomeIcon
                icon={faArrowRight}
                size="lg"
                className={styles.frequent_icon}
              />
            </li>
            <li>Is it Free?</li>
          </td>
        </tr>
        <tr>
          <th>""</th>
          <td className={styles.td}>
            <li>
              <FontAwesomeIcon
                icon={faArrowRight}
                size="lg"
                className={styles.frequent_icon}
              />
            </li>
            <li>Can it be downloaded</li>
          </td>
        </tr>
        <tr>
          <th>""</th>
          <td className={styles.td}>
            <li>
              <FontAwesomeIcon
                icon={faArrowRight}
                size="lg"
                className={styles.frequent_icon}
              />
            </li>
            <li>How reliable is this ?</li>
          </td>
        </tr> */}
      </table>
    </div>
  );
};

export default FreqeuntlyAskQuestions;
