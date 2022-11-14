import React, { useState, useMemo } from "react";

import AppContext from "./context"
import { IAppProviderProps } from "./dto"
import { AuthProvider } from "../auth"
import { Router } from "../../routes"

const AppProvider: React.FC<IAppProviderProps> = ({ auth, routes }) => {
    const login = useMemo(() => {
        if (auth?.loginCall) {
            return auth.loginCall
        }
        return () => new Promise((res: (value: string) => void) => res(""))
    }, [auth, auth?.loginCall])

    const providerValue = useMemo(() => ({
    }), [
    ])

    return (
        <AppContext.Provider value={providerValue}>
            <AuthProvider loginCall={login}>
                <Router
                    noAuthRoutes={routes.noAuthRoutes}
                    authRoutes={routes.authRoutes}
                />
            </AuthProvider>
        </AppContext.Provider>
    )
}

export default AppProvider
