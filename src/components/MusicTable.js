import "./SCSS/MusicTable.scss"

import { Link } from "react-router-dom";
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
                                        <Link to={`/play/id=${music.musicID}`}><FontAwesomeIcon className="info-button" icon={faPlay} /></Link>
                                        <Link to={`/edit/id=${music.musicID}`}><FontAwesomeIcon className="delete-button" icon={faPencil} /></Link>
                                    </div>
                                </td>
                            </tr>)
                        )
                    }
                    <tr>
                        <td colspan="2">
                            <div className="info-wrapper">
                                <span>Total Items: 3</span>
                                <span>Selected Items: 3</span>
                            </div>
                        </td>
                        <td colspan="2">
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
