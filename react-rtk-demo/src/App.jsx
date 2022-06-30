import { useState } from 'react'
import { CakeView } from './features/cake/CakeView';
import { IceCreamView } from './features/icecream/IceCreamView';
import { UserView } from './features/user/UserView';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CakeView/>
      <IceCreamView/>
      <UserView/>
    </div>
  )
}

export default App
