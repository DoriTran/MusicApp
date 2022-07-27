import "./InputRow.scss"

const FileRow = (props) => {
    const handleInput = (event) => {
        if (props.name === "notObject") {
            props.setInput(event.target.files[0])
        }
        else {
            props.setInput(formInput => {
                return { ...formInput, [props.name]: event.target.files[0] }
            })
        }
    }

    return (
        <div className="main">
            <span>{props.label}</span>
            <input
                type="file"

                value={props.value}
                name={props.name}

                required={props.required}

                disabled={props.disabled}

                multiple={props.multiple}

                onChange={event => handleInput(event)} />
        </div>
    )
}

export default FileRow