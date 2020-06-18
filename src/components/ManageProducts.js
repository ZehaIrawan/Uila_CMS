import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/product';

const ManageProducts = ({ getProducts, loading, products, deleteProduct }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (loading) {
    return (
      <Fragment>
        <p>Loading ...</p>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <button>+Add Product</button>

      <div className="product-container">
        <div

        // key={product._id}
        // title={product.title}
        // img={product.img}
        // description={product.description}
        // price={product.price}
        // deleteProduct={deleteProduct}
        // id={product._id}
        // dl={product.dl}
        />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  // loading: state.products.loading,
});

export default connect(mapStateToProps, {
  getProducts,
})(ManageProducts);
