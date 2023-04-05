const summaryOrderArray = []
const summaryOrder = document.getElementById('feed')

document.addEventListener("click", function(e){
    if(e.target.id){
        handleAddClick(e.target.id)
    }
})

function handleAddClick(menuItemId){
    const menuObj = menuArray.filter(function(food){
        return menuItem === menuItemId
    })
        
        console.log(menuObj)
}

function render() {
    let newFoodObj = ``

    menuArray.forEach(function(menuItem){
        newFoodObj+=
        `
     <div>
        <div>
        
            <img 
            class="menuItem-img" 
            src="/photos/${menuItem.image}"
            >
            <div>
            ${menuItem.ingredients}
            </div>

            ${menuItem.price}

        
            ${menuItem.name}
            
        </div>
        <button id="${menuItem.id}">+</button>
        
     </div>
    `
    })
    
    document.getElementById('feed').innerHTML = newFoodObj

}






render()

// summaryOrder.innerHTML = summaryOrderArray


// // function handleLikeClick(tweetId){ 
//     const targetTweetObj = tweetsData.filter(function(tweet){
//         return tweet.uuid === tweetId
//     })[0]


