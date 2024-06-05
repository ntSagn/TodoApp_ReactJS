import Header from "../components/Header";
import { useEffect } from 'react';
import '../css/login.css';
const Login = () => {
    useEffect(() => {
        document.querySelector('.toggle').addEventListener('click', function() {
          document.querySelector('.flip-card__inner').classList.toggle('flipped');
        });
      }, []);
    return (
        <>
            <Header />
            <div className="wrapper">
                <div className="card-switch">
                    <label className="switch">
                        <input type="checkbox" className="toggle" />
                        <span className="slider"></span>
                        <span className="card-side"></span>
                    </label>
                    <div className="flip-card__inner">
                        <div className="flip-card__front">
                            <div className="title">Log in</div>
                            <form className="flip-card__form" action="">
                                <input className="flip-card__input" name="email" placeholder="Email" type="email" />
                                <input className="flip-card__input" name="password" placeholder="Password" type="password" />
                                <button className="flip-card__btn">Let`s go!</button>
                            </form>
                        </div>
                        <div className="flip-card__back">
                            <div className="title">Sign up</div>
                            <form className="flip-card__form" action="">
                                <input className="flip-card__input" placeholder="Name" type="name" />
                                <input className="flip-card__input" name="email" placeholder="Email" type="email" />
                                <input className="flip-card__input" name="password" placeholder="Password" type="password" />
                                <input className="flip-card__input" name="repeat-password" placeholder="Repeat Password" type="password" />
                                <button className="flip-card__btn">Confirm!</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <script src="../js/main.js"></script>
        </>
    )
    
}
export default Login;