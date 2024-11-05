import investmentCalcLogo from '../assets/investment-calculator-logo.png'


function Header(){
	return (
		<header id="header">
			<img src={investmentCalcLogo} alt="investment calc logo" />
			<h2>Investment Calculator</h2>
		</header>
	)
}

export default Header;