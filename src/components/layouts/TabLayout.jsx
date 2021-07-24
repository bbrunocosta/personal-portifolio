const TabLayout = ({ children }) => {
  return (
    <div className="designer-portfolio-area ptb--50  bg_image">
      <div className="wrapper plr--70 plr_sm--30 plr_md--30">
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}
export default TabLayout