
import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor(){
    super();
    this.updateSearch = this.updateSearch.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      filterText: ""
    }
  }
  updateSearch(event){
    this.setState({
      filterText: event.target.value
    });
  }
  search(){
    var show  = [];
    posts.forEach((post,index) => {
      if (post.title.toLowerCase().indexOf(this.state.filterText.toLowerCase()) === -1)
        return;
      show.push(<li key={index}><a href={post.url}><img src={post.image } /></a><p>{ post.title }</p></li>);
    });
    return show;
    }
  render() {
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" value={this.state.filterText} onChange={this.updateSearch} />
        </div>
        <ul>
           {this.search()}
        </ul>
      </div>
    )
  }
}


export default App
