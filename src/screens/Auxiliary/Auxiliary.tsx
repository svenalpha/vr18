


import useHelmet from '@hooks/useHelmet';
import React, { useEffect , useState} from 'react';

const Auxiliary: React.FC<AuxiliaryProps> = (props) => {
    
    const helmet = useHelmet();
    
    
    useEffect(() => {
        helmet.setTitle("Auxiliary")
    },[helmet])

    return (
        <>
            <h1>Auxiliary</h1>
            
           <p>empty page </p>
        </>
    )
}

interface AuxiliaryProps {
    [key: string]: any
}

export default Auxiliary;




