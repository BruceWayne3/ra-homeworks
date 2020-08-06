'use strict'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All'
    }
  };
  
  handleButtonClick(filter) {
    this.setState({
      selected: filter
    });
  };
  
  render() {
    return (
     <div>
    <Toolbar
      filters={this.props.filters}
      selected={this.state.selected}
      onSelectFilter={(filter) => this.handleButtonClick(filter)} />
    <Portfolio projects={(this.state.selected === 'All') ? this.props.projects : (this.props.projects).filter(project => project.category === this.state.selected)} />
  </div>
    )
  };
}
