import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import RootLayout from "./pages/rootLayout";
import ItemsLayout from "./pages/items/Layout";
import ListItems from "./pages/items/ListItems";
import CreateItems from "./pages/items/CreateItems";
import ShowItems from "./pages/items/ShowItems";
import UpdateItems from "./pages/items/UpdateItems";

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