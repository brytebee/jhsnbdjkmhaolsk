import Image from 'next/image';
import PropTypes from 'prop-types';
import Style from './DescriptiveLayout.module.css';

export default function DescriptiveLayout({ image, desc }) {
  return (
    <section className={Style.desc__container}>
      <div className={Style.desc__image}>
        <Image priority src={image} width={100} height={100} alt={image} />
      </div>
      <div className={Style.desc__text}>
        <p>{desc}</p>
      </div>
    </section>
  );
}

DescriptiveLayout.propTypes = {
  image: PropTypes.shape({
    blurDataURL: PropTypes.string,
    blurHeight: PropTypes.number,
    blurWidth: PropTypes.number,
    height: PropTypes.number,
    src: PropTypes.string,
    width: PropTypes.number,
  }).isRequired,
  desc: PropTypes.string.isRequired,
};
