import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
export default function Header() {
    return (
        <header>
            <Link to="/"> Fasr React Pizza Co.</Link>
            <SearchOrder />
            <p>jonas</p>
        </header>
    );
}
