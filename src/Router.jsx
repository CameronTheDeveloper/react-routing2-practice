import { 
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

function Router(){
    const browserRouter = createBrowserRouter([
        {
            path: '/',
            element: <div>Hello World</div>
        }
    ])

    return (
       <RouterProvider router={browserRouter}></RouterProvider>
    )
}

export default Router;