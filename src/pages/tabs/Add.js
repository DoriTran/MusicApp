import "../SCSS/Page.scss"

import Navbar from "../../components/Navbar.js"
import TabHeader from "../../components/TabHeader"
import Adder from "../../components/Song/Adder"

const Add = (props) => {
    return (
        <div div className="page-container">
            <Navbar language={props.language} setLanguage={props.setLanguage} backButton/>
            <div className="tab-container">
                <TabHeader content="Add song"/>
                <Adder/>
            </div>        
        </div>

    )
}

export default Add