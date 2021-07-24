import Image from 'next/image'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Link from 'next/link'

const ProjectTabs = ({data,column, state, setState, tabId, hasFilter, filteredBy,returns }) => {

const ProjectCardHelper = ({value,column, state,index, setState, tabId}) => 
<div className={`${column}`}>
{state.FooterTwoisOpen && (
    <Lightbox
        mainSrc={data[tabId].bigImage}
        nextSrc={data[(tabId + 1) % data.length]}
        prevSrc={data[(tabId + data.length - 1) % data.length]}
        onCloseRequest={() => setState({ isOpen: false })}
        onMovePrevRequest={() =>
            setState({
                [tabId]: (tabId + data.length - 1) % data.length,
            })
        }
        onMoveNextRequest={() =>
            setState({
                [tabId]: (tabId + 1) % data.length,
            })
        }
        imageLoadErrorMessage='Image Loading ...'
        enableZoom={false}
    />
)}
<div className="item-portfolio-static">
    <Link href={value.gitHubLink}>
        <a target="_blank" style={{color: '#222'}}>
    <div onClick={() => setState({ isOpen: true, [tabId]: index })}>
        <div className="portfolio-static">
            <div className="thumbnail-inner">
                <div className="thumbnail" style={{ backgroundImage: value.gradient || 'transparent', padding: '20px 20px 25px' }}>
                    <Image src={value.image} width="650" height="433" objectFit={value.objectFit} alt="Portfolio Images" />
                </div>
            </div>
            <div className="content">
                <div className="inner">
                    <p>{value.category}</p>
                    <h4><a href="#portfolio-details">{value.title}</a></h4>
                    <ul className="d-flex list-unstyled">
                        {
                            value.stacks?.map((stack, i) => <li key={i}> <span className="stack">{stack.ico} {stack.name}</span> </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </a>
    </Link>
</div>
</div>
    if(hasFilter == 'true'){
        return data.map((value, index) => value[filteredBy] === returns
                    ?<ProjectCardHelper key={'filtered'+value.id} value={value} column={column} state={state} setState={setState} tabId={tabId}/>
                    :null
                )
    }else {
        return data.map((value, index) => <ProjectCardHelper key={value.id} value={value} column={column} state={state} setState={setState} tabId={tabId}/>)
    }
}
export default ProjectTabs