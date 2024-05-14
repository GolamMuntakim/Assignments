import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Components/Main";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Assignments from "../Components/Assignments";
import ViewAssignmengts from "../Components/ViewAssignmengts";
import TakeAssignments from "../Components/TakeAssignments";
import CreateAssignments from "../Components/CreateAssignments";
import ErrorPage from "../Components/ErrorPage";
import UpdateAssignment from "../Components/UpdateAssignment";
import PrivateRoute from "../Components/PrivateRoute";
import MySubmittedAssignments from "../Components/MySubmittedAssignments";
import PendingAssignments from "../Components/PendingAssignments";
import Marks from "../Components/Marks";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
        path:'/',
        element:<Home></Home>,
       
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/assignmentsPage',
        element:<Assignments></Assignments>,
        // loader:() => fetch(),
      },
      {
        path:'/viewassignmengts/:id',
        element:<ViewAssignmengts></ViewAssignmengts>,
        loader:({params})=> fetch(`${import.meta.env.VITE_API_URL}/viewassignmengts/${params.id}`)
      },
      {
        path:'/takeassignments/:id',
        element:<TakeAssignments></TakeAssignments>,
        loader:({params})=> fetch(`${import.meta.env.VITE_API_URL}/viewassignmengts/${params.id}`)
      },
      {
        path:'/createassignments',
        element:<PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>
      },
      {
        path:'/updateassignments/:id',
        element:<UpdateAssignment></UpdateAssignment>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/viewassignmengts/${params.id}`)
      },
      {
        path:'/mysubmittedassignments',
        element:<MySubmittedAssignments></MySubmittedAssignments>
      },
      {
        path:'/pendingassignments',
        element:<PrivateRoute><PendingAssignments></PendingAssignments></PrivateRoute>
      },
      {
        path : '/marks/:id',
        element:<Marks></Marks>,
        loader:({params})=> fetch(`${import.meta.env.VITE_API_URL}/pendingassignments`)
       
      }
    ]
    },
  ]);
  export default router