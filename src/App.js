import React from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json';

class App extends React.Component { 
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  softProducts(event) {
    console.log(event.target.value);
  }
  
  filterProducts(event) {
    console.log(event.target.value);
  }

  render(){
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className='content'>
          <div className='main'>
            <Filter count={this.state.products.length}
            size={this.state.size}
            sort={this.state.sort}
            filterProducts={this.filterProducts.length}
            softProducts={this.softProducts}
            ></Filter>
            <Products products={this.state.products}></Products>
          </div>
          <div className='sidebar'>Cart Items</div>
        </div>
        </main>
      <footer>All right is reserved</footer>
    </div>
  );
  }
}
export default App;