import { useState } from "react"
import Human from "./Human.js"
import Pokemon from "./Pokemon.js"
import RegisterForm from "./RegisterForm.js"

//#region option
export default function Options() {
    const arrayProfile = [
        {
            color: "red",
            profile: {
                Name: 'Hoangdd',
                Age: 34
            }
        },
        {
            color: "yellow",
            profile: {
                Name: 'Son Tung MTP',
                Age: 25
            }
        },
        {
            color: "green",
            profile: {
                Name: 'Ronaldo',
                Age: 37
            }
        }
    ]
    const [value, setValue] = useState("Wellcome")
    const options = [
        { label: "Wellcome", value: 1 },
        { label: "Counter", value: 2 },
        { label: "CheckBoxes", value: 3 },
        { label: "Pokemon", value: 4 },
        { label: "Form", value: 5 },
    ]
    function handleSelect(event) {
        setValue(event.target.value)
    }
    return (
        <div>
            <select onChange={handleSelect}>
                {options.map(option => (
                    <option value={option.label}>{option.label}</option>
                ))}
            </select>
            <p>Option selected: {value}</p>
            {value === "Wellcome" && arrayProfile.map(profile => (
                <Human profile={profile.profile} color={profile.color} />
            ))}
            {value === "Counter" && <Counter />}
            {value === "CheckBoxes" && <CheckBoxes />}
            {value === "Pokemon" && <Pokemon />}
            {value === "Form" && <RegisterForm />}
        </div>
    )
}
//#endregion
function Counter() {
    const [number, setNumber] = useState(0);
    function increaseNumber() {
        setNumber(number + 1)
    }
    function decreaseNumber() {
        setNumber(number - 1)
    }
    return (
        <div>
            <h2>
                <button onClick={decreaseNumber} style={{ margin: 10 }}>-</button>
                {number}
                <button onClick={increaseNumber} style={{ margin: 10 }}>+</button>
            </h2>
        </div>
    )
}

function CheckBoxes() {
    const [selectAll, setSelectAll] = useState(false)
    const [choice, setChoice] = useState({
        coding: false,
        music: false,
        reading: false
    })
    function handleChoice(name, checked) {
        if (checked !== false) {
            setSelectAll(false)
        }
        setChoice({
            ...choice,
            [name]: !checked
        })
        // if (choice.coding === true && choice.music === true && choice.reading === true) {
        //     setSelectAll(true)
        // }
    }
    function handleCheckAll() {
        setSelectAll(!selectAll)
        setChoice({
            coding: !selectAll,
            music: !selectAll,
            reading: !selectAll
        })
    }
    return (
        <div>
            <CheckBox
                name='select all'
                isChecked={selectAll}
                handleChoice={handleCheckAll} />
            <CheckBox
                name='coding'
                isChecked={choice.coding}
                handleChoice={handleChoice} />
            <CheckBox
                name='music'
                isChecked={choice.music}
                handleChoice={handleChoice} />
            <CheckBox
                name='reading'
                isChecked={choice.reading}
                handleChoice={handleChoice} />
            <p>You selected:</p>
            <p>{JSON.stringify(choice)}</p>
        </div>
    )
}

function CheckBox(props) {
    return (
        <div>
            <input
                type="checkbox"
                name={props.name}
                value={props.name}
                checked={props.isChecked}
                onChange={() => props.handleChoice(props.name, props.isChecked)}>
            </input>
            <label for={props.name}>{props.name}</label>
        </div>
    )
}