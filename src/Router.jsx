import { 
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";

function Router(){
    const browserRouter = createBrowserRouter([
        {
            path: '/',
            element: <Root></Root>,
            errorElement: <ErrorPage></ErrorPage>,
        }
    ])

    return (
       <RouterProvider router={browserRouter}></RouterProvider>
    )
}

export default Router;