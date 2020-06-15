import React from 'react'
import { connect } from 'react-redux';


const ProductSite = (props) =>{
  let idItem = null;
  let products = props.productsState.products;
  const productId = new URLSearchParams(window.location.search).get('id');

  console.log(productId);
  console.log(products)

  
  for(let i=0; i<products.length; i++) {
    if(products[i]._id == productId){
      idItem = i;
      break;
    }
  }

  if(idItem)
    return( 
    <div style={{width: "70%", margin: "auto"}}>
      <div style={{display: "grid", gridTemplateColumns: "50% 50%", gridTemplateAreas: "'img data'", margin: "50px auto"}}>
        <img src={"http://127.0.0.1:3000/images/" + products[idItem].img} style={{ gridArea: "img", height: "30vw", maxWidth: '100%', margin: '0 auto'}}/>
        <div style={{display: "block", textAlign: "left"}}>
          <div style={{margin: "auto auto auto 10px", fontSize: "30px"}}><b>{products[idItem].title}</b></div>
          <div style={{margin: "10px auto auto 10px", fontSize: "25px", color: '#cc3300',}}>{products[idItem].price} zł</div>
          <div style={{margin: "40px auto auto 10px", fontSize: "20px"}}> {products[idItem].desc}</div>
        </div>
        
      </div>
    </div>
    )
  else return <div>Produkt nie istnieje</div>
}

const mapStateToProps = state => ({
    productsState: state.products
})

export default connect(mapStateToProps, {}) (ProductSite);


