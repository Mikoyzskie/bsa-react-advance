import { useEffect } from "react";

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../hooks/use-app-dispatch.hook";
import { useAppSelector } from "../hooks/use-app-selector.hook";
import { bookingsAction } from "../store/actions";
import { Booking } from "../common/bookings-types/bookings-type";
import { toast } from "react-toastify";



const Bookings = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const bookings = useAppSelector((state) => state.bookings.bookings)

    const token = localStorage.getItem("TOKEN")
    useEffect(() => {
        if (!token) {
            navigate('/sign-in')
        }
    }, [navigate, token])


    useEffect(() => {
        if (token) {
            dispatch(bookingsAction.loadBookings())
        }
    }, [dispatch, token]);


    function formatDate(date: Date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }



    const handleOnclick = (id: string) => {

        dispatch(bookingsAction.deleteBooking(id))
        toast("Booking cancelled")

    }


    return <div className="layout__container">
        <Header auth={false} />
        <main className="bookings-page">
            <h1 className="visually-hidden">Travel App</h1>
            <ul className="bookings__list">
                {
                    bookings?.length === 0 ? <span>No Bookings</span>
                        : bookings?.map((book: Booking) => {

                            // const formatDate = (date: Date) => {
                            //     return date.toLocaleDateString('en-GB'); // 'en-GB' specifies the format dd/mm/yyyy
                            // };
                            const date = new Date(book.date)
                            const formattedDate = formatDate(date);

                            return (
                                <li data-test-id="booking" className="booking" key={book.id}>
                                    <h3 data-test-id="booking-title" className="booking__title">
                                        {book.trip.title}
                                    </h3>
                                    <span data-test-id="booking-guests" className="booking__guests">
                                        {book.guests} guests
                                    </span>
                                    <span data-test-id="booking-date" className="booking__date">
                                        {formattedDate}
                                    </span>
                                    <span data-test-id="booking-total" className="booking__total">
                                        ${book.trip.price}
                                    </span>
                                    <button
                                        data-test-id="booking-cancel"
                                        className="booking__cancel"
                                        title="Cancel booking"
                                        id={book.id}
                                        onClick={() => handleOnclick(book.id)}
                                    >
                                        <span className="visually-hidden">Cancel booking</span>×
                                    </button>
                                </li>
                            )
                        })

                }


            </ul>
        </main>
        <Footer />
    </div>

}

export { Bookings }