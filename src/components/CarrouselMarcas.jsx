import React from 'react';
import Carrousel from './Carrousel';

import Audi from '../images/pecas_carros_marca_audi.webp';
import Fiat from '../images/pecas_carros_marca_fiat.webp';
import Ford from '../images/pecas_carros_marca_ford.webp';
import Honda from '../images/pecas_carros_marca_honda.webp';
import Hyundai from '../images/pecas_carros_marca_hyundai.webp';
import Mercedes from '../images/pecas_carros_marca_mercedes_benz.webp';
import Nissan from '../images/pecas_carros_marca_nissan.webp';
import Toyota from '../images/pecas_carros_marca_toyota.webp';
import Volks from '../images/pecas_carros_marca_volkswagen.webp';

const imagensCarrousel = [
    { id: '1', image: Audi },
    { id: '2', image: Fiat },
    { id: '3', image: Ford },
    { id: '4', image: Honda },
    { id: '5', image: Hyundai },
    { id: '6', image: Mercedes },
    { id: '7', image: Nissan },
    { id: '8', image: Toyota },
    { id: '9', image: Volks },
];

function CarrouselMarcas() {
    return (
        <div>
            <Carrousel data={imagensCarrousel} />
        </div>
    );
}

export default CarrouselMarcas;