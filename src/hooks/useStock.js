import { useContext } from "react";
import StockContext from "../contexts/StockContext";

export default function UseStock(){
    return useContext(StockContext)
}