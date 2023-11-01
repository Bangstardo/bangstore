// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to

const productsArray = [
    {
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
        title: "small quark",
        price: 4.99
    },
    {
        id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
        title: "teen quark",
        price: 19.99
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
        title: "bigboy quark",
        price: 39.99
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };