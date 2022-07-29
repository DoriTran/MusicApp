import "../SCSS/Page.scss"

import Audio from "../../components/Song/Audio"
import TabHeader from "../../components/TabHeader"
import Play from "../../components/Song/Play"
import Edit from "../../components/Song/Edit"

const Music = (props) => {
    return (
        <div className="tab-container">
            <Audio/>
            <TabHeader content="Song Details"/>
            {props.pageInfo.Status === "Play" && <Play setPageInfo={props.setPageInfo}/>}
            {props.pageInfo.Status === "Edit" && <Edit setPageInfo={props.setPageInfo}/>}
        </div>
    )
}

export default Music