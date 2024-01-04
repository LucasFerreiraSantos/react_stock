import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import RootLayout from "./pages/rootLayout";

const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout/>,
    children:[
        { index: true, element: <Home/> },
        { path: "items", element: <ItemsLayout/>, children: [
            { index: true, element: <ListItems/>},
            { path: "new", element: <CreateItems/>},
            { path: ":id", element: <ShowItems/>},
            { index: ":id/update", element: <UpdateItems/>},
        ]}
    ]
}])

export default router