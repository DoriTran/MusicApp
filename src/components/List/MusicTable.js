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
                        props.songs.map(song => (
                            <tr key={song.songID}>
                                <td><input type="checkbox"
                                    checked={props.checkedID.includes(song.songID)}
                                    onChange={() => handleCheck(song.songID)} /></td>
                                <td>{song.name}</td>
                                <td>{song.genre}</td>
                                <td>
                                    <div className="option-wrapper">
                                        <FontAwesomeIcon className="action-link info-button" icon={faPlay} 
                                            onClick={() => props.setPageInfo({Status: "Play", ID: song.songID}) }/>
                                        <FontAwesomeIcon className="action-link delete-button" icon={faPencil} 
                                            onClick={() => props.setPageInfo({Status: "Edit", ID: song.songID}) }/>
                                    </div>
                                </td>
                            </tr>)
                        )
                    }
                    <tr>
                        <td colSpan="2">
                            <div className="info-wrapper">
                                <span>Total Items: {props.songs.length}</span>
                                <span>Selected Items: {props.checkedID.length}</span>
                            </div>
                        </td>
                        <td colSpan="2">
                            <div className="input-wrapper">
                                <span>Page size: <input type="number" className="page-input" value={props.page} onChange={event => props.setPage(event.target.value)} /></span>
                                <input type="number" className="page-input" value={props.pagesize} onChange={event => props.setPagesize(event.target.value)}/>
                            </div>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default MusicTable
