
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from "./index.module.css"
import {images} from "./images"
const Hero = ()=>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode:true,
        useCSS:true

    };

    return(
        <div className={style.hero}>
            <Slider {...settings}>
                {images.map((books, index) => (
                    <div key={index} className={style.imageHolder}>
                        <img src={books.image} alt={`Slide ${index + 1}`} className={style.theImage} />
                    </div>
                ))}
            </Slider>

        </div>
    )
}
export default Hero