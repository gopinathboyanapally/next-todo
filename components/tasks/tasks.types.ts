export type TGenericObject = {
    id: number;
    color: string,
    title: string,
    completed: number
}
export type TTasks = {
    tasks: TGenericObject[]
}

export type FnType = (...args: (string | number)[]) => any;
