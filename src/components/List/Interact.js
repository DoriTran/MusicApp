import "./SCSS/Interact.scss"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import DeleteListMusicDialog from "../Overlay/DeleteListMusicDialog"

const Interact = (props) => {
    const [isDeleteOpen, setDeleteStatus] = useState(false)

    const handleInput = (input) => {
        props.setSearchKey(input)
    }

    return (
        <div className="interact-container">
            <div className="button-wrapper">
                <button onClick={() => props.setPageInfo({Status: "Add"})}>Add</button>
                <button onClick={() => setDeleteStatus(true)}>Delete</button>
            </div>
            <div className="interact-searchbox">
                <FontAwesomeIcon className="search-icon" icon={faSearch}/> 
                <input value={props.searchKey} placeholder="Search . . ." onChange={event => handleInput(event.target.value)}/>  
            </div>
            {isDeleteOpen && <DeleteListMusicDialog 
                onBackdropClick={() => setDeleteStatus(false)}
                refetchSong={props.refetchSong}
                checkedID={props.checkedID} setCheckedID={props.setCheckedID}
                setCheckAll={props.setCheckAll}
                setPageInfo={props.setPageInfo}/>}
        </div>
    )
}

export default Interact