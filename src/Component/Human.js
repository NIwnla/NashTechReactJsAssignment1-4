export default function Human(props) {
    return (
        <div style={{ backgroundColor: props.color, width: 500}}>
            <h2>Hello {props.profile.Name}</h2>
            <h3>Age: {props.profile.Age}</h3>
        </div>
    )
}