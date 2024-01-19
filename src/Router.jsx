import { 
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";
import Contact from "./routes/Contact";

function Router(){
    const browserRouter = createBrowserRouter([
        {
            path: '/',
            element: <Root></Root>,
            errorElement: <ErrorPage></ErrorPage>,
        },
        {
            path: 'contacts/:contactId',
            element: <Contact></Contact>
        }
    ])

    return (
       <RouterProvider router={browserRouter}></RouterProvider>
    )
}

export default Router;