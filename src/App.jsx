const products = [
    {
      id: 1, name: 'V-neck shirt', price: 10, category: 'Shirts',
      image: 'link to image'
    },
    {
        id: 2, name: 'Green Shorts', price: 15, category: 'Jeans',
        image: 'link to image'
    },
  ];


class ProductFilter extends React.Component {
    render() {
      return (
        <div>This is a placeholder for the product filter.</div>
      );
    }
  }

  class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        return (
          <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.image}</td>
          </tr>
        );
      }
  }

  
  class ProductTable extends React.Component {
    render() {
        const productRows = products.map(product =>
          <ProductRow key={product.id} product={product} />
        );
    
        return (
          <table className="bordered-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {productRows}
            </tbody>
          </table>
        );
      }
  }
  
  class ProductAdd extends React.Component {
    render() {
      return (
        <div>This is a placeholder for a form to add an product.</div>
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
