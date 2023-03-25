import React from "react";
import {Type} from "./type";
import TextField from '@mui/material/TextField';

export interface PatternType extends Type {
}
interface PatternProps {
    schema: PatternType
}

interface PatternState {
    value: string
}

export default class Pattern extends React.Component<PatternProps, PatternState> {

    validate = () => {
        try {
            new RegExp(this.state.value)
        } catch (e) {
            return "Please enter a valid regular expression."
        }
    }

    render() {
        return <TextField
            error={this.validate() !== undefined}
            helperText={this.validate()}
            value={this.state.value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                this.setState({
                    value: event.target.value
                });
            }}
        />
    }
}