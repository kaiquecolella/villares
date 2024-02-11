import './App.scss';
import Header from './components/Header';
import carroSemFundo from './images/carro_importado_background_pecas_de_carros_importados_xl.png'
import CardAutomotiveAccessories from './components/CardAutomotiveAccessories';
import ProductsAndServices from './components/ProductsAndServices';
import mechanicalParts from './images/pecas_mecanicas_para_carros_importados_e_nacionais.png'
import automotiveAccessoriess from './images/acessorios_para_carros_importados_e_nacionais.png'
import automotiveBody from './images/pecas_carroceria_para_carros_importados_e_nacionais.png'
import CarrouselMarcas from './components/CarrouselMarcas';
import CarrouselServices from './components/CarrouselServices';
import CarrouselCarros from './components/CarrouselCarros';
import ContactForm from './components/ContactForm';
import ButtonWpp from './components/ButtonWpp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>

        <div className='containerFirstSection'>
          <section className='firstSection container pb-5'>
            <article>
              <h1>Peças de sucata para veículos nacionais e importados.</h1>
              <p className='col-12'>Qualidade sustentável, economia garantida. Mais de 20 anos de tradição em peças automotivas confiáveis.</p>
              <span className='d-flex flex-column'>
                <div className='mb-5'>
                Entre em contato para conferir todos os modelos disponíveis : <a href="https://wa.me/5511947750525">Clique Aqui!</a>
                </div>
                <>
                  Confira alguns modelos disponíveis abaixo:
                </>
              </span>
            </article>
            <CarrouselCarros />
          </section>
        </div>
        <section className='automotiveAccessories'>
          <span className='spamAutomotiveAccessories d-block col-8 col-md-5 col-lg-8 mx-auto rounded-4 pb-5 pt-5 mb-5'>
            <h2 className='text-center pb-5'>Algumas das categorias de peças que trabalhamos</h2>
            <div className='container d-flex flex-column flex-lg-row flex justify-content-around col-lg-8 mx-auto gap-4 text-center'>
              <CardAutomotiveAccessories service="#scrollspy-Mecanica" titulo="Mecânicas" />
              <CardAutomotiveAccessories service="#scrollspy-Acessorio" titulo="Acessórios" />
              <CardAutomotiveAccessories service="#scrollspy-Carroceria" titulo="Carroceria" />
            </div>
          </span>
        </section>
        <section id="scrollspy-Services" className='container mt-5 pt-5'>
          <h2 className='mt-5'>Desmanche Inteligente:<br />Entenda Nosso Serviço de Qualidade e Sustentabilidade</h2>
          <p>Descubra a inovação por trás do nosso desmanche automotivo! Nosso serviço começa com a seleção meticulosa de peças de sucata, escolhidas criteriosamente para garantir qualidade equivalente aos produtos originais/novos. Comprometidos com a sustentabilidade, cada componente é cuidadosamente inspecionado e preparado para integrar perfeitamente seu veículo. Ao escolher nossas peças de desmanche, você não apenas obtém economia, mas também participa ativamente da redução do impacto ambiental. Simplificamos o processo de manutenção veicular, oferecendo soluções acessíveis e confiáveis que preservam a qualidade e a integridade do seu veículo.</p>
          <CarrouselServices />
        </section>
        <section className='pt-5'>
          <ProductsAndServices service="scrollspy-Mecanica" titulo='Descubra a Excelência em Peças Mecânicas para Seu Automóvel' conteudo='Explore a excelência em desempenho e confiabilidade com a nossa vasta seleção de peças mecânicas para automóveis. Desde motores potentes até sistemas de transmissão eficientes, garantimos qualidade em cada componente. Nossa linha abrange freios seguros, suspensões suaves e sistemas de direção precisos, proporcionando uma experiência de condução confiável e segura. Descubra a perfeição em cada detalhe mecânico para elevar o desempenho do seu veículo para novos patamares.' classe='bgDark' order='order-2 order-lg-1' order1='order-1 order-lg-2' imageService={mechanicalParts} />
          <ProductsAndServices service="scrollspy-Acessorio" titulo='Acessórios Automotivos de Qualidade a Preços Imbatíveis' conteudo='Desfrute de economia inteligente e estilo personalizado ao explorar nossa variedade de acessórios automotivos. Seja para renovar o interior com tapetes e forrações de alta qualidade ou garantir a visibilidade ideal com retrovisores e lanternas, temos opções acessíveis para cada necessidade. Para aqueles que buscam uma mudança estilística, oferecemos rodas e pneus em excelentes condições, além de itens de personalização para tornar seu veículo único. No nosso negócio, economizar não significa comprometer a qualidade. Descubra opções acessíveis que elevam o visual e o conforto do seu carro.' order='order-1' imageService={automotiveAccessoriess} />
          <ProductsAndServices service="scrollspy-Carroceria" titulo='Soluções Econômicas e Duráveis: Renove a Carroceria do Seu Carro' conteudo='oferecemos para-choques resistentes, capôs, portas e para-lamas que atendem aos mais altos padrões de qualidade, preservando o desempenho e a estética do seu automóvel.' classe='bgDark' order='order-2 order-lg-1' order1='order-1 order-lg-2' imageService={automotiveBody} />
        </section>
        <section className='container pt-5'>
          <article className='d-flex flex-column gap-3'>
            <h2>Algumas das principais marcas do mercado que trabalhamos:</h2>
            <p>Trabalhamos com as marcas mais renomadas do mercado automotivo, oferecendo a você acesso a peças de alta qualidade. Nosso compromisso é proporcionar uma ampla variedade de opções, incluindo produtos de marcas líderes, para garantir que você encontre as soluções ideais para suas necessidades específicas. Conte conosco para fornecer peças que atendam às exigências das principais marcas, proporcionando uma experiência automotiva excepcional.</p>
            <CarrouselMarcas />
          </article>
        </section>
        <section id='scrollspy-About' className='pt-5 pb-5 bgDark '>
          <article className='container d-flex flex-column gap-3'>
            <h2 className='mt-5'>Tecnologia, Tradição e Confiança:<br />A Jornada de Qualidade da Villares Auto Partes ao Longo de Duas Décadas</h2>
            <p>Há mais de duas décadas, a Villares Auto Partes tem sido líder no mercado automotivo, oferecendo soluções inovadoras e confiáveis em peças para veículos nacionais e importados. Nosso compromisso com a excelência e a sustentabilidade molda nossa jornada como um desmanche pioneiro. Com uma rica tradição de mais de 20 anos, continuamos a redefinir padrões, proporcionando aos nossos clientes uma experiência única e acessível.</p>
            <p>Na Villares Auto Partes, a qualidade é nossa prioridade. Selecionamos cuidadosamente peças de sucata, mantendo elevados padrões de inspeção para garantir que cada componente atenda ou supere as expectativas dos produtos originais/novos. Nosso serviço de desmanche inteligente é a fusão perfeita entre economia e qualidade, proporcionando aos nossos clientes a confiança de dirigir com peças confiáveis e sustentáveis.</p>
            <p>Ao longo dos anos, construímos uma reputação sólida baseada na integridade, na transparência e na dedicação ao cliente. A Villares Auto Partes é mais do que uma empresa; é uma comunidade comprometida em simplificar a manutenção veicular e preservar a qualidade do seu automóvel. Junte-se a nós nessa jornada automotiva, onde a tradição encontra a inovação, e a confiança encontra a sustentabilidade.</p>
          </article>
        </section>
        <section id='scrollspy-Contact' className='container-fluid p-5 mt-5'>
          <article className='container mb-5 pb-5 text-center'>
            <h2 className='mt-5'>Entre em contato via WhatsApp, é mais fácil e rápido!</h2>
            <p>Nossa equipe estará esperando para te atender mais rápido por aqui!<br /> Clique no Botão Abaixo</p>
            <ButtonWpp />
          </article>
          <ContactForm />
        </section>
      </main>
      <footer className='bgDark pt-5'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
