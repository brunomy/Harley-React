import Blog_item from './Blog_item'
import './Moto_blog.scss'

export default function Moto_blog({ lista }){
    return (
        <section className="moto_blog">
            <div className="content">
                {lista && lista.map((item, index) => 
                    <Blog_item 
                        key={index}
                        link={ item.link }
                        img={ item.img }
                        text={ item.text }
                    />
                )}
            </div>
        </section>
    )
}