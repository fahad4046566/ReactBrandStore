1/14/2026

# react Ecommerce web 
   ## Router Setup and create componenets
-step 1 : create components Header.jsx Nav.jsx , HeroSection. ,Services.jsx , Trusted.jsx,Footer.jsx
in src  :  Contact.jsx , Error.jsx
Home.jsx , About.jsx , Product.jsx ,,   SingleProductjsx, Cart.jsx,ErrorPage.jsx  --ok
-step 2 : import BrowserRouter as Router Routes and Route in App.jsx and wrap with BrowserRouter  to app  --ok
 -step 3 : in Router create routes and in which create route --ok
-step 4 : in first route path = "/" and element is Home --ok
in second route path = "/about" and element is About
same as make product,contact,singleProduct ,cart , ErrorPage  --ok  
## styled Components
-step 5 : make a global css file import in app.jsx and wrap Routes with GlobalCss
-step 6 :  make a ThemeProvider in Styled component folder and wrap Router with it in APp.jsx
      --- these steps should not be used properly try own styling 
-step 7 : In Header Comp in return MainHeader in which Navlink create in NAvLink and in which create img tag in which logo will exist after Navlinik import Nav --ok
-step 8 : in nav make div in which ul tag in ul make list create Home , About, Products,Contact , Cart in separte separte in ul NavLink  give correct paths to Navlinks !show cart with icon --ok
-step 9 : with icon make span and give it dummy value 10 and style  --ok
-step 10 : style Header Mobile responsive with hamburgur and cross icons with functioanlity --ok 
-step 11 : and on route top import Header for every page --ok
    Nav is in Header and Header is top of Route (step11)  --ok
-step 12 : Import HeroSection in Home and About pages return part --ok
-step 13 : Make heroSection with left side data text and button for shop now in navlink and right side image tag in figure tag and style  --ok
 ## Servies and Trusted Part
-step 14 : import Services and trusted in Home after HeroSection --ok
-step 15 : make service section with css with 4 grid items Truk sheild securePayment money back icons  make trusted with 5 icons in row --ok
## Contact Page
-step 16 : take iframe tag from google map link and put in Contact.jsx check console and resolve erors and style
 -step 17 : make form  name, email, phonenumber, textarea, submit
-step 18 : use Formspree  for take link and paste in forms>action 
## Footer
-step 19 : import Footer in App  after routes and stlyle with whatsAPP FAcebook --ok
 ## Error page
-step 20 : make error page 404 in whic a button go back to homepage --ok
# functionality Part
## Context Api
-step 21: In componen make folder conrext and in which file ProductContext.jsx --ok
-step 22: make variable AppContext = createContext() , create AppProvider arrow function in which pass chioldren as an argument and export Approvider and wrap App in main.jsx  --ok
-step 23: in function return AppContext.provider wrraper and in which pass chhildren and give value to provider and export --ok
-step 24: make custom hook useProductContext and return AppContext in useContext and export. --ok
## Axious fetch Api Data
-step 25: after AppContext make API  = "https://api.pujakaitem.com/api/products" not working
make function getProducts in which pass "url" in which function through axious 
after AppProvider make useEffect in which a function will call APi --ok
## useReducer Hook
-step 26: In AppProvider make useReducer Hook intialState is a object that are define above AppProvider in Which keys are isLoading , isError.products and featuredProducts that values are false,false,[],[] respectively and bottom return give value ...state in object
-step 27: make folder reducer make file ProductReducer.jsx in which state action and import reducer in ProductContext --ok
-step 28: in getProducts function at last call dispatch in which type:MY_API and in payload a variable that stored api fectched data --ok
-step 29:and before try catch call dispatch and give setLoading wrap getProducts material in try catch in catch dispatch(type:API_ERROR)--ok
-step 30: in file(27) condition if action.type is setLoading return ..state and isLoading become true and as a tis otherwie use switch first case is SET_LOADING and return  ..state and isLoading become true --ok
2nd case API_DATA make variable featureData in which action.payload filter(cur return cur.featured is true) in which featured products will come and this case in return ...state and isLoading become false products: action.payload featuredProducts:featuredData
3rd case API_ERROR  ...state and isLoading become false and isError become true  --ok
## Feature Section
-step 31: make file in compo FeatureProduct and inmport it in Home after heroSection --ok
-step 32: in file (31) import  useProductContext in return hooks are called isLoading , featureProducts from useProductContext --ok
-step 33: and make if isLoading return div in which loader and below if return div CHeck Now and in div Our Feature Services 
in div make map loop featuredProduct and return key elem.id and return spread ...elem --ok
-step 34: make file Product.jsx and receive elem as a prop and in  make a object id , name , image , price , category = prop  --ok
in which return NAvlink to `/singleProduct/${id}` in which div in which figure in which image  src {image} and below figurecaption in which {category}  below figure give name and below div price
pass price in component {<FormatPrice price ={price}/>}
## Currency Number Format
-step 35: make folder Helpers new file FormatPrice.jsx and import in Product.jsx --ok
-step 36: in file(35) take price as a prop in return Intl.NumberFormat("en-PK",{stle:currency , curreny:"PKR",maxFractionalDigit:2 }).format(price/100) --ok
## SIngle Product Page
-step 37:in ProductContext.jsx below getProducts meke async function getSingleProduct  make try catch and in try make variable singleProduct make dispatch type SET_SINGLE_PRODUCT payload singleProduct and in catch type SET_SINGLE_ERROR --ok
-step 38: in initailState make more keys isSingleLoading,singleProduct values are false , {} repectively --ok
-step 39: In App>provider give one more value getSIngleProduct  --ok but error
-step 40: In ProductReducer make case SET_SINGLELOADING  --ok
in return ...state isSingleLoading:true --ok
make case SET_SINGLE_PRODUCT that return ...state , isSingleLoading false , singleProduct is action.payload make same case for API_ERROR --ok
-step 41:In SingleProduct import useParam id = useprams const API = "api "  and import productContext in main return const{getSIngleProduct,isSingleLoading, singleProduct} = useProductContext --ok
-step 42: make useEffect in this call function in this (`${API}?id=${id}`) 
after Effect if isSingleLoading and return Loading --ok
-step 43: destructure all data from singleProduct --ok
## Page Navigation and Single Page
-step 44: make compo pageNavigation take prop title in which return NavLink to "/" Home and give {title}  --ok not clear
-step 45: in SingleProduct  return <PageNAvigation title ={name}> --ok
-step 46: (43) return all things destructured in --ok
-step 47: make compon for image MyImage image ={image} and import --ok
-step 48: in MyImage compo receive prop like {imgs=[{url:""}]} because in APi image is in array return make two  rows 1st rows have 4 column for photos make div in ehich apply map on prop --ok
in map two argument curElem and index and key is index
-step 49: in second row means div  take image tag src={prop wala imgs[0].url} but this is sattic for first image --ok
-step 50: make state for dynamic click image for (49) mainImage,setMainImage = useState(imgs[0]) --ok
src={mainimgs.url} --ok
-step 51: in image tag onClick setmainimage(elem) --ok
## Stars review
-step 52: make Star.jsx file --ok
-step 53: in Singleproduct after name Star (52) import --ok
-step 54: in compo(52) make two arguments star review take three starts fill half fill empty star before return const ratingStar= Array.from({length:5},(elem,index)=>{let number = index + 0.5})
in return span key is index and object {
    stars yani first argu > index +1 ?(pass icon full star here) : stars> number ? (half iocn pass here):(empty icon pas here)

}
in actual return pas {rating star} and style and write customer review
 ## Color Picker (not in api)
-step 55:  In SingleProducts take hr and then {stock > 0 && <AddToCart product = {singleProduct}>}
-step 56: make AddtoCart comppo in which distruct product in project id colors stock 
-step 57: in compo(56) p tag in which Colors and destructed colors apply map on it two argu currColor index return in loop make button key index className { bg:curcoolor} in button {curcolor} 
-step 58: make state color setColor by default (colors[0])
and in button color === curColor ? checkmark : null 
on button onClick setColor(currcolor)
## Product Quantity
-step 59: after color section 
-step 60: make compo CartAmountToggle amount is amount prop two functions setDecrease is setDecrease and setIncrease is setIncrease props --ok
-step 61: make state amount setamount is 1 --ok
-step 62: make two functions incre decre (60)  in decre func if amount is > 1 set amount amount-1 else setMount(1)
in decre amount < stock setaaamount (amount + 1)  else setAmount(stock) --ok
-step 63:in compo(60) take all props (60) in which use two butons for incre and decre --ok
-step 64: after color picker section make NavLINK to"/cart" for Add to CArt --ok
## Product Page
-step 65: in Product page make div in which a div in which FIlterSection in first div create section in which div and in which ProductList compo --ok
-step 67: make compo FilterSection Sort.jsx and import in Product --ok
-step 68: in context folder make file filterContext.jsx --ok
-step 69: make FilterContext=createContext  in return FilterContext.provider value is ...state and children like context
custom hook useFilterContext in return useContext(FilterContext) --ok
and export 
-step 70: in main.jsx and wrap FilterContextProvider to App --ok
-step 71: in Context file copy useProductContext and import in new context(69) const{products} = useProductContext() --ok
-step 72: below (71) make useReducer above (71) make object initialState that keys are filter_products and all_products keys are [],[] --ok
-step 73: below reducer make useEffect and dependency is products in which dispatch call type:LOAD_FILTER_PRODUCT and payload is products --ok
-step 74: make FilterReducer.jsx in which a function switch statement 1st case LOAD_FILTER_PRODUCTS return ...state,  filter_products , all_Products are [...action.payload] ---ok
-step 75: import useFilterContext in products.jsx store in filter_products --ok
-step 76: import reducer from filterReducer in filterContext --ok
## Grid view (I think optional because i only use grid by default)
-step 77: in FilterContext in initialState make key grid_view : true
-step 78: above Effect make func setGridView in which return dispatch type SET_GRIDVIEW and pass it in FilterContext.provider
-step 79: in filterReducer.jsx make case in SET_GRIDVIEW and return ...state , grid_view: true
## DropDown Menu
-step 80: create file Sort.jsx make two divs  product available and dropdown  --ok
-step 81: copy filter_products.length import and and put in first div
-step 82: take form in third div take label under this select its name and id is "sort" in which select take 4 options price lowest higest a - z z-a  --ok
-step 83: take onClick on select func is sorting --ok
-step 84 : in FilterCOntext make function sorting and export in provider value in intialState sorting_value is lowest by default
-step 85: in sorting method pass event and make variable userValue in which e.targ.val  and call dispatch type  GET_SORT_VALUE and payload userValue
-step 86:BELOW this (85) make useEffect in which dispatch function in type:SORTING_PRODUCTS dependencies in products, state.sorting_value --ok
-step 87: in FilterReducer in filterreducer func make case GET_SORT_VALUE in return ...state , sorting_value : action.payload --ok
-step 88: below return make case SORTING_PRODUCTS in which a variable newSortData and a destructer variable filter_products , sorting_value from state  and below new variable tempSortProduct = [...filter_products] --ok
  ####make global function sortingProduct --ok
-step 89: make if conditions if state.sorting_products === 'lowest' then a function sortingProduct with a and b a.price - b.price return same opposite for highest --ok
make if state.sorting_products a_z then a sort method with a and b a.name.localeCompare(b.name) same as it is for opposite z-a
-step 90: newSortData = tempSortProduct.sort(sortingProducts) --ok
-step 91: at last make return of case (87) ...state,filter_products:newSortData --ok
## Filter Section
-step 92: make file FilterSection in make div in which make form onSubmit preventDefault  in which form input tag onChange is func updateFilterValue and value is text name is text --ok
-step 93: in FilterContext make key filters and value is object in object key text value "",category:all,company:all --ok
-step 94: destructure filters:{text},updateFilterVAlue in (93) from useFIlterContext 
-step 95: in FilterCOntext below sort fun make func updateFilterValue pass it event in func make variable name for e.targ.name and make variable value for e.tar.val  in retun dispatch type: UPDATE_FILTERS_VALUE payload name value and import this func in FilterSection --ok
-step 96: in FilterReducer make case UPDATE_FILTERS_VALUE in that case destructure name, value from action.payload in that case return ...state and filters:{...state.filters},[name]:value --ok
-step 97: in effect (86) give dependency state.filters make dispatch type FILTER_PRODUCTS --ok
-step 98: below case (96) make case FILTER_PRODUCTS in that case 
destruct all_products = state ; tempFilterProduct = [...all_product] and in that case return ...state , filter_products:tempFilterProducts --ok
-step 99: before retutn destructure text from state.filters --ok
make if text in if  tepmFilterPorduct  = in which a filter with argume  in return argu .name.toLOwerCase.includes(text) --ok
## Category Wise Filter
-step 100: In FilterSection make variable categoryonlyData in which a function getUniwueData(all_Products,"category") --not clear
// all_product is imported 
-step 101: above variable(100) define function(100) with 2 argu data,property in this func make variable newVal in which data.map and in return curelem[property] // argu wala --ook
-step 102:  for unique value  rturn newval = ["All",...new Set(newval)] --ok
-step 103: for show data in Ui in FilterSection h3 for Category  --ok
and apply map loop on categoryonlyData with two argu curElem,index  take buton key index name category value {currElem} and onClick updateFilterValue in butoon {currElem} --ok
-step 104:in FilterReducer below if text make if(category) same 
text but argum.category === category --ok
## Company Wise Filter
-step 105: copy categoryData replace with comapnyData , "comapny" --ok
-step 106: below (103) make div h3 for Company below make form in which select name company onClick updateFilterValue --ok 
-step 107: in select apply loop on companyData same to same (103 category) like button  --ok
-step 108: make if condition same to same (104 but replace cartegory with company) above  --ok
### ALL category  problem 
if(category!== "all") if(company!=="all") 
## color wise filter (color is not available)
-step 108: copy(105) replace with colorsData variable and in intialstate in filters add object colors:all
-step 109: below getUniqueData func make if attr==="colors" // attr secong argu of func // then write newVal = newVal.flat() //
this is done for unique value
-step 110: below filter comapny div make div in which h3 for colors below this make div in which apply loop on colorsData in loop two argu curcolor, index in return make button in which {color === curColor ? "": null} value is curColor key is index name : color 
-step 111: onCLick updateFilterValue
-step 112: in FilterReducer below company (108) make if color tempFilterProduct = tempFilterProduct.filter(curElem) curElem.colors.includes(color) return ...state , filter_products = tempFilterproduct 
-step 113: in loop(110) make if curColor === "all" pass entire return button in it (110) just copy not cut
-step 114: in filterReducer in if color write just color !== "all"
-step 115: in button color condtion where "" was, put tick icon
## Range price Filter  
-step 116: below Color section make range price div make h3 for Price in p Formatprice compo import pass prop price={price} and tin top in filters import min price maxprice --ok half
-step 117: below this compo take input range min = minPrice max maxPrice  value is price onChange updateFilterVAlue name is "price" 
-step 118:in FilterReducer make if (price) tempFilterProduct = tempFilterProduct.filter 1 argu curElem curElem.price<price return same things 
## Clear Filter Button
-step 119: make button below range in div onClick clearFilter --ok
-step 120: in FilterContext define this func(119) in which dispatch type CLEAR_FILTERS in provider define or put this func --ok
-step 121: IN FilterReducer in make case CLEAR_FILTERS that return ...state , filters:{...state.filters,and all intialState wala data }
## Price Range maximum price
-step 122: in filterReducer top below case LOAD_FILTER_PRODUCTS make variable priceArr = action.payload.map(curelem curelem.price) --ok
-step 123: make variable in which priceArr.reduce() two argu initialval, curElelm in which Math.max(initialVal,curVal)
in that case filters:{...state.filters,maxprice,price:maxPrice} and in initialState in filters mazPrice:0,Price:0,minPrice:0  --ok
##  Add to Cart portion
-step 124: in AddToCart above add to cart button make navlink around button Onclick on Navlink {()=>addtoCart(id,amount,color,product )} --ok
-step 125: make cart.Context.jsx and cartReducer --ok
-step 126: in cartCOntext make variable CartContext = createContext() --ok
-step 127: make func CartProvider in which children prop return <CartContext.Provider value={{...state,addToCArt}}>{children}<CartContext.Provider/> --ok
-step 128: export CartProvider and in main.jsx and wrap with CartProvider and import --ok
-step 129: in cartprovider before return const addtoCart=(id,amount,color,product )=>{} --ok
-step 130: before this(129) make useReducer  --ok
-step 131: before this(130) define initialState in this cart:[],total_item : "" , total_amount : 0 , shipping_fee : 500  --ok
in addToCArt func make dispatch type: ADD_TO_CART paylod:{addtoCart k saary argu paste here}  --ok
-step 132: make global hook useCartCOntext in which useContext(CartContext) and export  --ok
-step 133: in CartReducer import reducer in CartContext ok inCartReducer pass state action  in func make if in func  action.payload.type === "ADD_TO_CART" in which let{addToCart k saary argu } = action.payload --ok
-step 134: in AddToCart.jsx import func addToCart from useCartContext and import  --ok
## Add to Cart ui 
-step 135: in that case (133) return {...state,cart:[],}  --ok
-step 136: before return make variable cartProduct ; below this cartProduct ={
    id: id+color,name:product.name,color,amount,image:product.image[0].url,price:product.price,max:product.stock} --ok
-step 137: in return in cart[...state.cart,cartProduct] --ok 
-step 138: in cart.jsx import cart  from useCartContext --ok
-step 139: in cart.jsx in return make div in which div in p tag Item below this p tag for price  below this p Subtotal Remove 
below this hr  --ok
-step 140: below this make div in which apply loop on cart in which retutn new compo CartItem in return ={keycurElem.id}{...curElem} --ok
-step 142: make file CartItem compo in this take prop id,name,image,coor,price,amount in argu in return div in which div image below this div name below this color below this price import compo Format price in which pass price below this quantity import CartAmountToggle copy  setDecrease andincrease and paste in CartItem.jsx an din ui quantity part put or paste these code  below these subtotal import FormatPrice in which price={price*amount} below this remove icon--ok
## Remove item 
-step 143:on icon onClick ={()> removeItem(id)} 
-step 144: define this func in CartContext get id without{} in  this func typeREMOVE_ITEM payload : id in CartReducer make if action.type===REMOVE_ITEM in return ...state, cart:updateCart before this return make variable updatedCart = state.cart.filter((curelem)=>curElem.if!===action.payload) 
-step 145: inCartItem import this func RemoveItem from useCartContext 
## Loacal Storage for cart items
-step 146: in CArtContext before return make useEffect in dependency state.cart in which localStorage.setItem("anykey",JSON.stringyfy(state.cart))
 -step 147: in initialState cart:getLocalCArtData
 -step 129: above this define this func (147) in this make variable newCartData = localStorage.getItem("anykey") below this make if newCartData === [] then return [] else return js=JSON.parse(newCArtData)
## continue Sopping and clear cart button
 -step 130: in cart at last make buttons continue shopping and 2nd is Clear Cart on click clearCart define this func in CartContext below remove item in func type:CLEAR_CART pass this func as a provider in value  in CartReducer below case remove if(action.type === CLEAR_CART) in return ...state, cart:[]
  -step 131: In Cart.jsx make if cart.length === 0 div no cart item 
 ## handling Existing Items
-step 132: In cartReducer.js top in function make variable existingProduct = state.cart.find(elem) => elem.id === id    -step 133: below this if else in else all material is pasted cartProduct and return  wala in if(existingProduct) in which make variable updatedProduct = state.caart.map(elem) in which if ( relem.id===id) in which make variable newAmount = elem.amount+amount and return {...elem,amount:newAmount} and in else return elem and in map return ...state,cart:updatedProduct 
 -step 134: in (133) below newAmount make if newAmount>= elem.max in which newAmount = elem.max
## Toggle increment decrement
 -step 135: in cartItem.jsx in CartAmountToggle in setDecrease(id) and in setIncrease(id) 
  -step 135: in Cartacontext define those funcs(135) in which pass id as argu dispatch(type:"SET_DECREMENT , payload:id ) same copy this func and make setIncrement  type:SET_INCREMENT and pass them funcs in provider  
   -step 136: In Cartreducer if(action.type === "SET_INCREMENT") in which copy updatedProduct (133) 1st line in which if(elem.id === acion.payload ) in which let decAmount = elem - 1 below this if decAmount<=1 then return decAmount-1 and above if in return ...elem,amount:decAmount in else return elem and end return ...state, cart:updatedPrroduct  same as tis for increment
 ##  Update Cart value 
  -step 137: in CartContext in effect localstorage wla make dispatch type: CART_TOTAL_ITEM 
   -step 138: in Reducer make CART_TOTAL_ITEM make variable updatedItemVal = state.cart.reduce (initial,elem) in which let  {amount} = elem ; initial = initial + amount
   return initial actual return ...state,totalItem:updatedItemVal and paste in nav total_item
## Calculate value
  -step 140: in cart make div in which div in which div p subtotal: below this p <FormatPrice price={total_price}>
  below divs <FormatPrice price={shipping_fee}> below this  <FormatPrice price={shipping_fee+total_price}>

 -step 139: in effect make dispatch(type:CART_TOTAL_PRICE) in reducer make if cart-total in which let total_price = state.cart.reduce((initial,elem)=>{
    let {price,amount} = elem;
    initial = initial + price * amount 
    return initial
 })
return {...state,total_price}
