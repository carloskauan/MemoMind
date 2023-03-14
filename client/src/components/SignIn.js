import react, { useState } from 'react'
import BtnGoogleGithub from './BtnGoogleGithub'
import Axios from 'axios'
const host_server = process.env.REACT_APP_HOST_SERVER

export default function SignIn() {
	const [form, setForm] = useState({
		email: '',
		senha: '',
	})

	const f_handleInputs = (e) => {
		setForm({...form, [e.name]: e.value})
	}

	const validate = () => {
        let isValidate = true

        setForm({
            userName: form.email.trim(),
            password: form.senha.trim()
        })

        const regexText = new RegExp(
            /^[a-zA-Z0-9-@]$/
        )

        if (regexText.test(form.email)) {
            openModal(`Por favor não use careceres especiais no campo`)
            isValidate = false
        }

        if (regexText.test(form.senha)) {
            openModal(`Por favor não use careceres especiais no campo`)
            isValidate = false
        }

        if (form.email === '') {
            openModal(`Por favor preencha o campo YserName`)
            isValidate = false
        }

        if (form.senha.length < 8) {
            openModal(`Por favor Crie uma senha com pelo menos 8 dígitos`)
            isValidate = false
        }

        return isValidate
    }

	const f_sendData = () => {
		if (validate()) {
			Axios.post(` ${host_server}/signIn`, {
				email: form.email,
				senha: form.senha,
			})
			console.log(form)
		}
	}

	const openModal = (msg) => {
        const ctrModal = document.querySelector('.ctr-modal')

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
    }

  return (
	<div className='signIn_signUp'>
		{console.log(host_server)}
		<h1>Sign-in</h1>

		<div className='form'>
			<div className='ctr-inputs'>
				<div className='ctr-input'>
					<input type='text' id='e-mail' name='email' value={form.email} onChange={(e) => {f_handleInputs(e.target)}}/>
					<label htmlFor='e-mail'>Digite seu E-mail:</label>
				</div>

				<div className='ctr-input' >
					<input type='password' id='senha' name='senha' value={form.senha} onChange={(e) => {f_handleInputs(e.target)}}/>
					<label htmlFor='senha'>Digite sua senha:</label>
				</div>
			</div>

			<button onClick={() => {f_sendData()}} className='btn-send'>Entrar</button>

			<BtnGoogleGithub/>
		</div>

	</div>
  )
}