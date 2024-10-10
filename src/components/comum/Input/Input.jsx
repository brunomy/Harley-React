import './Input.scss'

export default function Input({ label, value, setValue }){



    return (
        <div className='inputStyle'>
            <input type="text" value={ value } onChange={ (e) => setValue(e.target.value) } />
            <label>{ label }</label>
        </div>
    )
}