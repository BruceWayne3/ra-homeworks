class Cart extends React.Component {

  render() {
    return (
      <CartView {...this.props} />
    );
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.isOpen !== nextProps.isOpen) || (this.props.isOpen === true && this.props.items.length !== nextProps.items.length);
  }
}
