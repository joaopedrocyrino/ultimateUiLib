import { createContext } from "react";

import { IToastyContext } from "./dto"

const ToastyContext = createContext({} as IToastyContext)

export default ToastyContext
