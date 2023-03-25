import React from "react";
import {Type} from "./type";
import TextField from '@mui/material/TextField';

export interface IntType extends Type {
    min?: number
    max?: number
    pattern?: string
}
interface IntProps {
    schema: IntType
}

interface IntState {
    value: number
}

export default class Int extends React.Component<IntProps, IntState> {

    validate = () => {
        if (this.props.schema.min && this.state.value < this.props.schema.min) {
            return "Please enter at least " + this.props.schema.min + "."
        }
        if (this.props.schema.max && this.state.value > this.props.schema.max) {
            return "Please enter at most " + this.props.schema.max + "."
        }
    }

    render() {
        return <TextField
            error={this.validate() !== undefined}
            helperText={this.validate()}
            value={this.state.value}
            type={"number"}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]+' }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                this.setState({
                    value: parseInt(event.target.value)
                });
            }}
        />
    }
}