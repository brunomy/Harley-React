import './TextArea.scss'

export default function TextArea({ label, value, setValue }) {
    return (
        <div className='textAreaStyle'>
            <textarea type="text" data-empty={ value } value={ value } onChange={ (e) => setValue(e.target.value) } />
            <label>{ label }</label>
        </div>
    )
}