const initialState=[
    {productId:"001",productName:"Pizza",image:"images/pizza.jpg",title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",price:12,quantity:10},
    {productId:"002",productName:"Hamburger",image:"images/Hamburger.jpg",title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",price:16,quantity:0},
    {productId:"003",productName:"Bread",image:"images/bread.jpg",title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",price:13,quantity:10},
    {productId:"004",productName:"Pizza",image:"images/Cake.jpg",title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",price:15,quantity:10}
]
const listProduct=(state=initialState,action)=>{
    return state
}
export default listProduct