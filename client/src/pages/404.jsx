import Link from 'next/link'
import react from 'react'

export default function NotFound() {
  return (
    <div className='notFound'>
        <div className='content'>        
            <h2>404 Page not found</h2>
            <span>parece que você tentou acessar uma url que não existe</span>
            <Link className='button-small' href='/'>Voltar</Link>
        </div>
    </div>
  )
}