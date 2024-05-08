import { useLoaderData, useNavigation } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";



function Menu() {
    // const [isloading, setIsLoading] = useState(true);
    const menu = useLoaderData();
    // const isLoading = navigation.state === "loading";
    console.log(menu)
    return (
        <>
            <ul>
                {menu.map((pizza) => (
                    <MenuItem key={pizza.id} pizza={pizza} />
                ))}
            </ul>
        </>
    );
}
export async function Loader() {
    const menu = await getMenu();
    //    setIsLoading(false)
    return menu;
}
export default Menu;
