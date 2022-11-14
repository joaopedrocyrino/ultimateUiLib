export interface IToastyContext {
    token: string
    login: () => Promise<void>
    logout: () => void,
    loginLoading: boolean
}

export interface IToastyProviderProps {
    children: any
    loginCall: () => Promise<string | undefined>
}

export type IToastyType = "green" | "yellow" | "red"  | "blue"

export interface IToasty {
    type: IToastyType
    title?: string
    description?: string
}
