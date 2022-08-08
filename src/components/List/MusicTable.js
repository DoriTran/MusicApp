import "./SCSS/MusicTable.scss"

import { useEffect } from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faPencil } from "@fortawesome/free-solid-svg-icons"

const MusicTable = (props) => {

    // Handle checking
    const isCheckAll = () => {
        const totalChecked = props.songs.filter(song => props.checkedID.includes(song.songID)).length
        if (totalChecked === props.songs.length) return true
        else return false
    }
    
    useEffect(() => {
        props.setCheckAll(isCheckAll())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.checkedID]);

    const handleCheckAll = () => {
        props.setCheckAll(!props.checkAll);
        let SongID = props.songs.map(song => song.songID)

        if (!props.checkAll) {
            let newCheckedIDs = SongID.filter(checked => !props.checkedID.includes(checked))
            props.setCheckedID(prev => [...prev, ...newCheckedIDs])
        } else {
            props.setCheckedID(prev => prev.filter(checked => !SongID.includes(checked)))
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

    // Handle input
    const handlePagesizeInput = (value) => {
        // Parse Int
        if (isNaN(value)) return
        value = parseInt(value)

        // Check over maxsize input
        if (value < 1) value = 1
        
        props.setPagesize(value)

        // Check current page input reasonable with pagesize input
        if (props.page > Math.ceil(props.total / value)) {
            props.setPage(Math.ceil(props.total / value))
        }
    }

    const handlePageInput = (value) => {
        // Parse Int
        if (isNaN(value)) return
        value = parseInt(value)

        // Check over range input
        if (props.pagesize === 0) {
            props.setPage(1)
            return
        }
        if (value > Math.ceil(props.total / props.pagesize)) value = Math.ceil(props.total / props.pagesize)
        if (value < 1) value = 1

        props.setPage(value)
    }

    return (
        <div className="music-container">
            <table>
                <tbody>
                    <tr>
                        <th><input type="checkbox" name="check_page"
                            checked={isCheckAll()}
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
                                        <Link to={`/songdetail/status=play/id=${song.songID}`}><FontAwesomeIcon className="action-link info-button" icon={faPlay} /></Link> 
                                        <Link to={`/songdetail/status=edit/id=${song.songID}`}><FontAwesomeIcon className="action-link delete-button" icon={faPencil} /></Link>
                                    </div>
                                </td>
                            </tr>)
                        )
                    }
                    <tr>
                        <td colSpan="2">
                            <div className="info-wrapper">
                                <span>Total Items: {props.total}</span>
                                <span>Selected Items: {props.checkedID.length}</span>
                            </div>
                        </td>
                        <td colSpan="2">
                            <div className="input-wrapper">
                                <span>Page size: <input type="number" className="page-input" value={props.pagesize} onChange={event => handlePagesizeInput(event.target.value)} /></span>
                                <span>Page: <input type="number" className="page-input" value={props.page} onChange={event => handlePageInput(event.target.value)} /></span>
                            </div>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default MusicTable
