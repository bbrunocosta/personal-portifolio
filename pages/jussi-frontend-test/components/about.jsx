import useScroll from "../hooks/useScroll";

const About = () => {

  const {aboutRef} = useScroll()

  return (
    <section className="about" ref={aboutRef}>

        <article className="about-right">
          <h2>OLá, SOMOS <br/> A JÜSSI</h2>
          <p>A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
          <button onClick={e => window.location.href = 'https://jussi.com.br/about.html' }>Conheça a Jüssi</button>
        </article>
        
        <picture className="about-left">
          <img src="/assets/images/image-jussi.png" alt="Escritório Jüssi" />
        </picture>

    </section>
  )
}
export default About;