import React from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {MenuItem} from "@mui/material";
import {Type} from "./type";

export interface BoolType extends Type {

}

interface BoolProps {
    schema: BoolType
}

interface BoolState {
    value: boolean
}

export default class Bool extends React.Component<BoolProps, BoolState> {
    handleChange = (event: SelectChangeEvent) => {
        this.setState({
            value: event.target.value === "1"
        })
    }

    render() {
        return <Select
            value={this.state.value?"1":"0"}
            onChange={this.handleChange}
        >
            <MenuItem value={"0"}>No</MenuItem>
            <MenuItem value={"1"}>Yes</MenuItem>
        </Select>
    }
}