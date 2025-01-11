import Main from "../pages/Main"
import About from "../pages/About"

export const publicRouters = [
    {path: "/main", element: <Main/>, exact: true},
    {path: "/about", element: <About/>, exact: true},
    {path: "*", element: <Main/>, exact: true},
]