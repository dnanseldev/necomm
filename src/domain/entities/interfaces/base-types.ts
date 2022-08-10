export type TGenericParametersType<T> = {
    [P in keyof T]: T[P]
}