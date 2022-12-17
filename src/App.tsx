import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CryptoProvider }  from './context/cryptoContext'

import { Home } from './pages/Home/Home';
import { Crypto } from './pages/Crypto/Crypto'

function App() {

  const client = new QueryClient({})

  return (
    <div className="App">
      <CryptoProvider>
        <QueryClientProvider client={client}>
          <Router>
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path='/crypto/:name' element={<Crypto />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </CryptoProvider>
    </div>
  )
}

export default App
