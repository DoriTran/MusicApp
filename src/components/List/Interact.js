import "./SCSS/Interact.scss"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Interact = (props) => {
    const [isDeleteOpen, setDeleteStatus] = useState(false)

    return (
        <div className="interact-container">
            <div className="button-wrapper">
                <button onClick={() => props.setPageInfo({Status: "Add"})}>Add</button>
                <button onClick={() => setDeleteStatus(true)}>Delete</button>
            </div>
            <div className="interact-searchbox">
                <FontAwesomeIcon className="search-icon" icon={faSearch}/> 
                <input value={props.searchKey} placeholder="Search . . ." onChange={event => props.setSearchKey(event.target.value)}/>  
            </div>
            {isDeleteOpen && <div></div>}
        </div>
    )
}

export default Interact