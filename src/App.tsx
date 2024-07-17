
import './App.css'


import { AppPath } from './common/app-path.enum'
import { RouterProvider } from './components/router-provider'
import { Bookings } from './components/Bookings'
import { Main } from './components/Main'
import { Signin } from './components/Signin'
import { Signup } from './components/Signup'
import { Trip } from './components/Trip'



const App = (): JSX.Element => {

  return (
    <RouterProvider routes={[
      {
        path: AppPath.ROOT,
        children: [
          {
            path: AppPath.ROOT,
            element: <Main />
          },
          {
            path: AppPath.BOOKINGS,
            element: <Bookings />
          },
          {
            path: AppPath.SIGNIN,
            element: <Signin />
          },
          {
            path: AppPath.SIGNUP,
            element: <Signup />
          },
          {
            path: AppPath.TRIP_$ID,
            element: <Trip />
          },
          {
            path: AppPath.ANY,
            element: <h1>Not Found</h1>
          }
        ]
      }
    ]} />



  )
}

export default App
