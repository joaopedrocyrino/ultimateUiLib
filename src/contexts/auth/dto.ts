export interface IAuthContext {
    token: string
    login: () => Promise<void>
    logout: () => void,
    loginLoading: boolean
}

export interface IAuthProviderProps {
    children: any
    loginCall: () => Promise<string | undefined>
}
