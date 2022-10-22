import {SaveButton, Toolbar} from "react-admin";


const CustomToolbar = () =>{
    return (
            <Toolbar>
                <SaveButton alwaysEnable />
            </Toolbar>
    )
}

export default CustomToolbar;