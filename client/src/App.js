import react from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import SignIn from './components/SignIn'
import Logo from './assets/image/logo.svg'

export default function App() {
  return (
    <>
      <header>
        <Routes>
          <Route path='/signIn' element={<img src={Logo} alt='Logo da memoMind'/>}/>
        </Routes>

        {/* <Link to='/signIn'>Sign-in</Link>
        <Link to='/signUp'>Sign-up</Link> */}
      </header>

      <main>
        <Routes>
          <Route path='/signIn' element={<SignIn/>}/>
        </Routes>
      </main>
    </>
  )
}