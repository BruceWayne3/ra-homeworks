const Chart = (props) => {
  return(<div className={`Charts ${props.main}`}>
          { props.data.map((serie, serieIndex) => {
            var sortedSerie = serie.slice(0),
              sum;

            sum = serie.reduce((carry, current) => carry + current, 0);
            sortedSerie.sort(compareNumbers);

            return (
              <div className={`Charts--serie ${props.type}`}
                key={ serieIndex }
                style={{height: 250}}
              >
              <label>{ props.labels[serieIndex] }</label>
              { serie.map((item, itemIndex) => {
                var color = props.colors[itemIndex], style,
                  size = item / (props.type === "stacked" ? sum : props.max) * 100;

                style = {
                  backgroundColor: color,
                  opacity: props.type === "stacked" ? 1 : item / props.max + .05,
                  zIndex: item,
                  height: props.main === "horizontal" ? null : size + '%',
                  width: props.type === "layered" ? null : (props.main === "horizontal" ? size : 100) + '%',
                  right: (props.type === "layered" ? ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) : 0) + '%'
                };

              return (
                <div
                  className={`Charts--item ${props.type}`}
                  style={ style }
                  key={ itemIndex }
                >
                  <b style={{ color: color }}>{ item }</b>
                 </div>
              );
              }) }
              </div>
            );
          }) }
        </div>)
}

Chart.defaultProps = {
  type: '',
  main: ''
}

const Legend = (props) => {
  return(<div className="Legend">
          { props.labels.map((label, labelIndex) => {
            return (
            <div>
              <span className="Legend--color" style={{ backgroundColor: props.colors[labelIndex % props.colors.length]  }} />
              <span className="Legend--label">{ label }</span>
            </div>
            );
          }) }
        </div>)
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

class App extends React.Component {
  componentWillMount() {
    this.setState({
      data: [],
      series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
      labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
      colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
    })
  }

  componentDidMount() {
    this.populateArray();
    setInterval(this.populateArray.bind(this), 2000);
  }

  populateArray() {
    const series = 5;
    const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

    this.setState({ data });
  }

  render() {
    const { data, colors, labels, series } = this.state;
    const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);

    
    return (
      <section>
        <Chart {...this.state} max={max}/>
        <Chart {...this.state} max={max} type="stacked"/>
        <Chart {...this.state} max={max} type="layered"/>
        <Chart {...this.state} max={max} main="horizontal"/>
        <Legend {...this.state}/>
      </section>
    );
  }
}
