import { useEffect, useState } from "react"
import Input from "./Input"

export default function RegisterForm() {
    const genderType = [
        { gender: "Male", value: 'M' },
        { gender: "Female", value: 'F' }
    ]
    const [values, setValues] = useState({
        username: '',
        email: '',
        gender: '',
        password: '',
        retypePassword: '',
        aggrement: false
    })
    const [formError, setFormError] = useState({})
    const [canSubmit, setCanSubmit] = useState(false)
    useEffect(() => {
        const validate = () => {
            const errors = {}
            if (!values.username) {
                errors.username = 'Username is required'
            } else if (!/^[a-zA-Z0-9]+$/.test(values.username)) {
                errors.username = 'Username must be alphanumeric'
            } else if (values.username.length < 4) {
                errors.username = 'Username must be at least 4 characters'
            }

            if (!values.email) {
                errors.email = 'Email is required'
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'Email address is invalid'
            }

            if (!values.gender) {
                errors.gender = 'Gender is required'
            }

            if (!values.password) {
                errors.password = 'Password is required'
            } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters'
            }

            if (!values.retypePassword) {
                errors.retypePassword = 'Retype Password is required'
            } else if (values.retypePassword !== values.password) {
                errors.retypePassword = 'Passwords do not match'
            }
            if (!values.aggrement) {
                errors.aggrement = 'You need to agree to thing'
            }
            return errors
        }

        const errors = validate()
        setFormError(errors)
        if (Object.entries(errors).length === 0) {
            setCanSubmit(true)
        } else {
            setCanSubmit(false)
        }
    }, [values])

    function handleFieldChange(event) {
        setValues({ ...values, [event.target.name]: event.target.value })
    }
    function handleCheckBoxChange(event){
        setValues({ ...values, aggrement : event.target.checked})
    }

    return (
        <div>
            <form>
                <Input
                    type='text'
                    name='username'
                    value={values.username}
                    placeholder='Username'
                    handleFieldChange={handleFieldChange}
                    error={formError.username}
                />
                <Input
                    type='text'
                    name='email'
                    value={values.email}
                    placeholder='Email'
                    handleFieldChange={handleFieldChange}
                    error={formError.email} />
                <div>
                    <label htmlFor="gender">Select gender</label>
                    <select
                        name="gender"
                        value={values.gender}
                        onChange={handleFieldChange}>
                        <option value='' >Select gender</option>
                        {genderType.map(gender => (
                            <option value={gender.value}>{gender.gender}</option>
                        ))}
                    </select>
                    {formError.gender && <span style={{ color: 'red' }}>{formError.gender}</span>}
                </div>
                <Input
                    type='password'
                    name='password'
                    value={values.password}
                    placeholder='Password'
                    handleFieldChange={handleFieldChange}
                    error={formError.password} />
                <Input
                    type='password'
                    name='retypePassword'
                    value={values.retypePassword}
                    placeholder='RetypePassword'
                    handleFieldChange={handleFieldChange}
                    error={formError.retypePassword} />
                <label htmlFor="aggrement">I agree to Thing</label>
                <input
                    type="checkBox"
                    name='aggrement'
                    onChange={handleCheckBoxChange}
                    checked={values.aggrement} />
                <br />
                {formError.aggrement && <span style={{ color: 'red' }}>{formError.aggrement}</span>}<br />
                <button type="submit" disabled={!canSubmit}>Submit</button>
            </form>
        </div>
    )
}