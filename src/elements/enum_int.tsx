import React from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import {DisplayValue, OptionalDisplayValue} from "./display";
import {Type} from "./type";

export interface EnumIntType extends Type {
    values: Map<number,OptionalDisplayValue>
}

interface EnumIntProps {
    schema: EnumIntType
}

interface EnumIntState {
    value: string
}

export default class EnumInt extends React.Component<EnumIntProps, EnumIntState> {
    handleChange = (event: SelectChangeEvent) => {
        this.setState({
            value: event.target.value
        })
    }

    buildItems = () => {
        let result: JSX.Element[] = []
        this.props.schema.values.forEach((value: OptionalDisplayValue, key: number) => {
            if (value === null || value.name === null) {
                result.push(<MenuItem value={key}>{key}</MenuItem>)
            } else {
                result.push(<MenuItem value={key}>
                    <div><strong>{ value.name }</strong></div>
                    {value.description?<div>{value.description}</div>:null}
                </MenuItem>)
            }
        })
        return result
    }

    render() {
        return <Select
            value={this.state.value?"1":"0"}
            onChange={this.handleChange}
        >
            {
                this.buildItems()
            }
        </Select>
    }


}