import "./Navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie } from "@fortawesome/free-solid-svg-icons"

import { useState } from "react"
import { Button } from "@mui/material"

const Navbar = (props) => {
    const [language, setLanguage] = useState("English")

    return (
        <div className="navbar-container">
            {props.pageInfo.Status !== "List" &&
            <div className="navbar-left">
                <Button variant="contained" style={{ backgroundColor: "#ededed", color: "black" }}
                    onClick={() => props.setPageInfo({Status: "List"})}>Back to list</Button>
            </div>
            }
            <div className="navbar-right">
                <FontAwesomeIcon className="icon" icon={faUserTie} />
                <div className="navbar-text">Admin | Language:</div>
                <select className="navbar-combobox" value={language} onChange={event => setLanguage(event.target.value)}>
                    <option value={"English"}>English</option>
                    <option value={"VietNam"}>Tiếng Việt</option>
                </select>
            </div>
        </div>
    )
}

export default Navbar