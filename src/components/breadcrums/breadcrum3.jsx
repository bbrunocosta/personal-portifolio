import Particles from 'react-particles-js';
import TextLoop from "react-text-loop";
import Image from "next/image"

const Breadcrumb3 = ({slideList, withSocial}) => {
    return(
    <div className="slider-wrapper with-particles">
                    <div className="frame-layout__particles with-particles">
                        <Particles
                            width="100%"
                            height="500px"
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 50
                                    },
                                    "size": {
                                        "value": 4
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
    <div className={`slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center pt--90 pb--30 bg_color--5 rn-slider-height  bg_img--${'radial'}`}>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-5">
                <div className="designer-thumbnail">
                    <div className="designer-avatar">
                        <Image src={slideList.avatar} width="394" height="394" objectFit="cover" alt="Slider Images"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 mt_md--40 mt_sm--40">
                <div className={`inner ${slideList.textPosition}`}>
                    {slideList?.title ? <><h1 className="mb-b">{slideList.title}</h1><h4>{slideList.h2}</h4></> : ''}
                        <span>{slideList.h3}</span>
                    <h3>
                    <div className="d-flex">  {                      
                    withSocial?(
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="inner text-center">
                                <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                    {withSocial.map((val , i) => (
                                        <li key={i}><a className="" href={`${val.link}`}>{val.Social}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                    :(<>
                    <div style={{minWidth:'200px'}}>
                    <TextLoop>
                        {
                            slideList?.skills?.map((skill, i) => <span key={i}> {skill?.icon} {skill.name}</span>)
                        }
                    </TextLoop>{" "}
                    </div>
                    <div style={{minWidth:'200px'}}>
                    <TextLoop>
                        {
                            Array.of(slideList?.skills?.pop()).concat(slideList.skills.slice(0, slideList.skills.length-1)).map((skill, i) => <span key={i}> {skill?.icon} {skill?.name}</span>)
                        }
                    </TextLoop>{" "}
                    </div>
                    <div style={{minWidth:'200px'}}>
                    <TextLoop>
                        {
                             slideList?.skills?.reverse().map((skill, i) => <span key={i}> {skill?.icon} {skill.name}</span>)
                        }
                    </TextLoop>
                    </div> 
                    </>)}{" "}
                    </div> 
                    </h3>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
)
}
export default Breadcrumb3