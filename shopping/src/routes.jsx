import Home from "./components/Home.jsx"
import Shop from "./components/Shop.jsx"
import Error from "./components/Error.jsx"

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />

    },
    {
        path: "/shop",
        element: <Shop />
    },

];

export default routes;