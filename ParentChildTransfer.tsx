import React from "react";

type CoreConceptProps = {
	title: string;
	description: string;
};
function CoreConcept(props: CoreConceptProps) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default function ParentChildTransfer()
{

    
    return(
       <>
        <CoreConcept
        				title="JavaScript"
        				description="It is lightweight interpreted language"
        			/>
        			<CoreConcept title="CSS" description="Cascading Style Sheets" />
        			<CoreConcept title="HTML" description="Hypertext Markup Language" />
       </>
    )
}
