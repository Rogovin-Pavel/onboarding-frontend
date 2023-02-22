import reactLogo from './assets/react.svg'
import { Navbar } from './components/molecules/navbar/navbar'

import Login from './components/organisms/login/login'

function App() {
  return (
    <>
      <Navbar />
      <section
        className="h-screen flex flex-col justify-center align-center
        bg-gradient-to-r from-sky-300 to-indigo-300
      "
      >
        <Login />
      </section>
    </>
  )
}

export default App
