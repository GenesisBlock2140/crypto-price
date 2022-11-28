import { FILTER_CRYPTO, CLEAR_FILTER, CryptoProps } from './types'

export const initialState = {
  list: [
    {id:"bitcoin",symbol:"btc", name:"Bitcoin", image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579", price_change_percentage_24h: 2.1},
    {id:"ethereum",symbol:"eth", name:"Ethereum", image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880", price_change_percentage_24h: -4.2},
    {id:"tether",symbol:"tether", name:"Tether", image: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663", price_change_percentage_24h: 3.75}
  ],
  listFiltered: [
    {id:"bitcoin",symbol:"btc", name:"Bitcoin", image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579", price_change_percentage_24h: 2.1},
    {id:"ethereum",symbol:"eth", name:"Ethereum", image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880", price_change_percentage_24h: -4.2},
    {id:"tether",symbol:"tether", name:"Tether", image: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663", price_change_percentage_24h: 3.75}
  ]
}

interface State {
  list: CryptoProps[],
  listFiltered: CryptoProps[]
}

interface Action {
  type: string;
  payload: string;
}

const cryptoReducer = (state:State, action:Action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_CRYPTO:
      console.log("FILTER_CRYPTO " + payload);
      return {
        ...state,
        listFiltered: [...initialState.list].filter(crypto => 
          crypto.name.toLocaleLowerCase().includes(payload.toLocaleLowerCase())
        )
      }
    case CLEAR_FILTER:
      console.log("CLEAR_FILTER " + payload);
      return {
        ...state,
        listFiltered: [...initialState.list]
      }
    default:
      return state
  }

}

export default cryptoReducer