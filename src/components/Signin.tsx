

import { Link, useNavigate } from "react-router-dom";

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import { useAppDispatch } from '../hooks/use-app-dispatch.hook';
// import { useAppSelector } from '../hooks/use-app-selector.hook';

import { userActions } from '../store/actions';

const Signin = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();


    const handleSigninSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const data = new FormData(form);

        const formDataObject: { [key: string]: FormDataEntryValue } = {};
        data.forEach((value, key) => {
            formDataObject[key] = value;
        });

        const userData = {
            email: formDataObject.email.toString(),
            password: formDataObject.password.toString()
        }

        const result = await dispatch(userActions.userSignin(userData))
        if (result.payload) {
            navigate("/")
        }
    };

    return <div className="layout__container">
        <Header auth={true} />
        <main className="sign-in-page">
            <h1 className="visually-hidden">Travel App</h1>
            <form onSubmit={handleSigninSubmit} className="sign-in-form" autoComplete="off">
                <h2 className="sign-in-form__title">Sign In</h2>
                <label className="input">
                    <span className="input__heading">Email</span>
                    <input data-test-id="auth-email" name="email" type="email" required />
                </label>
                <label className="input">
                    <span className="input__heading">Password</span>
                    <input
                        data-test-id="auth-password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        minLength={3}
                        maxLength={20}
                    />
                </label>
                <button data-test-id="auth-submit" className="button" type="submit">
                    Sign In
                </button>
            </form>
            <span>
                Don't have an account?&nbsp;
                <Link
                    data-test-id="auth-sign-up-link"
                    to="/sign-up"
                    className="sign-in-form__link"
                >
                    Sign Up
                </Link>
            </span>
        </main>
        <Footer />
    </div>

}

export { Signin }