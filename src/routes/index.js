import Home from "~/pages/Home";
import PriceList from "~/pages/PriceList";
import Login from "~/pages/Login";

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/priceList', component: PriceList},
    // {path: '/login', component: Login, layout: null}
    {path: '/login', component: Login}
]

export {publicRoutes};