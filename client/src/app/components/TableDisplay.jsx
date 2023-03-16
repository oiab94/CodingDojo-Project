import {Link} from "react-router-dom";

const TableDisplay = (props) => {
	const values = props.values;

	return (
		<>
		{
			values.map((item, index) => {
				let {title, location, attendes, date} = item;

				return (
					<tr key={index}>
						<td><Link to="/dashboard/event">{ title }</Link></td>
						<td>{ location }</td>
						<td>{ attendes }</td>
						<td>{ date.slice(0, 10) }</td>
					</tr>
				);
			})	
		}
		</>
	);

}
export default TableDisplay;