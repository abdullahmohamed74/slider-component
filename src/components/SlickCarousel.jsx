import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { list } from './data';
import { FaQuoteRight } from 'react-icons/fa';

function SlickCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderedPeople = list.map((person) => {
    const { id, image, name, quote, title } = person;
    return (
      <article key={id}>
        <img src={image} alt={name} className="person-img" />
        <h5 className="name">{name}</h5>
        <p className="title">{title}</p>
        <p className="text">{quote}</p>
        <FaQuoteRight className="icon" />
      </article>
    );
  });

  return (
    <section className='slick-container'>
      <Slider {...settings}>{renderedPeople}</Slider>
    </section>
  );
}
export default SlickCarousel;
