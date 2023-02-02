import reactLogo from './assets/react.svg'

import Login from './components/organisms/login/login'

function App() {
  return (
    <div
      className="h-screen flex flex-col justify-center align-center
        bg-gradient-to-r from-sky-300 to-indigo-300
      "
    >
      <Login />
    </div>
  )
}

export default App
