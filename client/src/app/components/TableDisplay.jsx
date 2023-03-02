const TableDisplay = (props) => {
	const values = props.values;

	return (
		<>
		{
			values.map((item, index) => {
				let {name, location, attendes, date} = item;

				return (
					<tr key={index}>
						<td>{ name }</td>
						<td>{ location }</td>
						<td>{ attendes }</td>
						<td>{ date }</td>
					</tr>
				);
			})	
		}
		</>
	);

}
export default TableDisplay;