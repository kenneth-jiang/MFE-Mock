import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import OldHeader from "./OldHeader";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// should be in separate styles file
const StyledAppBar = styled(AppBar)(() => ({
    position: "relative",
    backgroundColor: "#febe10",
    borderBottom: "1px solid white",
}));

const StyledContainer = styled("div")(() => ({
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
    const [ checked, setChecked ] = useState(false);

    const onChange = () => {
        return setChecked(!checked);
    };

    return (
        <StyledAppBar elevation={0}>
            <StyledContainer>
                <strong style={{ cursor: "pointer" }} onClick={onChange}>
                    {checkBoxLabel}
                </strong>
                <Checkbox
                    checked={false}
                    color={"default"}
                    indeterminate={checked}
                    onClick={onChange}
                    icon={<KeyboardArrowDownIcon />}
                    indeterminateIcon={<KeyboardArrowUpIcon />}
                />
            </StyledContainer>
            {checked && <OldHeader />}
        </StyledAppBar>
    );
};

export default NavBar;