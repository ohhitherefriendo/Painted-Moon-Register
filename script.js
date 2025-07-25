const Menu = [
    {
         name: 'Crescent Moon Combo',
        uid: 'crescent',
        price: 65,
        display: true,
        image: 'https://i.imgur.com/MHDpAKB.png',
        items: '1 Drink/1 Treat',
        itemType: 'combo'
    },
    {
         name: 'Full Moon Combo',
        uid: 'fullMoon',
        price: 110,
        display: true,
        image: 'https://i.imgur.com/MHDpAKB.png',
        items: '2 Drinks/2 Treats',
        itemType: 'combo'
    },
    {
        name: 'Old Moon Combo',
        uid: 'oldMoon',
        price: 200,
        display: true,
        image: 'https://i.imgur.com/MHDpAKB.png',
        items: '4 Drinks/4 Treats',
        itemType: 'combo'
    },    
    {
         name: 'The Coven Combo',
        uid: 'coven',
        price: 300,
        display: true,
        image: 'https://i.imgur.com/MHDpAKB.png',
        items: '1 of Everything',
        itemType: 'combo'
    },
    {
         name: 'For The Horde Combo',
        uid: 'horde',
        price: 500,
        display: true,
        image: 'https://i.imgur.com/MHDpAKB.png',
        items: '10 Drinks/10 Treats',
        itemType: 'Combo'
    },
    {
       name: 'Vanta Black',
        uid: 'vanta',
        price: 15,
        display: true,
        image: 'https://i.imgur.com/6Suuth2.png',
        items: '',
        itemType: 'Hot Coffee'
    },
    {
        name: 'Aurora Lights',
        uid: 'aurora',
        price: 15,
        display: true,
        image: 'https://i.imgur.com/j8Ul4Se.png',
        items: '',
        itemType: 'Hot Coffee'
    },
    {
    name: 'Blood Moon Blend',
        uid: 'bloodmoon',
        price: 15,
        display: true,
        image: 'https://i.imgur.com/bMNWYXD.png',
        items: '',
        itemType: 'Hot Coffee'
    },
    {
        name: 'Nitro Witches Brew',
        uid: 'nitrowitches',
        price: 15,
        display: true,
        image: 'https://i.imgur.com/dp1hIxI.png',
        items: '',
        itemType: 'Iced Coffee'
    },
    {
        name: 'Iced Lunar Brew',
        uid: 'lunarbrew',
        price: 15,
        display: true,
        image: 'https://i.imgur.com/poKADQX.png',
        items: '',
        itemType: 'Iced Coffee'
    },
    {
        name: 'Iced Shadow Works',
        uid: 'shadow works',
        price: 15,
        display: true,
        image: 'https://i.imgur.com/uNpyEAK.png',
        items: '',
        itemType: 'Iced Coffee'
    },    
    {
        name: 'Apparitions',
        uid: 'apparitions',
        price: 15,
        display: true,
        image: 'https://i.imgur.com/YCkIvkG.png',
        items: '',
        itemType: 'Tea'
    },
    {
        name: 'Midnight Dreams',
        uid: 'dreams',
        price: 15,
        display: true,
        image: 'https://i.imgur.com/7CgSScf.png',
        items: '',
        itemType: 'Tea'
    },
    {
        name: 'Yorkshire Cauldron Brew',
        uid: 'yorkshire',
        price: 15,
        display: true,
        image: 'https://i.imgur.com/85A1N8b.png',
        items: '',
        itemType: 'Tea'
    },
    {
        name: 'Witches Pride',
        uid: 'pride',
        price: 15,
        display: true,
        image: 'https://i.imgur.com/Djx3xrN.png',
        items: '',
        itemType: 'Tea'
    },
    {
        name: 'Iced Hibiscus Hex',
        uid: 'hex',
        price: 15,
        display: true,
        image: 'https://i.imgur.com/rbqTIEh.png',
        items: '',
        itemType: 'Tea'
    },
    {
        name: 'Bacon Egg & Cheese Croissant',
        uid: 'BEC',
        price: 20,
        display: true,
        image: 'https://i.imgur.com/41wDh78.jpeg',
        items: '',
        itemType: 'Savory'
    },
    {
        name: 'Sausage Roll',
        uid: 'roll',
        price: 20,
        display: true,
        image: 'https://i.imgur.com/tESZ5ah.png',
        items: '',
        itemType: 'Savory'
    },
    {
        name: 'Midnight Run Cheesecake Brownie',
        uid: 'brownie',
        price: 20,
        display: true,
        image: 'https://i.imgur.com/xCfBMxf.png',
        items: '',
        itemType: 'Sweet'
    },
    {
        name: 'Cinnamon Charm',
        uid: 'charm',
        price: 20,
        display: true,
        image: 'https://i.imgur.com/QnN7VsQ.jpeg',
        items: '',
        itemType: 'Sweet'
    },
    {
        name: 'Starry Night Cookies',
        uid: 'starry',
        price: 20,
        display: true,
        image: 'https://i.imgur.com/wmsUhD0.jpeg',
        items: '',
        itemType: 'Sweet'
    },

];

function loadItems() {
    let itemList = document.getElementById('itemsContainer');
    let lastItemType = "";
    Menu.forEach(menuItem => {
        if (menuItem.display == true) {
            if (menuItem.itemType  !== lastItemType) {
                itemList.innerHTML += `<div class="col-md-12 col-sm-12 col-12">${capitalizeFirstLetter(menuItem.itemType)}s</div>`;
                lastItemType = menuItem.itemType;
            }

            itemList.innerHTML += 
            `<div class="col-md-3 col-sm-3 col-3 text-center">
                <figure class="card card-product" onclick="addItem('${menuItem.uid}','${menuItem.name}',${menuItem.price},'${menuItem.image}','${menuItem.items}')">
                    <div class="img-wrap">
                        <img draggable="false" src=${menuItem.image}>
                    </div>
                    <figcaption class="info-wrap">
                        <span class="title h6">${menuItem.name}</span>
                        <div class="action-wrap">
                            <span class="btn btn-primary disabled btn-sm"> <i
                                    class="fa fa-cart-plus"></i>$${menuItem.price} </span>
                        </div> <!-- action-wrap -->
                    </figcaption>
                </figure> <!-- card // -->
            </div> <!-- col // -->`
        }
    });
}

function addItem(uid, name, price, image, items) {
    var receiptItem = 'receipt-item-' + uid;
    var priceItem = 'price-item-' + uid;
    var quantityItem = 'quantity-item-' + uid;
    if (document.getElementById(receiptItem)) {
        let orderPriceString = document.getElementById(priceItem).innerText.replace(/\D/g, '');
        let orderQuantityString = document.getElementById(quantityItem).innerText.replace(/\D/g, '');
        let orderPrice = Number(orderPriceString);
        let orderQuantity = Number(orderQuantityString);
        orderPrice += 1 * price
        orderQuantity += 1
        document.getElementById(priceItem).innerText = '$' + orderPrice
        document.getElementById(quantityItem).innerText = orderQuantity
        totalPrice();
    }
    else {
        let receiptList = document.getElementById('tbody');
        let title = `<h6 class="title text-truncate menu-item">${name}</h6>`;
        if (items !== '') {
            title += `<h8 class="title text-truncate staff-help"><i>${items}</i></h8>`;
        }
        receiptList.innerHTML += 
        `<tr class="receipt-item" id="receipt-item-${uid}">
            <td>
                <figure class="media">
                    <div class="img-wrap"><img draggable="false" src="${image}"
                        class="img-thumbnail img-xs"></div>
                    <figcaption class="media-body">
                        ${title}
                    </figcaption>
                </figure>
            </td>
            <td class="text-center">
                <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                    aria-label="...">
                    <button type="button" class="m-btn btn btn-default" onclick="removeItem('${uid}',${price},1)"><i
                            class="fa fa-minus"></i></button>
                    <button type="button" class="m-btn btn btn-default quantity" id="${quantityItem}" disabled>1</button>
                    <button type="button" class="m-btn btn btn-default" onclick="addItem('${uid}','${name}',${price},'${image}')"><i
                            class="fa fa-plus"></i></button>
                </div>
            </td>
            <td>
                <div class="price-wrap">
                    <var class="price" id="${priceItem}">$${price}</var>
                </div>
            </td>
            <td class="text-right">
                <span class="btn btn-outline-danger" onclick="deleteItem('${uid}')"> <i class="fa fa-trash"></i></span>
            </td>
        </tr>`
        totalPrice();
    }
}

function removeItem(uid, price, quantity) {
    if (document.getElementById('receipt-item-' + uid)) {
        let orderPriceString = document.getElementById('price-item-' + uid).innerText.replace(/\D/g, '');
        let orderQuantityString = document.getElementById('quantity-item-' + uid).innerText.replace(/\D/g, '');
        let orderPrice = Number(orderPriceString);
        let orderQuantity = Number(orderQuantityString);
        if (orderQuantity > 1) {
            orderPrice -= price
            orderQuantity -= quantity
            document.getElementById('price-item-' + uid).innerText = '$' + orderPrice
            document.getElementById('quantity-item-' + uid).innerText = orderQuantity
            totalPrice();
        }
    }  
}
function deleteItem(item) {
    document.getElementById('receipt-item-' + item).remove();
    totalPrice();
}

function resetTill(item) {
    document.getElementById('tbody').innerHTML = '';
    totalPrice();
}

function applyDiscount(discount) {
    let discountPercent = (discount / 100);
    let total = document.getElementById('totalCost').innerText.replace(/\D/g, '');
    let discountedTotal = Math.ceil(total - (total * discountPercent));
    document.getElementById('totalCost').innerText = '$' + discountedTotal;
}

function totalPrice() {
    var elements = document.getElementsByClassName('price');
    if (elements.length == 0) {
        document.getElementById('totalCost').innerText = '$' + 0
        generateComment();
    }
    else {
        prices = [];
        for (var i = 0; i < elements.length; ++i) {
            var priceElement = elements[i].innerHTML.replace(/\D/g, '');
            var price = Number(priceElement)
            prices.push(price);
            let total = prices.reduce(function (acc, val) { return acc + val; }, 0)
            document.getElementById('totalCost').innerText = '$' + total
            generateComment();
        }
    }
}

function generateComment() {
    document.getElementById('orderComment').innerText = "";
    document.getElementById('hiddenComment').value = "";
    var itemComments = []
    var itemQuantity = []
    var quantity = document.getElementsByClassName("quantity");
    for (var a = 0; a < quantity.length; a++) {
        itemQuantity.push(quantity[a].innerText);
    }
    var receiptItems = document.getElementsByClassName("menu-item");
    for (var i = 0; i < receiptItems.length; i++) {
        itemComments.push(quantity[i].innerText + "x " + receiptItems[i].innerText);
    }
    document.getElementById('orderComment').innerHTML = `<button class="btn btn-primary btn-lg" id='copyToClipBoard' data-clipboard-target="#hiddenComment">
        <span class="h5">Copy Order Comment</span>
        </button> <br> 
        <div style="color:white;">`+ 
        itemComments.join(' ') + 
        "</div>";
    document.getElementById('hiddenComment').value = itemComments.join(' ');
    let clipboard = new ClipboardJS('#copyToClipBoard');
    clipboard.on('success', function(e) {
        e.clearSelection();
});

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

loadItems();
