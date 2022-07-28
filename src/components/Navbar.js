import "./SCSS/Navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie } from "@fortawesome/free-solid-svg-icons"

import { useState } from "react"

const Navbar = () => {
    const [language, setLanguage] = useState("English")

    return (
        <div className="navbar-container">
            <FontAwesomeIcon className="icon" icon={faUserTie} />
            <div className="navbar-text">Admin | Language:</div>
            <select className="navbar-combobox" value={language} onChange={event => setLanguage(event.target.value)}>
                <option value={"English"}>English</option>
                <option value={"VietNam"}>Tiếng Việt</option>
            </select>
        </div>
    )
}

export default Navbar