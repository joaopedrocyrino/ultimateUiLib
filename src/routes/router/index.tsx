import React, { useMemo } from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

import { IRouterProps } from "./dto"
import { useAuth } from "../../contexts"
import { isMobile } from "../../utils"

const Router: React.FC<IRouterProps> = ({ noAuthRoutes, authRoutes }) => {
    const { token } = useAuth()

    const [screenRoutes, pageRoutes] = useMemo(() => {
        if (authRoutes?.length && token) {
            return [
                authRoutes.map(({ path, pageElement, screenElement }) => ({ path, element: screenElement ?? pageElement })),
                authRoutes.map(({ path, pageElement }) => ({ path, element: pageElement })),
            ]
        }

        return [
            noAuthRoutes.map(({ path, pageElement, screenElement }) => ({ path, element: screenElement ?? pageElement })),
            noAuthRoutes.map(({ path, pageElement }) => ({ path, element: pageElement })),
        ]
    }, [noAuthRoutes, authRoutes, token, noAuthRoutes.length, authRoutes?.length])

    const mobile = useMemo(() => isMobile(), [])

    return (
        <BrowserRouter>
            <Routes>
                {(mobile ? screenRoutes : pageRoutes).map((route, index) => (
                    <Route {...route} key={`route-${index}`} />
                ))}
            </Routes>
        </ BrowserRouter>
    )
}

export default Router
