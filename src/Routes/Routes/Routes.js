import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Laout/Main/Main';
import Appointment from '../../Pages/Appointments/Appointment/Appointment';
import DeshBoard from '../../Pages/DeshBoard/DeshBoard/DeshBoard';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },

      {
        path: '/appointment',
        element: <Appointment></Appointment>
      },


    ]
  },
  
  {
    path: '/dashboard',
    element: <DeshBoard></DeshBoard>
  }
])

export default router;

