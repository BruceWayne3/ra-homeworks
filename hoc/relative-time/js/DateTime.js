'use strict';

const DateTime = props => {
    return (
        <p className="date">{props.date}</p>
    )
};

const newDate = (date) => Component => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: date
    };
  }
  
  componentDidMount() {
    const result = Date.parse(new Date()) - Date.parse(this.state.date);
    if(result <= 60 * 60 * 1000) {
      this.setState({
        date: '12 минут назад'
      })
    } else if(result >= 60 * 60 * 1000 && result <= 24 * 60 * 60 * 1000) {
      this.setState({
        date: '5 часов назад'
      })
    } else {
      const days = Math.floor(result / (24 * 60 * 60 * 1000));
      this.setState({
        date: `${days} дней назад`
      })
    }
  }
  
  render() {
    return <Component date={this.state.date} />;
  }
}
