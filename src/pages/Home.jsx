import Home_banner from "../components/Home/Home_banner/Home_banner";
import Home_categoria from "../components/Home/Home_categoria/Home_categoria";

export default function Home() {
    const banners = [
        {
            imgDesk: '/harley-react/src/assets/images/banner[1750x850].png',
            imgMobile: '/harley-react/src/assets/images/banner[550x520].png'
        },
        {
            imgDesk: '/harley-react/src/assets/images/banner2[1750x850].png',
            imgMobile: '/harley-react/src/assets/images/banner2[550x520].png',
        },
        {
            imgDesk: '/harley-react/src/assets/images/banner3[1750x850].png',
            imgMobile: '/harley-react/src/assets/images/banner3[550x520].png',
        },
    ]

    const categorias = [
        {
            title: 'Grand American Touring',
            img: '/harley-react/src/assets/images/categoria[1920x990].png',
            imgMobile: '/harley-react/src/assets/images/categoria[600x700].png',
            link: '/'
        },
        {
            title: 'Cruiser',
            img: '/harley-react/src/assets/images/categoria2[1920x990].png',
            imgMobile: '/harley-react/src/assets/images/categoria2[600x700].png',
            link: '/'
        },
        {
            title: 'Adventure Touring',
            img: '/harley-react/src/assets/images/categoria3[1920x990].png',
            imgMobile: '/harley-react/src/assets/images/categoria3[600x700].png',
            link: '/'
        },
        {
            title: 'Sport',
            img: '/harley-react/src/assets/images/categoria4[1920x990].png',
            imgMobile: '/harley-react/src/assets/images/categoria4[600x700].png',
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