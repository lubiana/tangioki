import React from 'react'
import createClient from './components/Game'
import 'fontsource-roboto';

const App: React.FC = () => {
  const Client = createClient(2)
  return (
    <div>
      <Client />
    </div>
  )
}


export default App
