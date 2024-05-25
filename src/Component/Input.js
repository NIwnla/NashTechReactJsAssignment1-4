export default function Input(props) {
    return (
        <div>
            <label htmlFor={props.name}>{props.placeholder}</label><br></br>
            <input
                type={props.type}
                value={props.value}
                onChange={props.handleFieldChange}
                placeholder={props.placeholder}
                name={props.name} /><br></br>
            {props.error && <span style={{ color: 'red' }}>{props.error}</span>}
        </div>

    )
}