class ProductFilter extends React.Component {
    render() {
      return (
        <div>This is a placeholder for the issue filter.</div>
      );
    }
  }
  
  class ProductTable extends React.Component {
    render() {
      return (
        <div>This is a placeholder for a table of issues.</div>
      );
    }
  }
  
  class ProductAdd extends React.Component {
    render() {
      return (
        <div>This is a placeholder for a form to add an issue.</div>
      );
    }
  }
  
  class ProductList extends React.Component {
    render() {
      return (
        <React.Fragment>
          <h1>My Company Inventory</h1>
          <ProductFilter />
          <hr />
          <ProductTable />
          <hr />
          <ProductAdd />
        </React.Fragment>
      );
    }
  }
  
  const element = <ProductList />;
  

ReactDOM.render(element, document.getElementById('contents'));
