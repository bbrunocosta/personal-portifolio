import ContactForm from '../src/components/forms/contactForm'
import Header from '../src/components/headers/header'
import menus from '../src/data/header-menus'
import Breadcrumb3 from '../src/components/breadcrums/breadcrum3'
import socialShareData from '../src/data/socialShare'
import breadCrumbData from '../src/data/breadcrumb.contact'
import FooterTwo from '../src/components/footers/footer'
import BackTop from '../src/components/commons/BackTop'
import Helmet from "../src/components/commons/Helmet";

const Contact =  ( props ) => {
return (<>
        <Helmet pageTitle="Entre em contato com:" />
        <Header menus={menus} colorType="fixed"/>
        <Breadcrumb3 slideList={breadCrumbData}
            withSocial={socialShareData}
        />
        <div style={{transform: 'scale(.90)'}}>
            <ContactForm/>
        </div>
        <BackTop />
        <FooterTwo />
   </>
)
}
export default Contact