const TabListLayout = ({ children }) => {
  return (
    <div className="row text-center">
      <div className="col-lg-12">
        <div className="tablist-inner">
          {children}
        </div>
      </div>
    </div>
  )
}
export default TabListLayout