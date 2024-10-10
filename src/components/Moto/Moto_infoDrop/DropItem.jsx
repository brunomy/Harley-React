import { useState } from "react"

export default function DropItem({ id, title, text }){
    const [open, setOpen] = useState(false)

    const abrir = () => {
        if(open)
            setOpen(false)
        else
            setOpen(true)
    }

    return (
        <div className="item" data-open={open} onClick={abrir}>
            <span>{ id }</span>
            <h2>{ title }</h2>
            <div className="text">
                <p>{ text }</p>
            </div>
            <button className="close">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 0.000976562H6V6.00098H0V8.00098H6V14.001H8V8.00098H14V6.00098H8V0.000976562Z" fill="black"/></svg>
            </button>
        </div>
    )
}

