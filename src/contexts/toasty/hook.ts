import { useContext } from "react"

import ToastyContext from "./context"

const useToasty = () => {
    const context = useContext(ToastyContext)

    return context
}

export default useToasty
