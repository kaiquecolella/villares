import React from 'react';
import Carrousel from './Carrousel';

import Motores from '../images/carro_desmanche_pecas_automotivas_motores.webp'
import Jeep from '../images/carro_desmanche_pecas_automotivas_jeep.webp'
import Peugot from '../images/carro_desmanche_pecas_automotivas_peugot.webp'
import NacionalCar from '../images/carro_desmanche_pecas_automotivas_carros_nacionais.webp'

const imagensCarrousel = [
    { id: '1', image: NacionalCar },
    { id: '2', image: Peugot },
    { id: '3', image: Jeep },
    { id: '4', image: Motores },
];

function CarrouselServices() {
    return (
        <div>
            <Carrousel data={imagensCarrousel} />
        </div>
    );
}

export default CarrouselServices;