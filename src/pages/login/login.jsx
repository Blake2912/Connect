import { React } from 'react'
import { LoginComponent } from '../../components/LoginComponent/login.component'
import { Navigation } from '../../components/Navigation/Navigation'

export const LoginPage = () => {
    return (
        <div className="loginpage">
            <Navigation/>
            <LoginComponent/>
        </div>
    )
}