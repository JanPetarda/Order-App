const summaryOrderArray = []
const summaryOrder = document.getElementById('feed')
const orderNowBtn = document.getElementById('orderBtn')
const completeOrderBtn = document.getElementById('complete-order-btn')
const finalMessage = document.getElementById('final-message')


completeOrderBtn.addEventListener("click", function(){
    document.getElementById('modal').style.display = "none"

})
orderNowBtn.addEventListener("click", function(){
    document.getElementById('modal').style.display = "block"
})

document.addEventListener("click", function(e){
    if(e.target.dataset.add){
        handleAddClick(e.target.dataset.add)
    }else if(e.target.dataset.order){
        completeOrder(e.target.dataset.order)
    } else if (e.target.dataset.remove){
        removeProduct(e.target.dataset.remove)
    }
})

function completeOrder() {
    finalMessage.innerHTML = "Your order is on the way!"
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
            for (let i = 0; i < summaryOrderArray.length; i++) {
                
                let orderEntry = summaryOrderArray[i]

                basket+= `
                <div>${orderEntry.price}$</div>  
                <div> ${orderEntry.name} </div>
                <button data-remove = ${i}>remove</button><br>
                `
            }
                document.getElementById('basket').innerHTML = `Products: ${basket}`
    }


function removeProduct(product) {
    summaryOrderArray.splice(product, 1)
    renderSum()
    renderBasket()
}
        
function handleAddClick(menuItemId){
    const menuObj = menuArray.filter(function(food){
        return menuItemId === food.id
    })[0]
        summaryOrderArray.push({price: menuObj.price, name: menuObj.name})
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
            <button id="${menuItem.id}"
            data-add= ${menuItem.id}
            >+</button>
        </div>
    `
    })
    
    document.getElementById('feed').innerHTML = newFoodObj
}

renderMenu()




