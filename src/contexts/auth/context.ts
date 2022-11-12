import { createContext } from "react";

import { IAuthContext } from "./dto"

const AuthContext = createContext({} as IAuthContext)

export default AuthContext
