import { useContext, useState } from 'react'
import { Grid } from '../../Components/Grid/Grid'
import { Input } from '../../Components/Input/Input'
import { Submit } from '../../Components/Submit/Submit'
import { AuthContext } from '../../context/AuthContext'
import style from './Login.module.scss'
import { Title } from '../../Components/Title/Title'


export function Login() {
  const [error, setError] = useState<string | null>(null)
  const { userData, setUserData } = useContext(AuthContext)

  function postLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    //Gem input values
    const form = e.currentTarget
    const userName = (form.brugernavn as HTMLInputElement).value
    const passWord = (form.password as HTMLInputElement).value
    //Opret body (URLSearchParamms)
    const body = new URLSearchParams()

    //Append input values til body
    body.append('brugernavn', userName)
    body.append('password', passWord)

    const url = 'http://localhost:3000/login'

    //POST body til backend server og håndter response (success/error)
    fetch(url, { method: 'POST', body: body })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data)
        setError('')
      })
      .catch((error) => {
        console.error('Error loggin in: ', error);
        setError('Der opstod en fejl - prøv igen')

      })

  }

  console.log('UserData: ', userData);

  return (
    <>
      {userData && (
        <b>className={style.welcome}
        Velkommen {userData.user.firstname} {userData.user.lastname}</b>
      )}
      {error && <b className={style.error}>{error}</b>}
       <Title text={'Login'} />
      
      <div className={style.formContainer}>
      <form  className={style.contactForm} onSubmit={(e) => postLogin(e)}>
        <Grid gtr={'1fr 1fr 1fr'} gap={8}>
          <Input type="text" name="brugernavn" label="Brugernavn"></Input>
          <Input type="password" name="password" label="Password"></Input>
          <Submit className={style.button} value="Login"></Submit>
        </Grid>
      </form>
      </div>
    </>
  )
}