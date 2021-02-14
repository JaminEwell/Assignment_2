const initialProducts = [
    {
      id: 1, name: 'V-neck shirt', price: 10, category: 'Shirts',
      image: 'link to image'
    },
    {
        id: 2, name: 'Green Shorts', price: 15, category: 'Jeans',
        image: 'link to image'
    },
  ];

  const sampleProduct = {
    name: 'Red Shorts', price: 19, category: 'Jeans',
    image: 'link to image'
  };


class ProductFilter extends React.Component {
    render() {
      return (
        <div>Showing all available products</div>
      );
    }
  }

  function ProductRow(props)  {
        const product = props.product;
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

  
  function ProductTable(props){
        const productRows = props.products.map(product =>
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
        )
  }
  
  class ProductAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.productAdd;
        const product = {
          name: form.name.value, 
          price: form.price.value, 
          category: form.category.value,
          image: form.image.value
        }
        this.props.createProduct(product);
        form.name.value = ""; 
        form.price.value = "";
        form.category.value = "";
        form.image.value = "";
     }

    render() {
      return (
      <form name="productAdd" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" />
        <input type="text" name="price" placeholder="Price Per Unit" />
        <input type="text" name="category" placeholder="Category" />
        <input type="text" name="image" placeholder="Image URL" />
        <button>Add Product</button>
      </form>
        
      );
    }
  }
  
  class ProductList extends React.Component {
    constructor() {
        super();
        this.state = { products: [] };
        this.createProduct = this.createProduct.bind(this);
      }

      componentDidMount() {
        this.loadData();
      }
    
      loadData() {
        setTimeout(() => {
          this.setState({ products: initialProducts });
        }, 500);
      }

      createProduct(product) {
        product.id = this.state.products.length + 1;
        //product.name = this.state.products.name;
        //product.price = this.state.products.price;
        //product.category = this.state.products.category;
       // product.image = this.state.products.image;
        const newProductList = this.state.products.slice();
        newProductList.push(product);
        this.setState({ products: newProductList });
      }

    render() {
      return (
        <React.Fragment>
          <h1>My Company Inventory</h1>
          <ProductFilter />
          <hr />
          <ProductTable products={this.state.products}/>
          <hr />
          <ProductAdd createProduct={this.createProduct} />
        </React.Fragment>
      );
    }
  }
  
  const element = <ProductList />;
  

ReactDOM.render(element, document.getElementById('contents'));
