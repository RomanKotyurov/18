export default Product;
function Product(props) {
      return(
        <>
          <h3 key={props.index}>{props.product.name}</h3>
          <input value={props.product.name} onChange={(e) => { 
            props.onchange(e, 'name')            
          }} size="66"/>
          <div>Вариант подачи блюда:</div>

          <img src = {props.product.image} width="500" height="400"/>
          <div>Описание:</div>
          <textarea value={props.product.desc} onChange={(e) => { 
            props.onchange(e, 'desc')             
          }} cols='65' rows="7"/>
          <div>Ингридиенты:</div>
          <input value={props.product.ingredients} onChange={(e) => { 
            props.onchange(e, 'ingredients')             
          }} size="66"/>
        </>
      )
}