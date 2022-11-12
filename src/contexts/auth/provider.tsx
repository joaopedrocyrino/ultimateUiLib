import React, { useState, useMemo } from "react";

import AuthContext from "./context"

const AuthProvider: React.FC<{ children: any  }> = ({ children }) => {
    const [token, setToken] = useState<string>("")

    const login = async () => {}

    const logout = () => {}

    const providerValue = useMemo(() => ({

    }), [])

    return (
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    )
}
