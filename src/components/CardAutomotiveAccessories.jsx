import ButtonLearnMore from "./ButtonLearnMore"
import styles from './CardAutomotiveAccessories.scss'

const CardAutomotiveAccessories = (props) => {
    return (

        <div className='cardAutomotiveAccessories col-lg-4 d-flex flex-column p-3 gap-4 rounded-4 '>
            <h3>{props.titulo}</h3>
            <a href={props.service}>
                <ButtonLearnMore conteudo="Saiba Mais" />
            </a>
        </div>
    )
}

export default CardAutomotiveAccessories