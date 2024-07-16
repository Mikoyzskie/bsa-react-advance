enum Methods {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
}

enum Endpoints {
  SIGN_UP = "/auth/sign-up",
  SIGN_IN = "/auth/sign-in",
  USER = "/auth/authenticated-user",
  BOOKINGS = "/bookings",
  TRIPS = "/trips",
}

enum Actions {
  SIGN_UP = "user/sign-up",
  SIGN_IN = "user/sign-in",
  SIGN_OUT = "user/sign-out",
  LOAD_USER = "user/load-user",
  LOAD_TRIPS = "trip/load-trips",
  LOAD_TRIP = "trip/load-trip",
  ADD_BOOKINGS = "bookings/add-bookings",
  DELETE_BOOKINGS = "bookings/delete-booking",
  LOAD_BOOKINGS = "bookings/load-bookings",
}

export { Methods, Endpoints, Actions };
