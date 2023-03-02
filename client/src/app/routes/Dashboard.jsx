import { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../view/Home";
import Dashboard from "../view/Dashboard";
import Welcome from "../view/dashboard/Welcome";


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
				}
			]
		}
	])

	return(
		<RouterProvider router={router} />
	);
}

export default Routes;