
import React from 'react'
import '../index.css'
const logoCarrera = require('../assets/logo.png')

export default function Login() {
    return (
        <div className="login-container">
            <div class="login-info-container">
                <h1 class="title">¡Bienvenido!</h1>
                <form class="inputs-container">
                    <input class="input" type="text" placeholder="Usuario administrador" />
                    <input class="input" type="text" placeholder="Contraseña" />
                    <p>¿Olvídaste tu contraseña? <span class="span">Haz click aquí</span></p>
                    <button class="btn">Iniciar sesión</button>
                </form>
                <p>¿No estás registrado?</p>
                <button class="btn-invitado">Ingresar como invitado</button>
                <div class="social-login">
                    
                    <div class="social-login-element">
                        <span>Iniciar sesión como alumno de CC</span>
                        
                    </div>

                </div>

            </div>
            <ul>
                <li>
                    <a href="#">
                        <img class="img-container" src="https://didcom.com.mx/wp-content/uploads/2022/05/Didcom-y-Universidad-de-Sonora-celebran-Convenio-de-Colaboracion-para-impulsar-la-Investigacion-de-Macrodatos-a-traves-de-Data-Science-y-Machine-Learning.jpg" />
                    </a>
                    <div class="image_title">
                        <a href="#">Didcom y Universidad de Sonora celebran Convenio de Colaboración para impulsar la Investigación de Macrodatos a través de Data Science y Machine Learning</a>
                    </div>
                </li>
            </ul>
            {/* <img class="image-container" src="https://didcom.com.mx/wp-content/uploads/2022/05/Didcom-y-Universidad-de-Sonora-celebran-Convenio-de-Colaboracion-para-impulsar-la-Investigacion-de-Macrodatos-a-traves-de-Data-Science-y-Machine-Learning.jpg" alt="" /> */}



        </div>
    )
}