import Logo from '../images/logo_villares_auto_parts.webp'
import styles from './Footer.scss'

function Footer() {
    return (
        <>
        <div className='container d-flex flex-column flex-lg-row  justify-content-between align-items-center align-items-lg-start'>
            <div className='col-6'>
                <img className='col-3' src={Logo} alt="" />
                <p>villares auto parts - Sua Fonte Confiável para Peças Automotivas Inovadoras e Sustentáveis. Há mais de duas décadas, reinventamos o desmanche, proporcionando soluções acessíveis e ecológicas para veículos nacionais e importados. Junte-se a nós , onde tradição encontra inovação, e a qualidade preserva a performance do seu carro.</p>
            </div>
            <div className='col-6 col-lg-3 text-lg-end'>
                <h3>Contato</h3>
                <ul>
                    <li><a href="">Tel: 11 4115-9713</a></li>
                    <li><a href="">Whatsapp: 11 94775-0525</a></li>
                </ul>
            </div>
            <div className='col-6 col-lg-3 text-lg-end'>
                <h3>Redes Sociais</h3>
                <ul>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Instagram</a></li>
                </ul>
            </div>
        </div>
        <div className='text-center bg-white col-md-6 mx-auto p-2 mt-5'>
            <span>
                Todos os direitos reservados <br />
                © 2023 Copyright: villaresautoparts.com
            </span>
        </div>
    </>
    )
}

export default Footer;