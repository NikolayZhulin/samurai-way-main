import React, {ReactNode} from "react";
import {StoreType} from "./Redux/state";


export type ProviderType = {
    store: StoreType;
    children: ReactNode
}
const StoreContext = React.createContext({} as StoreType)

export const Provider = (props: ProviderType) => {

    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContext;