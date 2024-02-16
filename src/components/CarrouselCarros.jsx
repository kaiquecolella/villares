import React from 'react';
import CarrouselAutoPlay from './CarrouselAutoPlay';

import Carro1 from '../images/bmw_x2.webp';
import Carro2 from '../images/thenewgolfgti.webp';
import Carro3 from '../images/volvo_s60.webp';
import Carro4 from '../images/fusca_tsi.webp';


const imagensCarrousel = [
    { id: '1', image: Carro1, title: 'Sucata BMW X2' },
    { id: '2', image: Carro2, title: 'Sucata Porshe Macan' },
    { id: '3', image: Carro3, title: 'Sucata Volvo s60' },
    { id: '4', image: Carro4, title: 'Sucata Audi Q3' },
];

function CarrouselMarcas() {
    return (
        <div>
            <CarrouselAutoPlay data={imagensCarrousel} />
        </div>
    );
}

export default CarrouselMarcas;