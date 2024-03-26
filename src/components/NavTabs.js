export default function NavTabs({ nav, product, onChangeTab, selected }) {
  return <div className="nav-tabs">
    <div className="nav-tabs__product-name">
      { product.title }
    </div>
    <div className="nav-tabs__nav">
      <ul className="nav-tabs__nav-ul">
        {
          nav.map(({ __key, name, label, disable }) => {
            return <div 
              key={ __key } 
              className={ [
                'nav-tabs__nav-item', 
                ((disable && disable == true) ? '__disable' : ''), 
                (selected == name ? '__selected' : '')].join(' ') } 
              onClick={ e => onChangeTab(name) }>
              <label>{ label }</label>
            </div>
          })
        }
      </ul>
      
    </div>
    <div className="nav-tabs__tools">
      
    </div>
  </div>
}