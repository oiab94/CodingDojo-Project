import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../view/Home";
import Dashboard from "../view/Dashboard";
import Welcome from "../view/dashboard/Welcome";
import EventTable from "../view/dashboard/Event";
import Search from "../view/dashboard/Search";


const Routes = () => {	
	const router = createBrowserRouter([
		{
			path:"/",
			element: <Home />
		},
		{
			path: "/dashboard",
			element: <Dashboard />,
			children:[
				{
					path:"/dashboard",
					element:<Welcome />
				},
				{
					path:"/dashboard/event",
					element:<EventTable />
				},
				{
					path:"/dashboard/search",
					element:<Search />
				}
			]
		}
	])

	return(
		<RouterProvider router={router} />
	);
}

export default Routes;