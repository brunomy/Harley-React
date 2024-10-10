import './Moto_galeria.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useRef, useEffect } from "react";

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


// imagens
import arrow from './icons/arrow.svg'

export default function Moto_galeria({galeria}) {
    //#region SLICK
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

    var settings = {
        className: "slider variable-width",
        arrows: false,
        dots: true,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        appendDots: dots => (
            <div className='dots' id="banner_home_dots">
              <ul> {dots} </ul>
            </div>
        )
    };
    //#endregion

    //#region Photoswipe
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#gallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, []);
    //#endregion
    
    return (
        <section className="moto_galeria">
            <div className="content" id="gallery">
                <h2>Galeria de fotos</h2>
                <Slider 
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}>

                    {galeria && galeria.map((item, index) => (
                        <div className="item" key={index}>
                            <a 
                                href={ item.img } 
                                data-pswp-width={ item.width } 
                                data-pswp-height={ item.height } 
                                target="_blank"
                            >
                                <img src={ item.img } alt="" />
                            </a>
                        </div>
                    ))}

                </Slider>
                <div className="arrows">
                    <button className="prev" onClick={next}><img src={arrow} alt="" /></button>
                    <button className="next" onClick={previous}><img src={arrow} alt="" /></button>
                </div>
            </div>
        </section>
    )
}