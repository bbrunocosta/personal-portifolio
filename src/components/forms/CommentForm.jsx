import Link from 'next/link'
const CommentForm = () => (
  <div className="blog-comment-form ptb--120">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="inner">
            <h3 className="title mb--40 fontWeight500">Leave a Reply</h3>
            <form action="#">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="rnform-group">
                    <input className="bg_color--1" type="text" placeholder="Name" />
                  </div>
                  <div className="rnform-group">
                    <input className="bg_color--1" type="email" placeholder="Email" />
                  </div>
                  <div className="rnform-group">
                    <input className="bg_color--1" type="text" placeholder="Website" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="rnform-group">
                    <textarea className="bg_color--1" type="text" placeholder="Comment"></textarea>
                  </div>

                </div>
                <div className="col-lg-12">
                  <div className="blog-btn">
                    {/* <a className="rn-button-style--2 btn-solid" href="#"></a> */}
                    <Link className="rn-button-style--2 btn-solid" href="/blog-details"><span>SEND MESSAGE</span></Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default CommentForm