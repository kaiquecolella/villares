import styles from './ButtonLearnMore.scss'

const ButtonLearnMore = (props) => {
    return (
            <button className="btn btnLearnMore col-sm-8 col-md-12 mx-auto">
                {props.conteudo}
            </button>
    )
}

export default ButtonLearnMore