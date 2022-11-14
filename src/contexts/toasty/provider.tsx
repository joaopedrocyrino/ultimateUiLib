import React, { useState, useMemo } from "react";

import ToastyContext from "./context"
import { IToastyProviderProps, IToasty } from "./dto"

const ToastyProvider: React.FC<IToastyProviderProps> = ({ children, loginCall }) => {
    const [toasts, setToasts] = useState<IToasty[]>([])
    const [token, setToken] = useState<string>("")

    const login = async () => {
        try {
            setLoginLoading(true)

            const newToken = await loginCall()

            setToken(newToken ?? "")
        } catch {
            
        } finally { setLoginLoading(false) }
    }

    const logout = () => { }

    const providerValue = useMemo(() => ({
        token,
        login,
        logout,
        loginLoading
    }), [
        token,
        login,
        logout,
        loginLoading
    ])

    return (
        <ToastyContext.Provider value={providerValue}>
            
            {children}

        </ToastyContext.Provider>
    )
}

export default ToastyProvider
