import { formatter } from "../util/investment";


function expandDataArray(originalArray){
	let totalInterest = 0;
	console.log(originalArray);

	for (const annualData of originalArray ){
		totalInterest += annualData.interest;
		annualData.totalInterest = totalInterest
	}

	console.log(originalArray);
	return originalArray;
}


function ResultsTable({investmentDataArray}){
	const expandedDataArray = expandDataArray(investmentDataArray);

	return(
			<table className="center" id="result">
				<thead>
					<tr>
						<th>Year</th>
						<th>Investment Value</th>
						<th>Interest (Year)</th>
						<th>Total Interest</th>
						<th>Invested Capital</th>
					</tr>
				</thead>
				<tbody>
					{expandedDataArray.map((annualData) => {
						return (<tr key={annualData.year}>
							<td>{annualData.year}</td>
							<td>{formatter.format(annualData.valueEndOfYear)}</td>
							<td>{formatter.format(annualData.interest)}</td>
							<td>{formatter.format(annualData.totalInterest)}</td>
							<td>{formatter.format(annualData.valueEndOfYear - annualData.totalInterest)}</td>
						</tr>)
					})}
				</tbody>
			</table>
	)
}

export default ResultsTable;