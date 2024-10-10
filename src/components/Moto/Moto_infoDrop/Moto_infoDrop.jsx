import DropItem from "./DropItem";
import './Moto_infoDrop.scss'

export default function Moto_infoDrop({ lista }) {

    return (
        <section className="moto_infoDrop">
            <div className="content">
                {lista && lista.map((item, index) => <DropItem key={index} id={item.id} title={item.title} text={item.text} />)}
            </div>
        </section>
    )
}