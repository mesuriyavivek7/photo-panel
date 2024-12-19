import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { validateUser } from "./redux/actions/authActions";
import { useSelector, useDispatch } from 'react-redux';

//Importing componets
import Login from "./pages/Login";
import Loading from "./components/Loading";

//Import Admin Components
import Adminpage from "./pages/Adminpage";


function App() {

    const {user,loading} = useSelector((state)=>state.auth)

    console.log('user---->',user)
    console.log('loading----->',loading)

    const dispatch= useDispatch()

    useEffect(()=>{
       validateUser(dispatch)
    },[dispatch])

    if(loading){
       return <Loading></Loading>
    }

    const AppRouter = createBrowserRouter([
       {
        path: "/",
        element:
          !user && !loading ? (
            <Login />
          ) : user?.user_type ? (
            <Navigate to={`/${user.user_type}/dashboard`} />
          ) : (
            <Loading />
          ),
       },
       {
        path:'/client',
        element: <Adminpage></Adminpage>,
        children: [
          {
            path:'dashboard',
            element: <Adminpage></Adminpage>
          },
          {
            path:'uploads',
            element:<Adminpage></Adminpage>
          },
        ]
       },
       {
        path:'/developer',
        element: <Adminpage></Adminpage>,
        children: [
          {
            path:'dashboard',
            element: <Adminpage></Adminpage>
          }
        ]
       },
       {
        path:"/admin",
        element: <Adminpage></Adminpage>,
        children: [
          {
            path:'dashboard',
            element:<Adminpage></Adminpage>
          }
        ]
       }
    ])
    return (
      <div className="max-w-[100vw] max-h-screen">
        <RouterProvider router={AppRouter}></RouterProvider>
      </div>
    )

}

export default App;
