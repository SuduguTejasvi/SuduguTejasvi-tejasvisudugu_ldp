import React from 'react';

interface CoreConceptProps {
	title: string;
	description: string;
}

function CoreConcept({ title, description }: CoreConceptProps) {
	return (
		<div>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
}

function Cards() {
	return (
		<div>
			<CoreConcept
				title="JavaScript"
				description="It is a lightweight interpreted language"
			/>
			<CoreConcept title="CSS" description="Cascading Style Sheets" />
			<CoreConcept title="HTML" description="Hypertext Markup Language" />
		</div>
	);
}

export default Cards;
