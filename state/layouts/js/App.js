'use strict';
const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: VIEW_MODULE
    }
  };
  
  handleIconSwitch() {
    if(this.state.switch === VIEW_MODULE) {
      this.setState({
        switch: VIEW_LIST
      })
    } else {
      this.setState({
        switch: VIEW_MODULE
      })
    }
  };
  
  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.switch}
            onSwitch={() => this.handleIconSwitch()} />
        </div>
        {this.renderLayout(this.state.switch)}
      </div>
    );
  };

  renderLayout(cardView) {
    if (cardView === VIEW_MODULE) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView === VIEW_MODULE) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}
