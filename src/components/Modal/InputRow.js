import "./InputRow.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const InputRow = (props) => {
    const handleInput = (event) => {
        if (props.regex === undefined ||
            (props.regex !== undefined && new RegExp(props.regex).test(event.target.value))) {

            let finalInput = event.target.value
            if (props.handleInput !== undefined) {
                finalInput = props.handleInput(finalInput)
            }

            if (props.name === "notObject") {
                props.setInput(finalInput)
            }
            else {
                props.setInput(formInput => {
                    return { ...formInput, [props.name]: finalInput }
                })
            }
        }
    }

    return (
        <div className="main">
            {props.icon && <FontAwesomeIcon className="icon" icon={props.icon} />}
            <span>{props.label}<span style={{ color: "red"}}>{props.warning}</span></span>
            <input
                type={props.type}

                value={props.value}
                name={props.name}

                defaultValue={props.defaultValue}
                placeholder={props.placeholder}

                required={props.required}

                maxLength={props.maxLength}
                max={props.max}
                min={props.min}

                disabled={props.disabled}

                onChange={event => handleInput(event)} />
        </div>
    )
}

export default InputRow