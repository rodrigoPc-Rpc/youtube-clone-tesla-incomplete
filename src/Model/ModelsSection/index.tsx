import React from 'react';
import useModel from '../useModel'

import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement>{
    modelName:string
    overlayNode: React.ReactNode
}

const ModelsSection: React.FC<Props> = ({
    modelName,
    overlayNode,
    children,
    ...props
    }) => {
    const { registerModel } = useModel(modelName)

    useEffect(() => {
        if (ref.)
    }, [])

    return(
        <Container {...props}>{children}</Container>
    );
};

export default ModelsSection;