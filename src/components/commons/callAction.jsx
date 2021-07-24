import React from 'react'
const CallAction = ({ask, action, href, hrefFor}) => {
    return (
        <div className="call-to-action-wrapper call-to-action text-white-wrapper  ptb--120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner text-center">
                            <span>{ask}</span>
                            <h2>{action}</h2>
                            <a className="rn-button-style--2" href={href}><span>{hrefFor}</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CallAction;