import { useState } from 'react';
import Input from '../../comum/Input/Input';
import './Moto_infoColor.scss'
import Select from '../../comum/Select/Select';
import TextArea from '../../comum/TextArea/TextArea';

// icons
import icon1 from './icons/icon1.svg'
import icon2 from './icons/icon2.svg'
import icon3 from './icons/icon3.svg'
import Checkbox from '../../comum/Checkbox/Checkbox';

export default function Moto_infoColor({ nome, modelo, preco, linkChat, colorList }) {
    const changeColor = (event) => {
        document.querySelectorAll(".imgColor").forEach(function(element) {
            element.style.display = "none";
        });

        let id = event.target.getAttribute('data-color')
        document.getElementById(id).style.display = "block";
    }

    const [contatoOpen, setContatoOpen] = useState(false);
    const openContact = () => {
        if(contatoOpen)
            setContatoOpen(false)
        else
            setContatoOpen(true)
    }

    const [nomeForm, setNomeForm] = useState('');
    const [emailForm, setEmailForm] = useState('');
    const [telForm, setTelForm] = useState('');
    const [previsao, setPrevisao] = useState('');
    const [mensagem, setMensagem] = useState('');

    const listaSelect = [
        {
            id: '0',
            name: '1 mes'
        },
        {
            id: '1',
            name: '2 meses'
        },
        {
            id: '2',
            name: '3 meses'
        }
    ]

    return (
        <section className="moto_infoColor">
            <div className="content">
                <h2>Informações</h2>
                <div>
                    <div className="img">
                        {colorList && colorList.map((item, index) => (
                            <img className='imgColor' key={index} id={item.color} src={item.img} alt="" />
                        ))}
                    </div>

                    <div className="info">
                        <h3>{nome}</h3>
                        <p>{modelo}</p>
                        <p>A partir de R${preco}</p>
                        <div className="cores">
                            <span>cores</span>
                            <div>
                                {colorList && colorList.map((item, index) => (
                                    <button onClick={changeColor} key={index} data-color={item.color} style={{background: item.color}}></button>
                                ))}
                            </div>
                        </div>
                        <div className="contato">
                            <a href={linkChat}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.2053 13.2304C14.5519 12.5853 13.7362 12.5853 13.087 13.2304C12.5917 13.7215 12.0965 14.2126 11.6095 14.712C11.4764 14.8494 11.364 14.8785 11.2017 14.7869C10.8812 14.6121 10.54 14.4706 10.232 14.2792C8.79616 13.3761 7.5934 12.2149 6.52797 10.9081C5.99942 10.2589 5.52914 9.56385 5.20036 8.78143C5.13377 8.62328 5.14625 8.51924 5.27527 8.39022C5.77052 7.91162 6.25329 7.42052 6.74022 6.92943C7.4186 6.24689 7.4186 5.44782 6.73606 4.76112C6.34902 4.36991 5.96197 3.98703 5.57492 3.59582C5.17538 3.19628 4.78001 2.79259 4.37632 2.39721C3.72291 1.76046 2.9072 1.76046 2.25795 2.40138C1.75854 2.89247 1.27993 3.39605 0.772188 3.87882C0.301903 4.32413 0.0646799 4.86933 0.0147382 5.50609C-0.0643362 6.54238 0.189534 7.5204 0.54745 8.47346C1.27993 10.4462 2.39529 12.1983 3.74788 13.8047C5.57492 15.9772 7.75571 17.696 10.3069 18.9363C11.4556 19.4939 12.6458 19.9226 13.9402 19.9934C14.8308 20.0433 15.6049 19.8186 16.225 19.1235C16.6495 18.6491 17.1281 18.2163 17.5776 17.7626C18.2435 17.0884 18.2476 16.2727 17.5859 15.6068C16.7952 14.8119 16.0003 14.0212 15.2053 13.2304Z" fill="#FF680F"/>
                                    <path d="M14.4103 9.91346L15.946 9.65126C15.7047 8.24041 15.0388 6.96273 14.0274 5.94725C12.9579 4.87767 11.6053 4.20345 10.1153 3.99536L9.89893 5.53939C11.0517 5.7017 12.1005 6.22193 12.9287 7.05013C13.7111 7.83255 14.223 8.82306 14.4103 9.91346Z" fill="#FF680F"/>
                                    <path d="M16.8119 3.23789C15.0389 1.46496 12.7957 0.34543 10.3194 0L10.103 1.54403C12.2422 1.84368 14.1816 2.81338 15.7131 4.34077C17.1656 5.79324 18.1187 7.6286 18.4641 9.64708L19.9998 9.38488C19.5961 7.04595 18.4932 4.92342 16.8119 3.23789Z" fill="#FF680F"/>
                                </svg>
                                Ligue agora
                            </a>
                            <div className="drop" data-open={contatoOpen}>
                                <button onClick={ openContact }>
                                    Entre em contato
                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 5L0 0L10 0L5 5Z" fill="white"/></svg>
                                </button>
                                <div>
                                    <h4>Tem Interesse?</h4>
                                    <form action="">
                                        <Input label="Seu nome" value={ nomeForm } setValue={ setNomeForm } />
                                        <Input label="Seu e-mail" value={ emailForm } setValue={ setEmailForm } />
                                        <Input label="Seu telefone" value={ telForm } setValue={ setTelForm } />
                                        <Select label="Previsão estimada da compra" value={ previsao } setValue={ setPrevisao } lista={ listaSelect } />
                                        <TextArea label="Mensagem" value={ mensagem } setValue={ setMensagem } />

                                        <div className="buttons_form">
                                            <button>
                                                <div>
                                                    <img src={ icon1 } alt="" />
                                                </div>
                                                <span>Minha usada como entrada</span>
                                            </button>
                                            <button>
                                                <div>
                                                    <img src={ icon2 } alt="" />
                                                </div>
                                                <span>Vou financiar</span>
                                            </button>
                                            <button>
                                                <div>
                                                    <img src={ icon3 } alt="" />
                                                </div>
                                                <span>Falar com o Gerente</span>
                                            </button>
                                        </div>

                                        <div className="checkbox">
                                            <Checkbox name="1" text="Aceito receber ofertas e promoções do Grupo Jorlan" />
                                            <Checkbox name="2" text="Aceito receber comunicação via e-mail." />
                                            <Checkbox name="3" text="Aceito receber comunicação via celular." />
                                        </div>

                                        <button className="submit">Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}