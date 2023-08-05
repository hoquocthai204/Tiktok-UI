import { SlideData } from '@/constants/explore/slideData';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface SliderArrowProps {
    direction: 'left' | 'right';
    onClick?: () => void;
}

const SliderArrow: FC<SliderArrowProps> = ({ direction, onClick }) => (
    <button className={`slick-arrow ${direction}`} onClick={onClick}>
        <FontAwesomeIcon icon={direction === 'left' ? faChevronLeft : faChevronRight} />
    </button>
);

const HorizontalSlider: FC = () => {
    const settings: Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        prevArrow: <SliderArrow direction="left" />,
        nextArrow: <SliderArrow direction="right" />,
    };

    const slides: SlideData[] = [
        { title: 'Slide 1' },
        { title: 'Slide 2' },
        { title: 'Slide 3' },
        { title: 'Slide 4' },
        { title: 'Slide 5' },
        { title: 'Slide 6' },
        { title: 'Slide 7' },
    ];

    return (
        <div>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <h3>{slide.title}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HorizontalSlider;
