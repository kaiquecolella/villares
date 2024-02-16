import styles from './ButtonWpp.scss'
import Whatsapp from '../images/whatsapp.webp'

function ButtonWpp() {
    return (
        <button className="btn col-4 col-sm-2 col-lg-1 btn-wpp">
            <a href="https://wa.me/5511947750525"><img className='col-12' src={Whatsapp} alt="" /></a>
        </button>
    )
}

export default ButtonWpp