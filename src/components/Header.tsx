import { Link } from 'react-router-dom'
import '../index.css'

// import { useAppDispatch } from '../hooks/use-app-dispatch.hook';
import { useAppSelector } from '../hooks/use-app-selector.hook';
// import { useEffect } from 'react';

const Header = ({ auth }: { auth: boolean }): JSX.Element => {

    const user = useAppSelector((state) => state.user.user)

    console.log(user);

    // const dispatch = useAppDispatch()

    // useEffect(()=>{

    // },[])


    return <header className="header">
        <div className="header__inner">
            <Link data-test-id="header-logo" to="/" className="header__logo">
                Travel App
            </Link>
            {
                !auth &&
                <nav data-test-id="header-nav" className="header__nav">
                    <ul className="nav-header__list">
                        <li className="nav-header__item" title="Bookings">
                            <Link
                                data-test-id="header-bookings-link"
                                to="/bookings"
                                className="nav-header__inner"
                            >
                                <span className="visually-hidden">Bookings</span>
                                <img src="/assets/images/briefcase.svg" alt="bookings" />
                            </Link>
                        </li>
                        <li className="nav-header__item" title="Profile">
                            <div
                                data-test-id="header-profile-nav"
                                className="nav-header__inner profile-nav"
                                tabIndex={0}
                            >
                                <span className="visually-hidden">Profile</span>
                                <img src="/assets/images/user.svg" alt="profile" />
                                <ul
                                    data-test-id="header-profile-nav-list"
                                    className="profile-nav__list"
                                >
                                    <li
                                        data-test-id="header-profile-nav-username"
                                        className="profile-nav__item"
                                    >
                                        {
                                            user && <span>{`${user.user.fullName}`}</span>
                                        }
                                    </li>
                                    <li className="profile-nav__item">
                                        <Link

                                            data-test-id="header-profile-nav-sign-out"
                                            to="/sign-in"
                                            className="profile-nav__sign-out button"
                                        >
                                            Sign Out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            }
        </div>
    </header>

}

export { Header }