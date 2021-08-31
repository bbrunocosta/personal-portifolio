import useScroll from '../hooks/useScroll'


const ProductCard = ({img, action, alt}) => {
  return (
    <div className="product-card">
      <div>
        <img src={img} alt={alt} />
      </div>
      <button onClick={e=>alert('Esta ação ainda não implementada!')}>{action}</button>
    </div>
  )
}


const ProductCardGroup = () => {
  return (
    <div className="product-card-group">
          <ProductCard action="Adicionar à sacola"  img="/assets/images/geladeira.png" alt="Geladeira cor prata"/>
          <ProductCard action="Mais Detalhes"       img="/assets/images/batedeira.png" alt="Batedeira cor vermelha"/>
          <ProductCard action="Comprar em 12x"      img="/assets/images/bebida.png"    alt="Wisky Black Label"/>
    </div>
  )
}


const Breadcrum = () => {

  const {scrollTo, solutionsRef} = useScroll()

  return (

    <section className="breadcrum">

      <article className="breadcrum-left">
        <h1>CRIAMOS LOJAS QUE VENDEM MAIS.</h1>
        <p>A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
        <button onClick={e=>scrollTo(solutionsRef)}>Veja nossas soluções</button>
      </article>

      <div className="breadcrum-right">
          <ProductCardGroup/>
      </div>

    </section>

  )
}

export default Breadcrum