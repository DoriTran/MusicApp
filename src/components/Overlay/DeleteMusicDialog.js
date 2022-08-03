import "./DeleteMusicDialog.scss"
import { Button } from "@mui/material"
import Dialog from '../Dialog/Dialog'

import { useEffect } from "react"
import { useMutation } from "react-query"

import deleteMusic from "../../api-calls/song/deleteSong"

const DeleteMusicDialog = (props) => {
    // Delete handler
    const mutateDeleteMusic = useMutation(deleteMusic)

    useEffect(() => {
        if (mutateDeleteMusic.isSuccess) {
            props.setPageInfo({Status: 'List', ID: 0})
            props.onBackdropClick()
            props.setCheckedID(prevCheckedIDs => prevCheckedIDs.filter(prevCheckedID => prevCheckedID !== props.music.songID))
            props.setCheckAll(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mutateDeleteMusic.isSuccess])

    const deleteHandler = () => {
        mutateDeleteMusic.mutate(props.songID)
    }    

    return (
        <Dialog onBackdropClick={() => props.onBackdropClick()} onCloseClick={() => props.onBackdropClick()}>
            <div className="dialog-container">
                <div className="dialog-header">Are you sure to delete {props.music.name} ?</div>
                <form className="dialog-body">
                    <div className="dialog-message">
                        <div className="dialog-single">All data of this song will be deleted</div>
                    </div>
                </form>
                <div className="dialog-button-group">
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "transparent", color: "black" }}
                        onClick={props.onBackdropClick}>
                        NO
                    </Button>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#ededed", marginLeft: "5px", color: "black" }}
                        onClick={() => deleteHandler()}
                    >
                        YES
                    </Button>
                </div>
            </div>
        </Dialog>)
}

export default DeleteMusicDialog