import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const Logout = () =>{
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/");
	},[])	
	
	return (
		<>
		{
			window.localStorage.removeItem("userID")
		}
		</>
	);
}

export default Logout;