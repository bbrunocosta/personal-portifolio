const Footer = () => {
  return (
    <footer className="footer">

        <img src="/assets/images/wppcompany.png" alt="WPP logo" onClick={e=>window.open('https://www.wpp.com/')}/>

        <div className="social">
          <img src="/assets/images/facebook.png" alt="Facebook logo" onClick={ e => window.open('https://web.facebook.com/agencia.jussi?_rdc=1&_rdr')}/>
          <img src="/assets/images/instagram.png" alt="Instagram logo" onClick={ e => window.open('https://www.instagram.com/jussi/')}/>
          <img src="/assets/images/linkedin.png" alt="LinkedIn logo" onClick={ e => window.open('https://www.linkedin.com/company/agencia-jussi')}/>
        </div>
        
    </footer>
  )
}
export default Footer