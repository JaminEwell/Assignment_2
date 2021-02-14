class ProductFilter extends React.Component {
    render() {
      return (
        <div>This is a placeholder for the product filter.</div>
      );
    }
  }

  class ProductRow extends React.Component {
    render() {
      const style = this.props.rowStyle;
      return (
        <tr>
          <td style={style}>{this.props.product_id}</td>
          <td style={style}>{this.props.product_title}</td>
        </tr>
      );
    }
  }

  
  class ProductTable extends React.Component {
    render() {
        const rowStyle = {border: "1px solid silver", padding: 4};
        return (
          <table style={{borderCollapse: "collapse"}}>
            <thead>
              <tr>
                <th style={rowStyle}>ID</th>
                <th style={rowStyle}>Title</th>
              </tr>
            </thead>
            <tbody>
              <ProductRow rowStyle={rowStyle} product_id={1}
                product_title="Error in console when clicking Add" />
              <ProductRow rowStyle={rowStyle} product_id={2}
                product_title="Missing bottom border on panel" />
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
