import { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { list} from './data';

function Carousel() {
  const [people, setPeople] = useState(list);
  const [currentIndex, setCurrentIndex] = useState(0);

  // auto paly the slides
  useEffect(() => {
    const sliderId = setInterval(() => {
      handleNextClick();
    }, 2000);

    return () => {
      clearInterval(sliderId);
    };
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length;
      return newIndex;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    });
  };

  const renderedPeople = people.map((person, index) => {
    const { id, image, name, quote, title } = person;
    return (
      <article
        key={id}
        style={{
          transform: `translateX(${100 * (index - currentIndex)}%)`,
          opacity: index === currentIndex ? 1 : 0,
          visibility: index === currentIndex ? 'visible' : 'hidden',
        }}
        className="slide"
      >
        <img src={image} alt={name} className="person-img" />
        <h5 className="name">{name}</h5>
        <p className="title">{title}</p>
        <p className="text">{quote}</p>
        <FaQuoteRight className="icon" />
      </article>
    );
  });

  return (
    <section className="slider-container">
      {renderedPeople}
      <button onClick={handlePrevClick} className="prev">
        <GoChevronLeft />
      </button>
      <button onClick={handleNextClick} className="next">
        <GoChevronRight />
      </button>
    </section>
  );
}
export default Carousel;
