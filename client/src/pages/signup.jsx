import { useEffect, useState } from 'react'
import BtnGoogleGithub from '../components/BtnGoogleGithub'
import Axios from 'axios'
import { useSession } from "next-auth/react"
import Header from '@/components/Header'
const host_server = process.env.NEXT_PUBLIC_HOST_SERVER

export default function SignIn() {
	const {data: session} = useSession()

	useEffect(() => {
		selectInput()

		if (typeof(session?.user?.name) !== 'undefined' && session?.user?.name !== null) {
			f_sendData(true)
		}
	})	

	const selectInput = () => {
		const inputs = document.querySelectorAll('.form .ctr-input input')

		for (let input of inputs) {
			input.addEventListener('click', (e) => {
				const label = e.target.parentElement.childNodes[1]
				label.classList.add('click')

				e.target.addEventListener('blur', (e) => {
					if (e.target.value.length === 0) {
						const label = e.target.parentElement.childNodes[1]
						label.classList.remove('click')
					}
				})
			})
		}
	}

	const [form, setForm] = useState({
		nome: '',
		email: '',
		senha: '',
	})

	const f_handleInputs = (e) => {
		setForm({...form, [e.name]: e.value})
	}

	const validate = () => {
        let isValidate = true

        setForm({
            email: form.email.trim(),
            senha: form.senha.trim()
        })

        const regexSenha = new RegExp(
            /^[a-zA-Z0-9-@]$/
        )

		const regexEmail = new RegExp(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        )

        if (regexEmail.test(form.email)) {
            openModal(`Por favor não use careceres especiais`)
            isValidate = false
        }

        if (regexSenha.test(form.senha)) {
            openModal(`Por favor não use careceres especiais`)
            isValidate = false
        }

        if (form.email === '') {
            openModal(`Por favor insira um e-mail`)
            isValidate = false
        }

        if (form.senha.length < 8) {
            openModal(`Por favor crie uma senha com pelo menos 8 dígitos`)
            isValidate = false
        }

        return isValidate
    }

	const f_sendData = (provedor) => {
		if (provedor === true) {
			Axios.post(`${host_server}/signup`, {
				email: session?.user?.email,
				nome: session?.user?.name,
				senha: session?.user?.name,
			})	
			console.log(session.user)
		} else {
			if (validate()) {
				Axios.post(` ${host_server}/signup`, {
					email: form.email,
					nome: form.senha,
					senha: form.senha,
				})
				console.log(form)
			}
		}
	}

	const openModal = (msg) => {
        const ctrModal = document.querySelector('.ctr-modal')
		const blur = document.querySelector('.blur')

		blur.classList.remove('none')

        ctrModal.classList.remove('close')
        document.querySelector('.modal p').innerHTML = msg

        document.addEventListener('keydown', (key) => {
            key = key.key
            
            if (key === 'Enter' || key === 'Escape') {
                closeModal()
            }
        })
    }

    const closeModal = () => {
        document.querySelector('.ctr-modal').classList.add('close')
        document.querySelector('.ctr-modal button').focus()

		const blur = document.querySelector('.blur')

		blur.classList.add('none')
    }

  return (
	<>
        <Header></Header>
		<main>
			<div className='signIn_signUp'>
				<h1>Sign-up</h1>

				<div className="ctr-modal close">
					<div className="modal">
						<div className="ctr-notice">

						<h3 className="notice">Aviso:</h3>
							<p></p>
						</div>

						<button className="close button-small" id="buttonModalClose" onClick={() => {closeModal()}}>Fechar</button>
					</div>
				</div>
				<div className="blur none"></div>


				<div className='form'>
					<div className='ctr-inputs'>
						<div className='ctr-input' >
							<input type='text' id='nome' name='nome' value={form.nome} onChange={(e) => {f_handleInputs(e.target)}}/>
							<label htmlFor='nome'>Digite seu nome:</label>
						</div>

						<div className='ctr-input'>
							<input type='text' id='e-mail' name='email' value={form.email} onChange={(e) => {f_handleInputs(e.target)}}/>
							<label htmlFor='e-mail'>Digite seu E-mail:</label>
						</div>

						<div className='ctr-input' >
							<input type='password' id='senha' name='senha' value={form.senha} onChange={(e) => {f_handleInputs(e.target)}}/>
							<label htmlFor='senha'>Digite sua senha:</label>
						</div>
					</div>

					<button onClick={() => {f_sendData()}} className='btn-send'>Criar conta</button>

					<BtnGoogleGithub/>
				</div>
			</div>
		</main>
	</>
  )
}