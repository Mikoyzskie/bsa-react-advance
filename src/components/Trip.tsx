
import { useParams, useNavigate } from "react-router-dom"
import { ChangeEvent, useEffect, useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import { useAppDispatch } from '../hooks/use-app-dispatch.hook';
import { useAppSelector } from '../hooks/use-app-selector.hook';
import { bookingsAction, tripActions } from "../store/actions";
import { toast } from "react-toastify";

const Trip = (): JSX.Element => {

    const navigate = useNavigate();
    const { tripId } = useParams()
    const dispatch = useAppDispatch();
    const trip = useAppSelector((state) => state.trip.trip)

    const [isHidden, setIsHidden] = useState<boolean>(true)
    const [price, setPrice] = useState<number>(0)

    useEffect(() => {
        if (tripId) {
            dispatch(tripActions.loadTrip(tripId))
        } else {
            navigate("/")
            toast("Trip Not found")
        }
    }, [dispatch, navigate, tripId])



    const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPrice(() => Number(event.target.value) * (trip?.price || 1))
    }

    const handleTripSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const data = new FormData(form);

        const formDataObject: { [key: string]: FormDataEntryValue } = {};
        data.forEach((value, key) => {
            formDataObject[key] = value;
        });


        const booking = {
            tripId: trip!.id,
            guests: Number(formDataObject.guests),
            date: formDataObject.date.toString()
        }

        dispatch(bookingsAction.createBooking(booking))
        setIsHidden(true)
    }

    return <div className="layout__container">
        <Header auth={false} />
        <main className="trip-page">

            <h1 className="visually-hidden">Travel App</h1>
            <div className="trip">
                {
                    trip && <img
                        data-test-id="trip-details-image"
                        src={trip.image}
                        className="trip__img"
                        alt="trip photo"
                    />
                }
                <div className="trip__content">
                    <div className="trip-info">
                        <h3 data-test-id="trip-details-title" className="trip-info__title">
                            {
                                trip && trip.title
                            }
                        </h3>
                        <div className="trip-info__content">
                            <span
                                data-test-id="trip-details-duration"
                                className="trip-info__duration"
                            >
                                <strong>{trip && trip.duration}</strong> days
                            </span>
                            <span data-test-id="trip-details-level" className="trip-info__level">
                                {trip && trip.level}
                            </span>
                        </div>
                    </div>
                    <div
                        data-test-id="trip-details-description"
                        className="trip__description"
                    >
                        {trip && trip.description}
                    </div>
                    <div className="trip-price">
                        <span>Price</span>
                        <strong
                            data-test-id="trip-details-price-value"
                            className="trip-price__value"
                        >
                            ${trip && trip.price}
                        </strong>
                    </div>
                    <button
                        data-test-id="trip-details-button"
                        className="trip__button button"
                        onClick={() => setIsHidden(false)}
                    >
                        Book a trip
                    </button>
                </div>
            </div>
        </main>
        <div hidden={isHidden}>
            <div className="modal">
                <div data-test-id="book-trip-popup" className="book-trip-popup">
                    <button
                        data-test-id="book-trip-popup-close"
                        className="book-trip-popup__close"
                        onClick={() => setIsHidden(true)}
                    >
                        ×
                    </button>
                    <form onSubmit={handleTripSubmit} className="book-trip-popup__form" autoComplete="off">
                        <div className="trip-info">
                            <h3 data-test-id="book-trip-popup-title" className="trip-info__title">
                                {trip && trip.title}
                            </h3>
                            <div className="trip-info__content">
                                <span
                                    data-test-id="book-trip-popup-duration"
                                    className="trip-info__duration"
                                >
                                    <strong>{trip && trip.duration}</strong> days
                                </span>
                                <span
                                    data-test-id="book-trip-popup-level"
                                    className="trip-info__level"
                                >
                                    {trip && trip.level}
                                </span>
                            </div>
                        </div>
                        <label className="input">
                            <span className="input__heading">Date</span>
                            <input
                                data-test-id="book-trip-popup-date"
                                name="date"
                                type="date"
                                required
                            />
                        </label>
                        <label className="input">
                            <span className="input__heading">Number of guests</span>
                            <input
                                data-test-id="book-trip-popup-guests"
                                name="guests"
                                type="number"
                                min={1}
                                max={10}
                                defaultValue={1}
                                required
                                onChange={handlePriceChange}
                            />
                        </label>
                        <span className="book-trip-popup__total">
                            Total:
                            <output
                                data-test-id="book-trip-popup-total-value"
                                className="book-trip-popup__total-value"
                            >
                                ${
                                    price ? price : trip?.price
                                }
                            </output>
                        </span>
                        <button
                            data-test-id="book-trip-popup-submit"
                            className="button"
                            type="submit"
                        >
                            Book a trip
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export { Trip }