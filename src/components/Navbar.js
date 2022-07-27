import "./SCSS/Navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie } from "@fortawesome/free-solid-svg-icons"

import { useState } from "react"
import SelectRow from "./Modal/SelectRow"

const Navbar = () => {
    const [language, setLanguage] = useState("English")

    return (
        <div className="navbar-container">
            <FontAwesomeIcon className="icon" icon={faUserTie} />
            <div className="navbar-text">Admin | Language</div>
            <SelectRow className="navbar-combobox" name="notObject" options={["English", "Tiếng Việt"]} value={language} setInput={setLanguage}/>
        </div>
    )
}