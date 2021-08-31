import useScroll from '../hooks/useScroll'
import { useState } from 'react'


const HeaderLeft = () => {
  const { scrollTo, aboutRef, solutionsRef } = useScroll()
  
  const openJussiWebsite = e =>window.open('https://jussi.com.br/')

  return (
    <div className="header-left">
      <img src="/assets/svgs/logo-jussi-vector-green.svg" alt="Jussi logo" onClick={openJussiWebsite}/>
      <nav>
        <menu>
          <button onClick={e=>scrollTo(solutionsRef)}>
            Nossas soluções
          </button>
          <button onClick={e=>scrollTo(aboutRef)}>
           Conheça a Jússi
          </button>
        </menu>
      </nav>
    </div>
  )
}


const HeaderRight = () => {

  const [cep, setCep] = useState('')
  const [ address, setAddress ] = useState(null)

  const parseJson = httpResponse => httpResponse.json()
  const alertError = err => alert('Enderço não encontrado! O CEP está correto?')
  const isVaidCepString = cep => /[0-9]{5}-*[\d]{3}/.test(cep)
  const handleInputChange = e => setCep(e.target.value)
  const handleAdressClick = e => setAddress(null)
  const handleSeatch = e => {
    if(isVaidCepString(cep))
      fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then(parseJson)
      .then(setAddress)
      .catch(alertError)
    else
      alert('CEP invalido! digite um CEP com esse formato xxxxxxxx ou xxxxx-xxx')    
  }

  const  Search = !address&&
                    <div className="search">
                      <input type="text" minLength="7" maxLength="9" name="search" placeholder="Digite seu CEP" value={cep} onChange={handleInputChange}/>
                      <button onClick={handleSeatch} title="Buscar">
                        <img src="/assets/svgs/search.svg" alt="" />
                      </button> 
                    </div>

  const  Address = address&&
                    <div className="address">
                      <h4 title="Clique para Alterar" onClick={handleAdressClick}>
                        {address.logradouro}, {address.bairro}, {address.localidade}-{address.uf}
                      </h4>
                    </div>

    
  const LoginButton = <button onClick={e=>alert('Esta ação ainda não implementada!')}> Login </button>

  const CartButton = <button onClick={e=>alert('Esta ação ainda não implementada!')}>
                        <img src="/assets/svgs/shopping-cart.svg" alt="" title="carrinho de compras"/>
                    </button>


  return (
    <div className="header-right">
      { Search }
      { Address }
      { LoginButton }
      { CartButton }
  </div>
  )
}

const Header = () => {
  return (
      <header className="header">
        <HeaderLeft/>
        <HeaderRight/>
      </header>
  )
}
export default Header