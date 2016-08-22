import React, {Component}from 'react';
import request from 'superagent'
import "../css/rent.css";
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
  componentDidMount(){
    request.post('/api/products')
      .end((err,data)=>{
        this.setState({
          products: data.body
        })
      });
  }
  _getName(name){
    return ()=>{
      alert(name);
    };
  }
  render() {
    const productsRow = this.state.products.map(product =>
      (
        <div className="col-sm-4 col-md-3">
          <div className="thumbnail">
            <img src={'../images/goods/'+product.productName+'.jpg'} className="picture"/>
            <p>￥{product.price}/{product.unit};商品描述：{product.briefDescription}</p>
            <p>
              <button  href="#"   className="btn btn-primary"  role="button" onClick={this._getName(product.name)}>了解详情
              </button>
            </p>
          </div>
        </div>
      ));
    return (

      <div className="row image container-fluid ">
        <div className="row row-rent">
          {productsRow}
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
