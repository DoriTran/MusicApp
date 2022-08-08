import "./DeleteMusicDialog.scss"
import { Button } from "@mui/material"
import Dialog from '../Dialog/Dialog'

import { useEffect } from "react"
import { useMutation } from "react-query"

import deleteArrSong from "../../api-calls/song/deleteArrSong"

const DeleteListMusicDialog = (props) => {
    // Delete handler
    const mutateDeleteMusic = useMutation(deleteArrSong)

    useEffect(() => {
        if (mutateDeleteMusic.isSuccess) {
            props.onBackdropClick()
            props.setCheckedID([])
            props.setCheckAll(false)
            props.refetchSong()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mutateDeleteMusic.isSuccess])

    const deleteHandler = () => {
        mutateDeleteMusic.mutate(props.checkedID)
    }    

    return (
        <Dialog onBackdropClick={() => props.onBackdropClick()} onCloseClick={() => props.onBackdropClick()}>
            <div className="dialog-container">
                <div className="dialog-header">Are you sure to delete those song?</div>
                <form className="dialog-body">
                    <div className="dialog-message">
                        <div className="dialog-single">All data of those song will be deleted</div>
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

export default DeleteListMusicDialog