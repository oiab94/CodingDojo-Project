import {Link} from "react-router-dom";

const TableDisplay = (props) => {
	const values = props.values;

	return (
		<>
		{
			values.map((item, index) => {
				let {title, location, attendes, date, _id} = item;

				const LINK_TO = "/dashboard/event/"+ _id;

				return (
					<tr key={index}>
						<td><Link to={ LINK_TO }>{ title }</Link></td>
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