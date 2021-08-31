import { createContext, useContext, createRef} from 'react'

const Context = createContext()

export const UseScrollProvider = ({children}) => {
  
  const aboutRef = createRef(null)
  const solutionsRef = createRef(null)

  const scrollTo = (componentRef) => 
                      window.scrollTo({
                        top: componentRef.current.offsetTop,
                        behavior: 'smooth'
                      })
  return (
    <Context.Provider value={{ scrollTo , aboutRef, solutionsRef}}>
      {children} 
    </Context.Provider>
  )
}

const useScroll = () => useContext(Context)

export default useScroll