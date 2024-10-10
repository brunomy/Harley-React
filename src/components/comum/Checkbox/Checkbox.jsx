import './Checkbox.scss'

export default function Checkbox({ name, text }) {
    return (
        <div className='checkboxStyle'>
            <input type="checkbox" id={ name } name={ name } hidden />
            <label htmlFor={ name }>{ text }</label>
        </div>
    )
}