import "./SCSS/MusicTable.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faPencil } from "@fortawesome/free-solid-svg-icons"

const MusicTable = (props) => {
    const handleCheckAll = () => {
        props.setCheckAll(!props.checkAll);
        let PageEmployeeNo = props.employees.map(employee => employee.no)

        if (!props.checkAll) {
            let newCheckedNos = PageEmployeeNo.filter(checked => !props.checkedID.includes(checked))
            props.setCheckedID(prev => [...prev, ...newCheckedNos])
        } else {
            props.setCheckedID(prev => prev.filter(checked => !PageEmployeeNo.includes(checked)))
        }
    }

    const handleCheck = (newCheckedID) => {
        if (props.checkedID.includes(newCheckedID)) {
            props.setCheckedID(prev => prev.filter(checked => checked !== newCheckedID))
        }
        else {
            props.setCheckedID(prev => [...prev, newCheckedID])
        }
    }

    return (
        <div className="music-container">
            <table>
                <tbody>
                    <tr>
                        <th><input type="checkbox" name="check_page"
                            checked={props.checkAll}
                            onChange={() => handleCheckAll()} /></th>
                        <th>Name</th>
                        <th>Genre</th>
                        <th>Actions</th>
                    </tr>
                    {
                        props.searchResult.map(music => (
                            <tr key={music.musicID}>
                                <td><input type="checkbox"
                                    checked={props.checkedID.includes(music.musicID)}
                                    onChange={() => handleCheck(music.musicID)} /></td>
                                <td>{music.name}</td>
                                <td>{music.genre}</td>
                                <td>
                                    <div className="option-wrapper">
                                        <FontAwesomeIcon className="action-link info-button" icon={faPlay} 
                                            onClick={() => props.setPageInfo({Status: "Play", ID: music.musicID}) }/>
                                        <FontAwesomeIcon className="action-link delete-button" icon={faPencil} 
                                            onClick={() => props.setPageInfo({Status: "Edit", ID: music.musicID}) }/>
                                    </div>
                                </td>
                            </tr>)
                        )
                    }
                    <tr>
                        <td colSpan="2">
                            <div className="info-wrapper">
                                <span>Total Items: 3</span>
                                <span>Selected Items: 3</span>
                            </div>
                        </td>
                        <td colSpan="2">
                            <div className="input-wrapper">
                                <span>Page size: <input type="number" className="page-input"/></span>
                                <input type="number" className="page-input"/>
                            </div>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default MusicTable
