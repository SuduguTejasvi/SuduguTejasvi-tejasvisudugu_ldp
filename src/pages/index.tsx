import React from 'react';
import Calculator from '../components/organisms/CalculateEvent';
import SimpleTemplate from '../components/templates/HomeTemplate';

function CalculatorPage() {
	return (
		<div className="CalculatorPage">
			<SimpleTemplate>
      			<Calculator />
    		</SimpleTemplate>
		</div>
	);
}

export default CalculatorPage;
