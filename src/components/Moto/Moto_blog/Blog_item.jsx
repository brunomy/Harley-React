import { NavLink } from "react-router-dom";

export default function Blog_item({ link, img, text }){
    return (
        <div className="item">
            <NavLink to={ link }>
                <div className="img">
                    <img src={ img } alt="" />
                </div>
                <p>{ text }</p>
            </NavLink>
        </div>
    )
}

