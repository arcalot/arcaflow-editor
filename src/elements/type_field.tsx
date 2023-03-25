import {Type, TypeID} from "./type";
import React from "react";
import Bool, {BoolType} from "./bool";
import EnumString, {EnumStringType} from "./enum_string";
import EnumInt, {EnumIntType} from "./enum_int";
import String, {StringType} from "./string";
import Int, {IntType} from "./int";
import Float, {FloatType} from "./float";

interface TypeFieldProps {
    schema: Type
}

interface TypeFieldState {

}

export default class TypeField extends React.Component<TypeFieldProps, TypeFieldState> {
    render() {
        switch (this.props.schema.type_id) {
            case TypeID.Bool:
                return <Bool schema={this.props.schema as BoolType} />
            case TypeID.StringEnum:
                return <EnumString schema={this.props.schema as EnumStringType} />
            case TypeID.IntEnum:
                return <EnumInt schema={this.props.schema as EnumIntType} />
            case TypeID.String:
                return <String schema={this.props.schema as StringType} />
            case TypeID.Int:
                return <Int schema={this.props.schema as IntType} />
            case TypeID.Float:
                return <Float schema={this.props.schema as FloatType} />
        }
    }
}