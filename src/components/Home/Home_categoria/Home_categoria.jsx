import './Home_categoria.scss'
import { NavLink } from 'react-router-dom'
import './Home_categoria.scss'

export default function Home_categoria({ title, link, img, imgMobile }) {
    return (
        <section className="home_categoria">
            <div className="content">
                <img className='desktop' src={ img } alt="" />
                <img className='mobile' src={ imgMobile } alt="" />
                <h2>{ title }</h2>
                <NavLink to={ link }>CONHEÇA AS MOTOS</NavLink>
            </div>
        </section>
    )
}

