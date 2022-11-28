import { createContext, useReducer } from "react";
import cryptoReducer, { initialState } from './cryptoReducer';

interface Props {
  children: any;
}

export const CryptoContext = createContext<any>({})

export const CryptoProvider = ({ children }:Props) => {
  
  const [state, dispatch] = useReducer(cryptoReducer, initialState)

  const filterCrypto = (cryptoStartWith:string) => {
    dispatch({
      type: "FILTER_CRYPTO",
      payload: cryptoStartWith
    })
  }

  const clearFilterCrypto = () => {
    dispatch({
      type: "CLEAR_FILTER",
      payload: ""
    })
  }

  const value = {
    list: state.list,
    listFiltered: state.listFiltered,
    filterCrypto,
    clearFilterCrypto
  }

  return (
    <CryptoContext.Provider value={value}>
      {children}
    </CryptoContext.Provider>
  )

}

export default CryptoProvider