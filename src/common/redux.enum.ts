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
  SIGN_UP = "sign/up",
}

export { Methods, Endpoints, Actions };
