import { createContext } from "react";

import { IAppContext } from "./dto"

const AppContext = createContext({} as IAppContext)

export default AppContext
