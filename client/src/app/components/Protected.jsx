import { Navigate } from "react-router-dom";

const Protected = ({ children }) =>{
	let isSignedIn = window.localStorage.getItem("userID");
	
	if(!isSignedIn)
		return <Navigate to="/" />
	
	return children;
}

export default Protected;