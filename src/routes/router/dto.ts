import React from "react"

export interface IFullRoute  {
    path: string,
    pageElement: React.ReactNode
    screenElement?: React.ReactNode
}

export interface IRoute {
    path: string
    element: React.ReactNode
}

export interface IRouterProps {
    noAuthRoutes: IFullRoute[]
    authRoutes?: IFullRoute[]
}
