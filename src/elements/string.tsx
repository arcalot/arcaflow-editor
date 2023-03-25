import React from "react";
import {Type} from "./type";
import TextField from '@mui/material/TextField';

export interface StringType extends Type {
    min?: number
    max?: number
    pattern?: string
}
interface StringProps {
    schema: StringType
}

interface StringState {
    value: string
}

export default class String extends React.Component<StringProps, StringState> {

    validate = () => {
        if (this.props.schema.min && this.state.value.length < this.props.schema.min) {
            return "Please enter at least " + this.props.schema.min + " character" + (this.props.schema.min>1?"s":"") + "."
        }
        if (this.props.schema.max && this.state.value.length > this.props.schema.max) {
            return "Please enter at most " + this.props.schema.max + " character" + (this.props.schema.max>1?"s":"") + "."
        }
        if (this.props.schema.pattern) {
            const re = new RegExp(this.props.schema.pattern)
            if (!re.test(this.state.value)) {
                return "Please enter a text that matches " + this.props.schema.pattern + "."
            }
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