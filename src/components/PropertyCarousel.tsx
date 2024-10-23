import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface PropertyCarouselProps {
  images: string[];
}

export function PropertyCarousel({ images }: PropertyCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-48">
            <img
              src={image}
              alt={`Property view ${index + 1}`}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}