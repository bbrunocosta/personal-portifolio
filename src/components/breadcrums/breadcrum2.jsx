const Breadcrumb2 = ({img, title,items}) => (
    <div className={`rn-page-title-area mh-75 pt--120 pb--190 bg_image bg_image--${img}`} data-black-overlay="7">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="blog-single-page-title text-center pt--100">
                    <h2 className="title theme-gradient">{title}</h2>
                    <ul className="blog-meta d-flex justify-content-center align-items-center">
                        {
                            items.map( item => <li key={item.name}>{item.ico}{item.name}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
)
export default Breadcrumb2