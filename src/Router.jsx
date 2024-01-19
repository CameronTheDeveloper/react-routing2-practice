import { 
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import Root from "./routes/Root";

function Router(){
    const browserRouter = createBrowserRouter([
        {
            path: '/',
            element: <Root></Root>
        }
    ])

    return (
       <RouterProvider router={browserRouter}></RouterProvider>
    )
}

export default Router;