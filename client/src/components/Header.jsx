import react from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    // const router = useRouter()

    if (true) {
        return (
            <header className='logoout'>
                <Image
                    className='logo'
                    src='../assets/image/logo.svg' 
                    alt='ícone do google'
                    width='100'
                    height='100'
                />

                <nav>                
                    <Link href='/signin'>Sign-in</Link>
                    <Link href='/signup'>Sign-up</Link>
                </nav>
            </header>
        )
    } else {
        return (
            <header>
                <h1>opa</h1>
            </header>
        )
    }
}