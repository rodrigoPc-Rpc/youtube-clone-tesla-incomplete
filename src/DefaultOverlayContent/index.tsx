import React from 'react'

import { Buttons, Container, Heading } from './styles'

interface Props {
 label: string
 description: string
}

const DefaultOverlayContent: React.FC<Props> = ({
    label, description
}) => {
    return (
        <Container>
            <Heading>
                <h1>{label}</h1>
                <h2>{description}</h2>
            
            
            <Buttons>
                <button>Custom Order</button>
                <button className="white">Existing Inventory</button>
            </Buttons>
            </Heading>
        </Container>
    );
}

export default DefaultOverlayContent