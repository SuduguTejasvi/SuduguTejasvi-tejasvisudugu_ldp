import React from 'react';
import SummaryTemplate from '../../components/Template/SummaryTemplate';
import Summary from '../../components/organism/HandleSlider';
const SummaryPage = () => {
	return (
		<SummaryTemplate>
			<Summary initialValue={0} />
		</SummaryTemplate>
	);
};
export default SummaryPage;
