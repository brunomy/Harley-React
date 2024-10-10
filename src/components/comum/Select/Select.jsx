import './Select.scss'

export default function Select({ label, value, setValue, lista }){
    return (
        <div className="selectStyle">
            <select name="" id="" className='cheio' data-empty={ value } value={ value } onChange={(e) => setValue(e.target.value)}>
                <option value=""></option>
                {lista && lista.map((item, index) => (
                    <option key={ index } value={ item.value }>{ item.name }</option>
                ))}
            </select>
            <label>{ label }</label>
        </div>
    )
}