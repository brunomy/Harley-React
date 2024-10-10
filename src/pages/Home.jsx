import Home_banner from "../components/Home/Home_banner/Home_banner";
import Home_categoria from "../components/Home/Home_categoria/Home_categoria";

export default function Home() {
    const banners = [
        {
            imgDesk: '/public/banner[1750x850].png',
            imgMobile: '/public/banner[550x520].png'
        },
        {
            imgDesk: '/public/banner2[1750x850].png',
            imgMobile: '/public/banner2[550x520].png',
        },
        {
            imgDesk: '/public/banner3[1750x850].png',
            imgMobile: '/public/banner3[550x520].png',
        },
    ]

    const categorias = [
        {
            title: 'Grand American Touring',
            img: '/public/categoria[1920x990].png',
            imgMobile: '/public/categoria[600x700].png',
            link: '/'
        },
        {
            title: 'Cruiser',
            img: '/public/categoria2[1920x990].png',
            imgMobile: '/public/categoria2[600x700].png',
            link: '/'
        },
        {
            title: 'Adventure Touring',
            img: '/public/categoria3[1920x990].png',
            imgMobile: '/public/categoria3[600x700].png',
            link: '/'
        },
        {
            title: 'Sport',
            img: '/public/categoria4[1920x990].png',
            imgMobile: '/public/categoria4[600x700].png',
            link: '/'
        }
    ]

    return (
        <>
            <Home_banner banners={ banners } />

            {categorias && categorias.map((item, index) => (
                <Home_categoria 
                    key={ index }
                    title={ item.title }
                    img={ item.img }
                    imgMobile={ item.imgMobile }
                    link={ item.link }
                />
            ))}
        </>
    );
}