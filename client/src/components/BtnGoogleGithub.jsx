import Image from "next/image"
import { signIn } from "next-auth/react"

export default function BtnGoogleGithub() {
  return (
    <>    
      <div className='ctr-btn-google-github'>
          <div className='separador'>
              <hr/>
              <span>OU</span>
          </div>
          
          <button className='btn-google' onClick={() => {signIn('google')}}>
            <Image
              className="icon" 
              src='../assets/image/icon_google.svg' 
              alt='ícone do google'
              width='100'
              height='100'
            /> 
            google
          </button>
          <button className='btn-github' onClick={() => {signIn('github')}}>
            <Image
              className="icon"
              src='../assets/image/icon_github.svg' 
              alt='ícone do google'
              width='100'
              height='100'
            />
            Github
          </button>
      </div>
    </>
  )
}