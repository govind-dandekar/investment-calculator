function UserInput({investmentState, onParamChange}){
	const {initialInvestment, 
		annualInvestment, 
		expectedReturn,
		duration } = investmentState;
	
	return(
		<div id="user-input">
			<div className="input-group">
				<span>
					<label>Initial Investment</label>
					<input 
						type="number" 
						value={initialInvestment}					
						onChange={(event) => onParamChange('initialInvestment', event)}
						required
					>
					</input>
				</span>
				<span>
					<label>Annual Investment</label>
					<input
					 	type="text" 
						value={annualInvestment}
						onChange={(event) => onParamChange('annualInvestment', event)}	
						required
					>	
					</input>
				</span>
			</div>
			<p></p>
			<div className="input-group">
				<span>
					<label>Expected Return</label>
					<input 
						type="text" 
						value={expectedReturn}
						onChange={(event) => onParamChange('expectedReturn', event)}
						required
					>		
					</input>
				</span>
				<span>
					<label>Duration</label>
					<input 
						type="number" 
						value={duration}
						onChange={(event) => onParamChange('duration', event)}	
						required
					></input>
				</span>
			</div>
		</div>
	)
}

export default UserInput;