import { useEffect, useState, ChangeEvent } from "react"
import { Link } from "react-router-dom"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import { useNavigate } from "react-router-dom"
import { useAppDispatch } from '../hooks/use-app-dispatch.hook';
import { tripsActions } from "../store/actions"
import { useAppSelector } from '../hooks/use-app-selector.hook';
import { Trip } from "../common/trips-types/trips-type";


const Main = (): JSX.Element => {

    const trips = useAppSelector((state) => state.trips.trips)
    const dispatch = useAppDispatch()

    const [filteredTrips, setFilteredTrips] = useState(trips)
    const [details, setDetails] = useState({ duration: "", level: "", search: "" })


    const navigate = useNavigate()
    const token = localStorage.getItem('TOKEN')

    useEffect(() => {
        if (token) {
            dispatch(tripsActions.loadTrips())
        } else {
            navigate("/sign-in")
        }
    }, [])



    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target
        setDetails((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setDetails((prev) => {
            return { ...prev, [name]: value }
        })
    }



    useEffect(() => {

        let data: Trip[] = trips || []

        if (details.duration) {
            if (details.duration === "0_x_5") {
                data = data.filter((trip: Trip) => trip.duration < 5)
            } else if (details.duration === "5_x_10") {
                data = data.filter((trip: Trip) => trip.duration > 4 && trip.duration < 10)
            } else if (details.duration === "10") {
                data = data.filter((trip: Trip) => trip.duration >= 10)
            }
        }

        if (details.level) {
            data = data.filter((trip: Trip) => trip.level === details.level)
        }

        const filterByWord = (array: Trip[], word: string) => {
            const regex = new RegExp(word, 'i'); // Create a case-insensitive regex dynamically
            return array.filter(str => regex.test(str.title));
        };

        if (details.search) {
            data = filterByWord(data, details.search)
        }
        setFilteredTrips(data)

    }, [details, trips])

    return <div className="layout__container">
        <Header auth={false} />
        <main>
            <h1 className="visually-hidden">Travel App</h1>
            <section className="trips-filter">
                <h2 className="visually-hidden">Trips filter</h2>
                <form className="trips-filter__form" autoComplete="off">
                    <label className="trips-filter__search input">
                        <span className="visually-hidden">Search by name</span>
                        <input
                            data-test-id="filter-search"
                            name="search"
                            type="search"
                            placeholder="search by title"
                            onChange={handleInputChange}
                        />
                    </label>
                    <label className="select">
                        <span className="visually-hidden">Search by duration</span>
                        <select data-test-id="filter-duration" name="duration" onChange={handleChange}>
                            <option value="">duration</option>
                            <option value="0_x_5">&lt; 5 days</option>
                            <option value="5_x_10">&lt; 10 days</option>
                            <option value={10}>≥ 10 days</option>
                        </select>
                    </label>
                    <label className="select">
                        <span className="visually-hidden">Search by level</span>
                        <select data-test-id="filter-level" name="level" onChange={handleChange}>
                            <option value="">level</option>
                            <option value="easy">easy</option>
                            <option value="moderate">moderate</option>
                            <option value="difficult">difficult</option>
                        </select>
                    </label>
                </form>
            </section>
            <section className="trips">
                <h2 className="visually-hidden">Trips List</h2>
                <ul className="trip-list">
                    {
                        filteredTrips?.map((trip: Trip, index: number) => {
                            return (
                                <li data-test-id="trip-card" className="trip-card" key={index}>
                                    <img
                                        data-test-id="trip-card-image"
                                        src={trip.image}
                                        alt="trip photo"
                                        style={{ height: "100%" }}
                                    />
                                    <div className="trip-card__content">
                                        <div className="trip-info">
                                            <h3 data-test-id="trip-card-title" className="trip-info__title">
                                                {trip.title}
                                            </h3>
                                            <div className="trip-info__content">
                                                <span
                                                    data-test-id="trip-card-duration"
                                                    className="trip-info__duration"
                                                >
                                                    <strong>{trip.duration}</strong> days
                                                </span>
                                                <span data-test-id="trip-card-level" className="trip-info__level">
                                                    {trip.level}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="trip-price">
                                            <span>Price</span>
                                            <strong
                                                data-test-id="trip-card-price-value"
                                                className="trip-price__value"
                                            >
                                                ${trip.price}
                                            </strong>
                                        </div>
                                    </div>


                                    <Link to={`/trip/${trip.id}`} data-test-id="trip-card-link" className="button">
                                        Discover a trip
                                    </Link>



                                </li>
                            )
                        })
                    }


                </ul>
            </section>
        </main>
        <Footer />
    </div>
}

export { Main }