import useScroll from "../hooks/useScroll"

const Slider = ({children}) => {
  return (
    <ul className="slider">
      {children}
    </ul>
  )
}


const Product = ({name, description, avatar, features}) => {
  return (
    <div className="product">
      <span className="avatar">{avatar}</span>
      <div className="description">
        <h3>{name}</h3>
        <p>{description}</p>
        <ul>
          {
            features.map(feature=><li key={feature}>{feature}</li>)
          }
        </ul>
        <button onClick={e=>alert('Esta ação ainda não implementada!')}>Ver solução</button>
      </div>
    </div>
  )
}


const Solutions = (props) => {

  const { solutionsRef } = useScroll()

  const solutions = [
    {
      
      avatar: 'P1',
      name:'Nome do Produto #1',
      description: 'Descrição do produto #1',
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    {
      
      avatar: 'P2',
      name:'Nome do Produto #2',
      description: 'Descrição do produto #2',
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    {
      
      avatar: 'P3',
      name:'Nome do Produto #3',
      description: 'Descrição do produto #3',
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    {
      
      avatar: 'P4',
      name:'Nome do Produto #4',
      description: 'Descrição do produto #4',
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    }
  ]

  return (
    <section className="solutions" ref={solutionsRef}>

      <h2><span>//</span> NOSSAS SOLUÇÕES</h2>
      
      <Slider>
        {
          solutions.map(solution => 
            <Product 
              key={solution.name}
              avatar={solution.avatar}
              name={solution.name}
              description={solution.description}
              features={solution.features}
              />
             )
          
        }
      </Slider>
    </section>
  )
}
export default Solutions