import { Link, useNavigate } from 'react-router-dom'

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import { useAppDispatch } from '../hooks/use-app-dispatch.hook';
// import { useAppSelector } from '../hooks/use-app-selector.hook';
import { userActions } from '../store/actions';

import { SignupBody } from '../common/user-types/user-type';

const Signup = () => {

    const navigate = useNavigate()
    // const user = useAppSelector((state)=> state.user.user)
    const dispatch = useAppDispatch();

    const handleSignupSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const data = new FormData(form);

        const formDataObject: { [key: string]: FormDataEntryValue } = {};
        data.forEach((value, key) => {
            formDataObject[key] = value;
        });

        const userData: SignupBody = {
            fullName: formDataObject["full-name"].toString(),
            email: formDataObject.email.toString(),
            password: formDataObject.password.toString()
        }

        const result = await dispatch(userActions.userSignup(userData))
        if (result.payload) {
            navigate("/")
        }


        form.reset()

    };

    return <div className="layout__container">
        <Header auth={true} />
        <main className="sign-up-page">
            <h1 className="visually-hidden">Travel App</h1>
            <form onSubmit={handleSignupSubmit} className="sign-up-form" autoComplete="off">
                <h2 className="sign-up-form__title">Sign Up</h2>
                <label className="input">
                    <span className="input__heading">Full name</span>
                    <input
                        data-test-id="auth-full-name"
                        name="full-name"
                        type="text"
                        required
                    />
                </label>
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
                    Sign Up
                </button>
            </form>
            <span>
                Already have an account?&nbsp;
                <Link
                    data-test-id="auth-sign-in-link"
                    to="/sign-in"
                    className="sign-up-form__link"
                >
                    Sign In
                </Link>
            </span>
        </main>
        <Footer />
    </div>

}

export { Signup }