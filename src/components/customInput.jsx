import './customInput.scss'

const customInput = ({label, value, onChange}) => {
    return <div className="custom-input-container">
        <input value={value} type="text" className="custom-input" onChange={e => onChange(e)}/>
        {label ? (<label className={`${value.length > 0 ? "shrink" : ''} custom-input-label`}>
            {label}
        </label>) : null}
            
    </div>
}

export default customInput