import './Home.banner.scss'
import { NavLink } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

//Imagens
import novas from './icons/novas.svg'
import seminovas from './icons/seminovas.svg'
import arrow from './icons/arrow.svg'


export default function Home_banner({ banners }) {
    var settings = {
        arrows: false,
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div className='dots' id="banner_home_dots">
              <ul> {dots} </ul>
            </div>
        )
    };

    return (
        <section className='banner_home'>
            <div className="carousel_content">
                <div id="banner_home">
                    <Slider {...settings}>

                        {banners && banners.map((item, index) => (
                            <div className="item" key={index}>
                                <img className='desktop' src={ item.imgDesk } alt="" />
                                <img className='mobile' src={ item.imgMobile } alt="" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="abas">
                <div className="novas">
                    <NavLink to='/moto' >
                        <div>
                            <img className='moto' src={novas} alt="" />
                            <p>
                                Motos <br/>
                                <span>novas</span>
                            </p>
                            <img className='arrow' src={arrow} alt="" />
                        </div>
                    </NavLink>
                </div>
                <div className="seminovas">
                    <NavLink to='/moto' >
                        <div>
                            <img className='moto' src={seminovas} alt="" />
                            <p>
                                Motos <br/>
                                <span>seminovas</span>
                            </p>
                            <img className='arrow' src={arrow} alt="" />
                        </div>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}
