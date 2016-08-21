import React, {Component}from 'react';
import request from 'superagent'
import "../css/rent.css"
class SelectArea extends React.Component {
<<<<<<< HEAD
<<<<<<< 9f3b546da7359c0816cbeba6a1f4549b5cb89c27
  render() {
    return (
      <div className="select">
        <p> 地区：陕西省</p>
        <input className="col-md-4" placeholder="请输入需要查找的商品信息"/>
        <button className="btn btn-success btn-m" type="submit">搜索</button>
      </div>)
  }
=======
    render() {
        return (
            <div className="select">
                <p> 地区：陕西省</p>
                <input className="col-md-4" placeholder="请输入需要查找的商品信息"/>
                <button className="btn btn-success btn-m" type="submit">搜索</button>
            </div>)
    }
>>>>>>> want-new
}
class Picture extends React.Component {
<<<<<<< 489118e2c52ccf702db1c40be50869ee6484daf0
    constructor(props) {
        super(props);
        this.state = {
            products:[]
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




<<<<<<< HEAD
        {/*<div className="picture-describe">*/}
        {/*<a href="#"><img src={Image2} className="picture"/>*/}
        {/*<p>￥400/天 佳能（Canon）EOS 6D 单反套机（EF 24-105mm f/4L IS USM 镜头）</p></a>*/}
        {/*</div>*/}
        {/*<div className="picture-describe">*/}
        {/*<a href="#"><img src={Image3} className="picture"/>*/}
        {/*<p>￥100/天 极限X1山地车自行车油压碟刹气压减震可锁死前叉变速铝合金</p></a>*/}
        {/*</div>*/}
        {/*<div className="picture-describe">*/}
        {/*<a href="#"><img src={Image4} className="picture"/>*/}
        {/*<p>￥100/天 单车20/22/24/26寸21变速铝合金双v双碟刹 21速铝合金车架</p></a>*/}
        {/*</div>*/}
        {/*<div className="picture-describe">*/}
        {/*<a href="#"><img src={Tent1} className="picture"/>*/}
        {/*<p>￥50/天 TAWA露营液压自动帐篷户外套装 双层防雨野营郊游野外露营帐帐篷 </p></a>*/}
        {/*</div>*/}
        {/*<div className="picture-describe">*/}
        {/*<a href="#"> <img src={Tent2} className="picture"/>*/}
        {/*<p>￥50/天 牧高笛户外装备 防风防暴雨三季铝杆双人双层帐篷 驴友强推白色</p></a>*/}
        {/*</div>*/}
        {/*<div className="picture-describe">*/}
        {/*<a href="#"><img src={Tent3} className="picture"/>*/}
        {/*<p>￥50/天 牧高笛户外装备 防暴雨铝杆三季帐三人双层帐野外野营帐篷 军绿色</p></a>*/}
        {/*</div>*/}
        {/*<div className="picture-describe">*/}
        {/*<a href="#"><img src={Knapsack1} className="picture"/>*/}
        {/*<p>￥40/天 户外尖锋 山地骑行包运动双肩包旅行旅游背包 </p></a>*/}
        {/*</div>*/}
      </div>
    )
  }
=======
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
            products:[]
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




>>>>>>> rent exchange
=======
>>>>>>> want-new
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
=======
  constructor(props) {
    super(props);
    this.state = {
      products:[]
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
>>>>>>> rent exchange
}
export default Rent;
