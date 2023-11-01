//navbar
const navOpenBtn = document.querySelector("[data-open-nav-btn]");
const closeNavBtn = document.querySelector("[data-close-nav-btn]");
const headerNav  = document.querySelector("[data-header-nav]");
navOpenBtn.addEventListener("click", ()=>{
    headerNav.classList.add("active")
})
closeNavBtn.addEventListener("click", ()=>{
    headerNav.classList.remove("active")
})


//open cart
const cartBtn = document.querySelector("[data-cart-btn]");
const cartContainer = document.querySelector("[data-cart-container]")
cartBtn.addEventListener("click", ()=>{
    cartContainer.classList.toggle("active")
})


// img slides
const imgContainer = document.querySelector("[data-img-container]");
const imgTrack = imgContainer.querySelector("[data-img-track]");
const imgSlides = Array.from(imgTrack.children);
const prevBtn = imgContainer.querySelector("[data-prev-btn]");
const nextBtn = imgContainer.querySelector("[data-next-btn]");
const activeIMG = imgContainer.querySelector(".active-img");
const lbxContainer = document.querySelector(".litbx-container");

imgContainer.addEventListener("click", (e)=>{
    if(e.target.classList.contains("active-img") 
    || e.target.parentElement.classList.contains("active-img") 
    ){
        lbxContainer.classList.add("open");
        displayLightbox()
    }
})
function displayLightbox(){
    lbxContainer.innerHTML = `
            <div class="lightbox-container">
                <div class="active-img"><img  src="./image/image-product-1.jpg" alt=""></div>
                <div class="img-track" data-img-track>
                    <img class="product-a active" data-cur-img src="./image/image-product-1.jpg" alt="">
                    <img class="product-b" src="./image/image-product-2.jpg" alt="">
                    <img class="product-c" src="./image/image-product-3.jpg" alt="">
                    <img class="product-d" src="./image/image-product-4.jpg" alt="">
                </div>
                <button class="left-btn" data-prev-btn><img src="./image/icon-previous.svg" alt="previous"></button>
                <button class="right-btn" data-next-btn><img src="./image/icon-next.svg" alt="next"></button>
            </div>
            <button class="close-litbx-btn">X</button>
    `
    const imgTrack = lbxContainer.querySelector("[data-img-track]");
    const imgSlides = Array.from(imgTrack.children);
    const prevBtn = lbxContainer.querySelector("[data-prev-btn]");
    const nextBtn = lbxContainer.querySelector("[data-next-btn]");
    const activeIMG = lbxContainer.querySelector(".active-img");

    nextBtn.addEventListener("click", ()=>{
        const currentSlide = imgTrack.querySelector(".active");
        const currentIndex = imgSlides.findIndex(slide=> slide === currentSlide);
        
        if(currentIndex === imgSlides.length - 1){
            nextSlide = imgSlides[0] 
        }else{
            nextSlide = imgSlides[currentIndex + 1];  
        }
        nextSlide.classList.add("active");
        currentSlide.classList.remove("active");
        activeIMG.innerHTML = `
        <img src="${nextSlide.src}" alt="">
    `
    })

    prevBtn.addEventListener("click", ()=>{
        const currentSlide = imgTrack.querySelector(".active");
        const currentIndex = imgSlides.findIndex(slide=> slide === currentSlide);
       
        if(currentIndex === 0){
            prevSlide = imgSlides[imgSlides.length - 1] 
        }else{
            prevSlide = imgSlides[currentIndex - 1]; 
            
        }
        prevSlide.classList.add("active");
        currentSlide.classList.remove("active");
        activeIMG.innerHTML = `
        <img src="${prevSlide.src}" alt="">
    `
    })
    imgTrack.addEventListener("click", (e)=>{
        if(e.target.classList.contains("active"))return;
        else
        if(e.target.tagName.toLowerCase()=== "img" && !e.target.classList.contains("active") ){
            const selectedSlide = e.target;
            const currentSlide = imgTrack.querySelector(".active");
            selectedSlide.classList.add("active");
            currentSlide.classList.remove("active");
            activeIMG.innerHTML = `
                <img src="${e.target.src}" alt="">
            `
        }
    })

    const closeBtn = lbxContainer.querySelector(".close-litbx-btn");
    closeBtn.addEventListener("click", ()=>{
        lbxContainer.classList.remove("open")
    })

}
nextBtn.addEventListener("click", ()=>{
    const currentSlide = imgTrack.querySelector(".active");
    const currentIndex = imgSlides.findIndex(slide=> slide === currentSlide);
    
    if(currentIndex === imgSlides.length - 1){
        nextSlide = imgSlides[0] 
    }else{
        nextSlide = imgSlides[currentIndex + 1];  
    }
    nextSlide.classList.add("active");
    currentSlide.classList.remove("active");
    activeIMG.innerHTML = `
    <img src="${nextSlide.src}" alt="">
`
})
prevBtn.addEventListener("click", ()=>{
    const currentSlide = imgTrack.querySelector(".active");
    const currentIndex = imgSlides.findIndex(slide=> slide === currentSlide);
   
    if(currentIndex === 0){
        prevSlide = imgSlides[imgSlides.length - 1] 
    }else{
        prevSlide = imgSlides[currentIndex - 1]; 
        
    }
    prevSlide.classList.add("active");
    currentSlide.classList.remove("active");
    activeIMG.innerHTML = `
    <img src="${prevSlide.src}" alt="">
`
})
imgTrack.addEventListener("click", (e)=>{
    if(e.target.classList.contains("active"))return;
    else
    if(e.target.tagName.toLowerCase()=== "img" && !e.target.classList.contains("active") ){
        const selectedSlide = e.target;
        const currentSlide = imgTrack.querySelector(".active");
        selectedSlide.classList.add("active");
        currentSlide.classList.remove("active");
        activeIMG.innerHTML = `
            <img src="${e.target.src}" alt="">
        `
    }
})


//amount action
const removeBtn = document.querySelector("[data-remove-btn]");
const addBtn = document.querySelector("[data-add-btn]");
const amountForm = document.querySelector("[data-amount-form]");
const amountLabel = amountForm.querySelector("label");
const amountInput = amountForm.querySelector("input");

amountLabel.textContent = amountInput.value;

amountForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    amountLabel.textContent = amountInput.value;
})

addBtn.addEventListener("click", ()=>{
    let amount = parseInt(amountLabel.textContent);
    amount += 1;
    amountInput.value= amount;
    amountLabel.textContent = amountInput.value;
})
removeBtn.addEventListener("click", ()=>{
    let amount = parseInt(amountLabel.textContent);
    amount -= 1;
    if(amount <= 0) {
        amountInput.value= 0;
       
    }else{
        amountInput.value = amount;
    }
    amountLabel.textContent = amountInput.value;
})


//add to cart

const addToCartBtn = document.querySelector("[data-add-to-cart-btn]");
const curImg = document.querySelector("[data-cur-img]");
const curTitle = document.querySelector("[data-cur-title]")
const curPrice = document.querySelector("[data-cur-price]");
const cartListContainer = document.querySelector("[data-cart-list-container]");
const cartAmount = document.querySelector("[data-cart-amount]");
let cartList = JSON.parse(localStorage.getItem("cartList"))||[];

addToCartBtn.addEventListener("click", ()=>{
   
    if(amountLabel.textContent > 0){
        const newItem = createNewItem(
            curImg.src,
            curTitle.textContent,
            curPrice.textContent.replace("$", ""),
            amountLabel.textContent
        )
        cartList.push(newItem);
        
        saveAndRender()
    }
})

function displayCartAmount(){
    let totalAmount = cartList.map(item=> parseInt(item.amount)).reduce((a, b)=> a+b, 0);
    cartAmount.textContent = totalAmount;
}
function createNewItem(img, title, price, amount){
    return{
        id: Date.now().toString(),
         name: title,
          img:img,
           price: price, 
           amount: amount
    }
}
function saveAndRender(){
    addLS();
    renderCart();
}
function addLS(){
    localStorage.setItem("cartList", JSON.stringify(cartList))
}
function renderCart(){
    displayCartAmount();
    if(cartList.length === 0){
        cartListContainer.innerHTML = `
        <p class="empty-text">Your cart is empty</p>
        `
    }else{
       
        cartListContainer.innerHTML = `
        <div class="cart-full">
            <ul class="cart-list">
            
            </ul> 
            <button class="checkout-btn">Checkout</button>
        </div>
        `
        const listContainer = cartListContainer.querySelector(".cart-list");
        removeContainer(listContainer);
        cartList.forEach(item=>{
            const cartItem = document.createElement("li");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img class="cart-img" src=${item.img} alt="">
                        <div class="cart-middle">
                            <p class="cart-name">${item.name}</p>
                            <div class="cart-price">
                                <span class="price-output">${item.amount > 1 ? `${item.price} x ${item.amount }`: item.price }</span>
                                <span class="price-total">$${parseInt(item.price)* parseInt(item.amount)}</span>
                            </div>
                        </div>
                        <button class="remove-cart-btn">
                            <img src="./image/icon-delete.svg" alt="trash"></button>
                `  

            const removeItemBtn = cartItem.querySelector(".remove-cart-btn");
            removeItemBtn.addEventListener("click", ()=>{
                 cartList= cartList.filter((ite)=> ite !== item);
                saveAndRender()
            })
            listContainer.append(cartItem)
        })
        
    }
    
    
}
renderCart()
displayCartAmount()
function removeContainer(container){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}


