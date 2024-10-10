import './Moto_banner.scss'

// Imagens/Ícones
// import banner from './../../../../public/moto_banner[1920x850].png'
import icon1 from './icons/icon1.svg'
import icon2 from './icons/icon2.svg'
import icon3 from './icons/icon3.svg'
import icon4 from './icons/icon4.svg'

export default function Moto_banner({ banner, title, ano, preco, motor, torque, peso, altura }){
    return (
        <section className="moto_banner">
            <div className="content">
                <div className="top">
                    <img src={banner} alt="" />
                    <div>
                        <h1>{title}</h1>
                        <p>
                            {ano} <br/>
                            A partir de R${preco}
                        </p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="dado">
                        <div className="icon">
                            <img src={icon1} alt="" />
                        </div>
                        <h2>Motor</h2>
                        <p>{motor}</p>
                    </div>
                    <div className="dado">
                        <div className="icon">
                            <img src={icon2} alt="" />
                        </div>
                        <h2>Torque do motor</h2>
                        <p>{torque} Nm</p>
                    </div>
                    <div className="dado">
                        <div className="icon">
                            <img src={icon3} alt="" />
                        </div>
                        <h2>Peso, conforme expedido</h2>
                        <p>{peso} kg</p>
                    </div>
                    <div className="dado">
                        <div className="icon">
                            <img src={icon4} alt="" />
                        </div>
                        <h2>Altura do assento, sem peso</h2>
                        <p>{altura} mm</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

