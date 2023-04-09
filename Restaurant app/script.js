const summaryOrderArray = []
const summaryOrder = document.getElementById('feed')
const orderNowBtn = document.getElementById('orderBtn')
const completeOrderBtn = document.getElementById('complete-order-btn')



completeOrderBtn.addEventListener("click", function(){
    document.getElementById('modal').style.display = "none"

})
orderNowBtn.addEventListener("click", function(){
    document.getElementById('modal').style.display = "block"
})

document.addEventListener("click", function(e){
    if(e.target.id){
        handleAddClick(e.target.id)
    }else if(e.target.id){
        completeOrder(e.target.id)

    }
})

function completeOrder() {
    console.log("your order is on the way!")
}

function renderSum() {
    let sum = 0
    const price = "Price"
    for (let item of summaryOrderArray) {
        sum+= item.price
    }
    document.getElementById('summary').innerHTML = `${price} ${sum}$`
}


function renderBasket(){
    let basket = ''
        for (let orderEntry of summaryOrderArray) {
            basket+= `<div>${orderEntry.price}$</div>  ${orderEntry.name} <button id="remove-btn">remove</button><br>`
        }

        document.getElementById('basket').innerHTML = `Products: ${basket}`


}



 
function handleAddClick(menuItemId){
    const menuObj = menuArray.filter(function(food){
        return menuItemId === food.id
    })[0]
        
        console.log(menuObj.price)
        summaryOrderArray.push({price: menuObj.price, name: menuObj.name})
        console.log(summaryOrderArray)
        renderSum()
        renderBasket()

}



function renderMenu() {
    let newFoodObj = ``

    menuArray.forEach(function(menuItem){
        newFoodObj+=
        `
     <div>
        <div>
        
            <img 
            class="menuItem-img" 
            src="photos/${menuItem.image}"
            >
            <div>
            ${menuItem.name}
            ${menuItem.price}$
            </div>


            <div>
            ${menuItem.ingredients}
            </div>

        
            
            
        </div>
            <button id="${menuItem.id}">+</button>
        </div>
    `
    })
    
    document.getElementById('feed').innerHTML = newFoodObj

    

}






renderMenu()




