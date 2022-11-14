import { SaveButton, Toolbar, DeleteButton } from "react-admin";


const CustomToolbar = () => {
    return (
        <Toolbar>
            <SaveButton alwaysEnable />
            <DeleteButton />
        </Toolbar>
    )
}

export default CustomToolbar;