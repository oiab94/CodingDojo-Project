import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../view/Home";
import NavbarDashboard from "../view/NavbarDashboard";
import Welcome from "../view/dashboard/Welcome";
import EventTable from "../view/dashboard/Event";
import Search from "../view/dashboard/Search";
import Protected from "../components/Protected";
import NewEvent from "../view/dashboard/NewEvent";
import Logout from "../view/user/Logout";


const Routes = () => {	
	const router = createBrowserRouter([
		{
			path:"/",
			element: <Home />
		},
		{
			element: 
			<>
				<Protected>
					<NavbarDashboard />
				</Protected>
			</>,
			children:[
				{
					path:"/dashboard",
					element:<Welcome />
				},
				{
					path:"/dashboard/new",
					element: <NewEvent />,
				},
				{
					path:"/dashboard/event/:id",
					element:<EventTable />
				},
				{
					path:"/dashboard/search",
					element:<Search />
				},
				{
					path:"/dashboard/account",
					element:<Logout />
				}
			]
		}
	])

	return(
		<RouterProvider router={router} />
	);
}

export default Routes;