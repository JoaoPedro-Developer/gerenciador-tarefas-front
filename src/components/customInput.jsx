import './customInput.scss'

const customInput = ({label, value}) => {
    return <div className="custom-input-container">
        <input type="text" className="custom-input" />

        {label ? (
            <label className={`${value.length !== ''? "shrink" : ''} custom-input-label`}/>): null}
    </div>
}

export default customInput