import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import style from "/Users/bridgeit/Documents/my-app/src/style.css";
import Drawer from "@material-ui/core/SwipeableDrawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
class Navbar extends React.Component {

    render() {
        return (
            <div>
                <AppBar className="navbar" >
                
                    <div style={{ display: "flex", flexWrap: "wrap",justifyContent: "space-between",width: "-56px",maxWidth: "160px" }}>
                        <div>
                            <img src={require("../icons/keep.png")} alt="alt" />
                        </div>
                        <span className="fundoo"  >
                            <h4>FundooNotes</h4></span>
                    </div>
                </AppBar>
            </div>
        )
    }
}
export default Navbar