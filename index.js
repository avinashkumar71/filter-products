
(async function main(){
        const container_element = document.getElementById('container');
        const search_element = document.getElementById('search');
        async function fetchdata(){
        try{
            const response = await fetch('https://fakestoreapi.com/products/')
            return await response.json();
        }catch(error){
            console.log('error');
        }  
    };

    const products = await fetchdata();

    const Showproduct =(product)=>{
        return `<div class="container">
            <div class="box-container" id="box-container">
            <div class="image-container">
                <img src="${product.image}" alt="">
            </div>
            <div class="content-container">
                <h3>${product['title']}</h3>
                <p>${product['description'].split(" ").slice(1,25).join(' ')}</p>
            </div>
            </div>
        </div>`
    }

    function GetAllData(products){
        container_element.innerHTML = '';
        products.forEach((product) => {
            container_element.innerHTML += Showproduct(product);
        });
    }
    GetAllData(products);

    search_element.addEventListener('keyup',function(event){
            const text = event.target.value.toLowerCase();
            const filterproduct = products.filter((product)=>{
                return (
                    product['title'].toLowerCase().includes(text) ,
                    product['description'].toLowerCase().includes(text)
                );
            })
            GetAllData(filterproduct);
    });
    

})();


 





