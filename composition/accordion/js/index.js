'use strict';
class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  
  handleClick() {
    this.setState({
      open: !this.state.open 
    })
  }
  
  render() {
    return(
      <section className={this.state.open === true ? 'section open' : 'section'}>
        <button>toggle</button>
      <h3 className="sectionhead" onClick={() => this.handleClick()}>{this.props.sectionTitle}</h3>
      <div className="articlewrap">
        <div className="article">
          {this.props.children}
        </div>
      </div>
    </section>
    )
  }
}

const App = () => {
  return(
    <main className="main">
      <h2 className="title">React</h2>
      <Section sectionTitle="Компоненты">Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.</Section>
      <Section sectionTitle="Выучил раз, используй везде!">После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.</Section>
      <Section sectionTitle="Использование JSX">JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.</Section>
  </main>
  )
}

ReactDOM.render(<App/>,document.getElementById('accordian'))
