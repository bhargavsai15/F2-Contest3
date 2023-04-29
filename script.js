// Function to load the Data and display to the user

async function loadMenuDetails(menuDetails) {
    let innerHTMLString = '';
    const cardContainer = document.querySelector('.cards-container');
    for (let i = 0; i < menuDetails.length; i++){
        const image = menuDetails[i].imgSrc;
        const name = menuDetails[i].name;
        const price = menuDetails[i].price;
        innerHTMLString += `<div class="card">
                            <img src="${image}" alt="foot-item">
                            <div class="item-info">
                                <p>${name}</p>
                                <p>Price : $ ${price}</p>
                            </div>
                            <button class="btn">Add to cart</button>
                        </div>`;
    }
    cardContainer.innerHTML = innerHTMLString;
}


// Function to load the menu Info using fetch
async function getMenu() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
        const data = await response.json();
        console.log("Menu:");
        console.log(data);
        return data;
    } catch (error) {
      console.log("Error while retriving the menu details:", error);
    }
}

  // Function to take the order
async  function takeOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const burgers = ["Cheeseburger", "Veggie Burger", "Chicken Burger"];
        const order = {
            burgers: burgers.sort()
        };
        resolve(order);
      }, 2500);
    });
  }
  
  // Function for order preparation
 async function orderPrep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  
  // Function for payment
 async function payOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  
  // Function to display thank you message
  function thankyouFnc() {
    alert("Thank you for eating with us today!");
}
  
  
// Function to handle the promises
document.addEventListener('DOMContentLoaded', async ()=> {
    try {
        const menuDetails = await getMenu();
        loadMenuDetails(menuDetails);
        const order = await takeOrder();
        console.log("Order:", order);
        const preparationStatus = await orderPrep();
        console.log("Order Preparation:", preparationStatus);
        const paymentStatus = await payOrder();
        console.log("Payment:", paymentStatus);
        if (paymentStatus.paid) {
          thankyouFnc();
        }
      } catch (error) {
        console.log("Error during the restaurant visit:", error);
      }
})
  
// ----------------------------------------------------------------------------------------------

/* Below Approach is using promise Chaining*/


// Function to load the Data and display to the user

/*async function loadMenuDetails(menuDetails) {
    let innerHTMLString = '';
    const cardContainer = document.querySelector('.cards-container');
    for (let i = 0; i < menuDetails.length; i++){
        const image = menuDetails[i].imgSrc;
        const name = menuDetails[i].name;
        const price = menuDetails[i].price;
        innerHTMLString += `<div class="card">
                            <img src="${image}" alt="foot-item">
                            <div class="item-info">
                                <p>${name}</p>
                                <p>Price : $ ${price}</p>
                            </div>
                            <button class="btn">Add to cart</button>
                        </div>`;
    }
    cardContainer.innerHTML = innerHTMLString;
}
async function getMenu() {
    const response = await fetch(`https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`);
    return response.json();
}
async function takeOrder() {
    let orderDetails = {
        order_items:[],
        order_status:false,
        paid:false
    };
    
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            const burgers = ["Cheeseburger", "Veggie Burger", "Chicken Burger"];
            orderDetails.order_items = burgers.sort();
            resolve(orderDetails);
        }, 2500);
    })
}

async function orderPrep(orderDetails) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            orderDetails.order_status = true;
            resolve(orderDetails);
        }, 1500);
    })
}
async function payOrder(orderDetails) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            orderDetails.paid = true;
            resolve(orderDetails);
        }, 1000);
    })
}
function thankyouFnc() {
    alert("Thank you for eating with us today!");
}
document.addEventListener('DOMContentLoaded', async () => {
    const menuDetails = await getMenu();
    loadMenuDetails(menuDetails);
    takeOrder().
        then(function (orderDetails) {
        console.log("Order details: ",orderDetails);
        return orderDetails;
        })
        .then(function (orderDetails) {
        return orderPrep(orderDetails);
        })
        .then((oderDetails) => {
        console.log("Order Preparation:",oderDetails);
        return payOrder(oderDetails);
        })
        .then((oderDetails) => {
        console.log("Payment Status: ",oderDetails);
            return thankyouFnc();
        })
})

*/




