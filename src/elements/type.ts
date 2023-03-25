
export enum TypeID {
    // StringEnum is a type that satisfies the StringEnum.
    StringEnum = "enum_string",
    // IntEnum is a type that satisfies the StringIntSchema.
    IntEnum = "enum_integer",
    // String is a type that satisfies the String.
    String = "string",
    // Pattern is a type that satisfies the Pattern.
    Pattern = "pattern",
    // Int is a type that satisfies the Int.
    Int = "integer",
    // Float is a type that satisfies the Float.
    Float = "float",
    // Bool is a type that satisfies the BoolSchema.
    Bool = "bool",
    // List is a type that satisfies the List.
    List = "list",
    // Map is a type that satisfies the Map.
    Map = "map",
    // Scope is a type that satisfies the Scope.
    Scope = "scope",
    // Object is a type that satisfies the Object.
    Object = "object",
    // OneOfString is a type that satisfies the OneOfStringSchema.
    OneOfString = "one_of_string",
    // OneOfInt is a type that satisfies the OneOfInt.
    OneOfInt = "one_of_int",
    // Ref is a type that references an object in a Scope.
    Ref = "ref",
    // Any refers to an any type. This type essentially amounts to unchecked types, as long as they are:
    //
    // - maps
    // - lists
    // - int64
    // - float64
    // - string
    // - bool
    //
    // No other types are accepted.
    Any = "any"
}

export interface Type {
    type_id: TypeID
    [x: string | number | symbol]: unknown;
}