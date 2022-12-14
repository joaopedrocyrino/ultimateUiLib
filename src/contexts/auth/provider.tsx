import React, { useState, useMemo } from "react";

import AuthContext from "./context"
import { IAuthProviderProps } from "./dto"

const AuthProvider: React.FC<IAuthProviderProps> = ({ children, loginCall }) => {
    const [loginLoading, setLoginLoading] = useState(false)
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
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
