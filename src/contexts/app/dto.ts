import { IFullRoute } from "../../routes/router/dto"


export interface IAppContext {

}

export interface IAppProviderProps {
    children: any
    auth?: {
        loginCall?: () => Promise<string | undefined>
    },
    routes: {
        noAuthRoutes: IFullRoute[]
        authRoutes?: IFullRoute[]
    }
}
