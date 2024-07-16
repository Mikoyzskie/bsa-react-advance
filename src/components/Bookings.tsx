import { useEffect } from "react";

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import { useNavigate } from "react-router-dom"
import { AppDispatch } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { loadAllBookings } from "../store/bookings/actions";
import { sortedBookings, selectLoading } from "../store/bookings/common";

import { Booking } from "../common/bookings/types";

export interface Trip {
    title: string;
    duration: number;
    price: number;
}

interface IBooks {
    id: string,
    title: string,
    guests: number,
    date: string,
    price: number
}

const Bookings = ({ books, setBook }: { books: IBooks[], setBook: React.Dispatch<React.SetStateAction<IBooks[]>> }) => {

    const navigate = useNavigate()


    const token = localStorage.getItem("TOKEN")
    if (!token) {
        navigate('/sign-in')
    }

    const dispatch = useDispatch<AppDispatch>();
    const bookings = useSelector(sortedBookings);
    const loading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(loadAllBookings());
    }, [dispatch]);


    function formatDate(date: Date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }



    const handleOnclick = (id: string) => {
        const filteredBook = books.filter(book => book.id !== id)
        setBook(filteredBook.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()))
    }


    return <div className="layout__container">
        <Header auth={false} />
        <main className="bookings-page">
            <h1 className="visually-hidden">Travel App</h1>
            <ul className="bookings__list">
                {
                    bookings.length === 0 ? <span>No Bookings</span>
                        : (
                            loading ? <span>Loading...</span>
                                : bookings.map((book: Booking) => {

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
                        )
                }


            </ul>
        </main>
        <Footer />
    </div>

}

export { Bookings }