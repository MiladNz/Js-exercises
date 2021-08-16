const searchProduct = document.querySelector('#search-product');
const productsDiv = document.querySelector("#products");
const products = [
    { title : "Node js course" },
    { title : "Mastering react.Js course" },
    { title : "Advanced javascript (js) course"} ,
    { title : "Git - Github course" },
    { title : "Vue.js course" },
    { title : "Angular course" },
    { title : "HTML and CSS course" },
];

const filters = {
    searchItem : ''
};

function renderProducts(_products,_filters){
   const filteredProducts = _products.filter( item => {
        return item.title.toLowerCase().includes(_filters.searchItem.toLowerCase());
    })
    productsDiv.innerHTML = "";
    //console.log(filteredProducts);
    filteredProducts.forEach(element => {
        const p = document.createElement("p");
        p.textContent = element.title;
        productsDiv.appendChild(p);
    });
}

//renderProducts(products,filters);

searchProduct.addEventListener("input", (e) =>{
    filters.searchItem = e.target.value;
    renderProducts(products,filters);
});
