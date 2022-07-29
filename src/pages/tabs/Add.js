import "../SCSS/Page.scss"

import TabHeader from "../../components/TabHeader"
import Adder from "../../components/Song/Adder"

const Add = (props) => {
    return (
        <div className="tab-container">
            <TabHeader content="Add song"/>
            <Adder setPageInfo={props.setPageInfo}/>
        </div>
    )
}

export default Add