import "./Navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie } from "@fortawesome/free-solid-svg-icons"

import { Link } from 'react-router-dom'

import { Button } from "@mui/material"

const Navbar = (props) => {
    return (
        <div className="navbar-container">
            {props.backButton !== undefined &&
            <div className="navbar-left">
                <Link to="/songlist"><Button variant="contained" style={{ backgroundColor: "#ededed", color: "black" }}>Back to list</Button></Link> 
            </div>
            }
            <div className="navbar-right">
                <FontAwesomeIcon className="icon" icon={faUserTie} />
                <div className="navbar-text">Admin | Language:</div>
                <select className="navbar-combobox" value={props.language} onChange={event => props.setLanguage(event.target.value)}>
                    <option value={"English"}>English</option>
                    <option value={"VietNam"}>Tiếng Việt</option>
                </select>
            </div>
        </div>
    )
}

export default Navbar