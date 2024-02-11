const ProductsAndServices = (props) => {
    return (
        <div  id={props.service} className={props.classe || ''}>
            <div className='container d-flex flex-column flex-lg-row gap-5 justify-content-around align-items-center p-5'>
                <article className={`col-lg-6 ${props.order}`}>
                    <h2>{props.titulo}</h2>
                    <p>{props.conteudo}</p>
                </article>
                <img className={`col-12 col-md-9 col-lg-6 p-lg-5  ${props.order1}`} src={props.imageService} alt="" />
            </div>
        </div>
    )
}

export default ProductsAndServices