export function updateObject<T>(oldObject: T, newValues: any): T {
    return Object.assign({}, oldObject, newValues);
}
