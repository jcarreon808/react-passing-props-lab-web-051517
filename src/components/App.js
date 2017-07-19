import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      filters:[],
      currentFilter:null,
      fruit:[]
    }
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currrentFilter: event.target.value });
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  componentWillMount() {
    this.fetchFilters();
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  render(){
    return(
      <div>
        <FruitBasket
        handleFilterChange={this.handleFilterChange}
        filter={this.state.selectedFilter}
        filters={this.state.filters}
        items={this.state.fruit}
        />
      </div>
    )
  }
}
// const App = () => <FruitBasket />;

export default App;
