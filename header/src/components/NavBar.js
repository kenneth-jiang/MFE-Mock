import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import { styled } from '@mui/material/styles';


// should be in separate styles file
const StyledAppBar = styled(AppBar)(() => ({
    backgroundColor: "#febe10",
}));

const StyledContainer = styled(Container)(() => ({
    maxHeight: "29px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    color: "black",
}));

// should be in constants file
const checkBoxLabel = "Candid at a glance";

// component can stay here
const NavBar = () => {
    const [ checked, setChecked ] = useState(true);

    const onChange = () => {
        return setChecked(!checked);
    };

    return (
        <StyledAppBar elevation={0}>
            <StyledContainer>
                <strong>
                    {checkBoxLabel}
                </strong>
                <Checkbox
                    color={"default"}
                    checked={checked}
                    onChange={onChange}
                />
            </StyledContainer>
        </StyledAppBar>
    );
};

export default NavBar;