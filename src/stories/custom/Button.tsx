import React from 'react';


export interface Props {
    buttonText: string;
    backgroundColor: string;
}

export function Button(props: Props) {
    return (
        <button style={{ backgroundColor: props.backgroundColor }}>{props.buttonText}</button>
    )
}

// this check