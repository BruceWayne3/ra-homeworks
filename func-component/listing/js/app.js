'use strict';
fetch('https://neto-api.herokuapp.com/etsy')
 .then(res => res.json())
 .then(data => ReactDOM.render(
  <Listing items={data} />,
  document.getElementById('root')
))

const Quantity = ({quantity}) => {
  if(quantity <= 10) {
     return <p className="item-quantity level-low">{quantity} left</p>
     }
  if(quantity <= 20) {
     return <p className="item-quantity level-medium">{quantity} left</p>
     }
  if(quantity > 20) {
     return <p className="item-quantity level-high">{quantity} left</p>
     }
};

const Listing = ({items}) => {
  const offers = items.map(item => {
    return (<div className="item" key={item.listing_id}>
    <div className="item-image">
      <a href={item.url}>
        <img src={item.MainImage.url_570xN}/>
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{(item.title.length > 50) ? item.title.slice(0,50) + '...' : item.title}</p>
      <p className="item-price">{(item.currency_code === 'USD') ? '$' + item.price : (item.currency_code === 'EUR') ? '€' + item.price : item.price + ' ' + item.currency_code}</p>
      <Quantity quantity={item.quantity} left/>
    </div>
  </div>)
  })
  
  return (
    <div className="item-list">
      {offers}
      </div>
  )
};
