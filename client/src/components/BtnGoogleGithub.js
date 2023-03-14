import react from 'react'
import icon_github from '../assets/image/icon_github.svg'
import icon_google from '../assets/image/icon_google.svg'

export default function BtnGoogleGithub() {
  return (
    <div className='ctr-btn-google-github'>
        <div className='separador'>
            <hr/>
            <span>OU</span>
        </div>
        
        <button className='btn-google'><img src={icon_google} alt='ícone do google'/> Google</button>
        <button className='btn-github'><img src={icon_github} alt='ícone do github'/>Github</button>
    </div>
  )
}