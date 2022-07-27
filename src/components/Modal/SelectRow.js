import "./SelectRow.scss"

const SelectRow = (props) => {
    const handleInput = (event, input) => {
        if (props.name === "notObject") {
            props.setInput(event.target.value)
        }
        else {
            return {...input, [props.name]: event.target.value}
        }
    }

    return (
        <div className="main">
            <span>{props.label}</span>
            <select
                value={props.value}
                name={props.name}

                defaultValue={props.defaultValue}

                required = {props.required}

                disabled={props.disabled}

                onChange={event => props.setInput(input => handleInput(event, input))}
                 >
                { props.realOptions !== undefined ? 
                    props.realOptions.map(op => (<option key={op.value} value={op.value}>{op.option}</option>)):
                    props.options.map((option, index) => (<option key={index} value={option}>{option}</option>))
                }    
            </select>
            
        </div>
    )
}

export default SelectRow