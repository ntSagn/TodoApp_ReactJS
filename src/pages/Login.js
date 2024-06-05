import Header from "../components/Header";
import { useEffect, useState } from 'react';
import '../css/login.css';
const Login = () => {
    // const [user, setUser] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     repeatPassword: ''
    // });

    const handleLogin = (event) => {
        event.preventDefault();
        let form = event.target;
        let formData = new FormData(form);
        let formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);

        // Lấy dữ liệu người dùng từ localStorage
        const storedData = localStorage.getItem('usersData');

        // Chuyển đổi dữ liệu từ chuỗi JSON sang đối tượng JavaScript
        const storedUsers = JSON.parse(storedData);

        // Duyệt qua từng người dùng trong storedUsers
        for (let email in storedUsers) {
            let storedUser = storedUsers[email];

            // So sánh dữ liệu người dùng nhập vào với dữ liệu đã lưu trong localStorage
            if (storedUser && storedUser.email === formDataObj.email && storedUser.password === formDataObj.password) {
                alert('Login successful');
                window.location.href = '/home';
                return;
            }
        }
        alert('Invalid email or password');
    }

    const handleSignup = (event) => {
        event.preventDefault();
        let form = event.target;
        let formData = new FormData(form);
        let formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);
        if (formDataObj.password !== formDataObj.repeatPassword) {
            alert('Password and Repeat Password must be the same!');
            return;
        }
        else {
            let newUser = {
                name: formDataObj.name,
                email: formDataObj.email,
                password: formDataObj.password
            }
            // Lấy dữ liệu người dùng hiện có từ localStorage
            let usersData = JSON.parse(localStorage.getItem('usersData')) || {};
            console.log(usersData);
            // Thêm người dùng mới vào đối tượng usersData
            usersData[newUser.email] = newUser;

            // Lưu đối tượng usersData vào localStorage
            localStorage.setItem('usersData', JSON.stringify(usersData));

            alert('Sign up successfully!');
            form.reset();
        }
    };
    useEffect(() => {
        document.querySelector('.toggle').addEventListener('click', function () {
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
                            <form className="flip-card__form" onSubmit={handleLogin}>
                                <input className="flip-card__input" name="email" placeholder="Email" type="email" />
                                <input className="flip-card__input" name="password" placeholder="Password" type="password" />
                                <button className="flip-card__btn">Let`s go!</button>
                            </form>
                        </div>
                        <div className="flip-card__back">
                            <div className="title">Sign up</div>
                            <form className="flip-card__form" onSubmit={handleSignup}>
                                <input className="flip-card__input" placeholder="Name" name="name" type="name" />
                                <input className="flip-card__input" name="email" placeholder="Email" type="email" />
                                <input className="flip-card__input" name="password" placeholder="Password" type="password" />
                                <input className="flip-card__input" name="repeatPassword" placeholder="Repeat Password" type="password" />
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