import React, {Component}from 'react';
import request from 'superagent'
import "../css/rent.css"
class SelectArea extends React.Component {
  render() {
    return (
      <div className="select">
        <p> 地区：陕西省</p>
        <input className="col-md-4" placeholder="请输入需要查找的商品信息"/>
        <button className="btn btn-success btn-m" type="submit">搜索</button>
      </div>)
  }
}
class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

  }

  componentDidMount() {
    const self = this;
    request
      .get('/products', function (products) {
        self.setState({
          products: products
        })
      });
  }

  render() {
    const productRow = this.state.products.map(product =>
      (<div className="col-sm-4 col-md-3">
          <div className="thumbnail">
            <img src={product.imgName} className="picture"/>
            <p>￥{product.price}/天;名称：{product.productName};商品描述：{product.prductDescrip}</p>
            <p><a href="#" className="btn btn-primary" role="button">了解详情</a>
            </p>
          </div>
        </div>
      ));
    return (

      <div className="row image container-fluid ">
        <div className="row row-rent">
          {productRow}
        </div>
      </div>
    )
  }

}
  class Rent extends React.Component {
    render() {
        return (
            <div>
                <SelectArea />
                <Picture />
            </div>
        )
    }
}
export default Rent;
