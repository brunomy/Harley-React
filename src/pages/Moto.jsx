import Moto_banner from "../components/Moto/Moto_banner/Moto_banner";
import Moto_blog from "../components/Moto/Moto_blog/Moto_blog";
import Moto_galeria from "../components/Moto/Moto_galeria/Moto_galeria";
import Moto_infoColor from "../components/Moto/Moto_infoColor/Moto_infoColor";
import Moto_infoDrop from "../components/Moto/Moto_infoDrop/Moto_infoDrop";
import Moto_video from "../components/Moto/Moto_video/Moto_video";

export default function Moto() {
    const banner = {
        img: '/Harley-React/public/moto_banner[1920x850].png',
        title: 'Sportster™ S 2024',
        ano: '2024',
        preco: '247.000',
        motor: 'Milwaukee-Eight™ 121 Alto Desempenho',
        torque: '193',
        peso: '363',
        altura: '720'
    }
    const moto_info = {
        nome: 'Sportster™ S',
        modelo: 'Sportster™ S 2024',
        preco: '247.450',
        linkChat: '/'
    }
    const moto_colors = [
        {
            color: '#000000',
            img: '/Harley-React/public/motoColor[850x500].png'
        },
        {
            color: '#AE0E0E',
            img: '/Harley-React/public/motoColor2[850x500].png'
        },
        {
            color: '#6a6a6a',
            img: '/Harley-React/public/motoColor3[850x500].png'
        },
        {
            color: '#7e929d',
            img: '/Harley-React/public/motoColor4[850x500].png'
        }
    ]
    const video_info = {
        img: '/Harley-React/public/video%5B1920x640%5D.png', 
        videoUrl: 'https://www.youtube.com/watch?v=eJpD9IV2feE'
    }
    const galeria = [
        {
            img: '/Harley-React/public/galeria1%5B1100x500%5D.png',
            width: '1100',
            height: '500',
        },
        {
            img: '/Harley-React/public/categoria%5B1920x990%5D.png',
            width: '1920',
            height: '990',
        },
        {
            img: '/Harley-React/public/banner%5B1750x850%5D.png',
            width: '1750',
            height: '850',
        },
        {
            img: '/Harley-React/public/video%5B1920x640%5D.png',
            width: '1920',
            height: '640',
        },
        {
            img: '/Harley-React/public/moto_banner%5B1920x850%5D.png',
            width: '1920',
            height: '850',
        }
    ]
    const listadrop = [
        {
            id: '01',
            title: 'TECNOLOGIA PARA O MOTOCICLISTA',
            text: 'Selecione um dos três modos de pilotagem pré-programados — Esportivo, Estrada ou Chuva — ou crie o seu próprio modo personalizado, com configurações específicas para entregar potência, frenagem motora e segurança nas curvas.'
        },
        {
            id: '02',
            title: 'ESCAPAMENTO ALTO',
            text: 'Selecione um dos três modos de pilotagem pré-programados — Esportivo, Estrada ou Chuva — ou crie o seu próprio modo personalizado, com configurações específicas para entregar potência, frenagem motora e segurança nas curvas.'
        },
        {
            id: '03',
            title: 'INSTRUMENTAÇÃO',
            text: 'Selecione um dos três modos de pilotagem pré-programados — Esportivo, Estrada ou Chuva — ou crie o seu próprio modo personalizado, com configurações específicas para entregar potência, frenagem motora e segurança nas curvas.'
        },
        {
            id: '04',
            title: 'CHASSI',
            text: 'Selecione um dos três modos de pilotagem pré-programados — Esportivo, Estrada ou Chuva — ou crie o seu próprio modo personalizado, com configurações específicas para entregar potência, frenagem motora e segurança nas curvas.'
        },
        {
            id: '05',
            title: 'MOTOR REVOLUTION™ MAX 1250T',
            text: 'Selecione um dos três modos de pilotagem pré-programados — Esportivo, Estrada ou Chuva — ou crie o seu próprio modo personalizado, com configurações específicas para entregar potência, frenagem motora e segurança nas curvas.'
        }
    ]
    const listaBlog = [
        {
            link: '/',
            img: '/Harley-React/public/blog%5B375x190%5D.png',
            text: 'Lorem ipsum dolor sit amet consectetur. Dolor.'
        },
        {
            link: '/',
            img: '/Harley-React/public/blog%5B375x190%5D.png',
            text: 'Lorem ipsum dolor sit amet consectetur. Id ut.'
        },
        {
            link: '/',
            img: '/Harley-React/public/blog%5B375x190%5D.png',
            text: 'Lorem ipsum dolor sit amet consectetur.'
        }
    ]

    return (
        <>
            <Moto_banner 
                banner={ banner.img } 
                title={ banner.title } 
                ano={ banner.ano } 
                preco={ banner.preco } 
                motor={ banner.motor } 
                torque={ banner.torque } 
                peso={ banner.peso } 
                altura={ banner.altura }
            />
            <Moto_infoColor 
                nome={ moto_info.nome }
                modelo={ moto_info.modelo }
                preco={ moto_info.preco }
                linkChat={ moto_info.linkChat }
                colorList={ moto_colors } 
            />
            <Moto_video img={ video_info.img } videoUrl={ video_info.videoUrl } />
            <Moto_galeria galeria={ galeria } /> 
            <Moto_infoDrop lista={ listadrop } /> 
            <Moto_blog lista={ listaBlog } />
        </>
    )
}