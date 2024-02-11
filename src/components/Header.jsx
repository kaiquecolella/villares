import styles from './Header.scss'
import Logo from '../images/logo_villares_auto_parts.png'
import Whatsapp from './ButtonWpp'

function Header() {
    return (
        <>
            <header className='container-fluid p-0 sticky-top'>
                <nav className="navbar navbar-dark navbar-expand-lg shadow" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand me-auto" href="#"><img className='logo' src={Logo} alt="" /></a>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title mx-auto" id="offcanvasNavbarLabel">Villares Auto Parts</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body d-flex flex-column justify-content-start">
                                <ul className="navbar-nav justify-content-lg-center flex-grow-1 pe-3">
                                    <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close">
                                        <a className="nav-link" aria-current="page" href="#">Início</a>
                                    </li>
                                    <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close">
                                        <a className="nav-link" href="#scrollspy-Services">Serviços</a>
                                    </li>
                                    <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close">
                                        <a className="nav-link" href="#scrollspy-About">Quem Somos</a>
                                    </li>
                                    <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close">
                                        <a className="nav-link" href="#scrollspy-Contact">Contato</a>
                                    </li>
                                </ul>
                                <a className="d-lg-none d-block" href="https://linktr.ee/kaiquecolella">
                                    <button type="button" className="btn">WhatsApp</button>
                                </a>
                            </div>
                        </div>
                        <a className="d-none d-lg-flex flex-column text-end p-1 nav-link" href="https://wa.me/5511947750525">
                            <span>Tel: 11 4115-9713 </span>
                            <span>WhatsApp: 11 94775-0525</span>
                        </a>
                        <button className="navbar-toggler pe-0 border-0 shadow-none" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </header>
            <div className='fixed-bottom text-end'>
                <Whatsapp />
            </div>
        </>
    )

}

export default Header;