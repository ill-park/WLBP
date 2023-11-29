export function hasValue(item, column) {
    return item[column] !== "undefined";
}

export function itemValue(item, column) {
    return item[column];
}
