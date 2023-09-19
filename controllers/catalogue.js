const Product = require("../models/Product");

// Load a catalogue of all the products with similar components on a single page from the database

function filterDuplicates(products) {
    // used Set to escape duplicate name or porperties
    // Object
    const uniqueProperties = {
        brand: new Set(),
        channels: new Set(),
        power: new Set(),
        status: new Set(),
    };

    // itirate through each products to check all available properties for uniqueness, add to uniqueProperties object
    products.forEach((product) => {
        Object.keys(uniqueProperties).forEach((props) => {
            uniqueProperties[props].add(product[props]);
        });
    });

    // return object with key and unique properties
    return uniqueProperties;
}

module.exports.renderAmplifiers = async (req, res) => {
    const products = await Product.find({ component: "Amplifier" });
    const filters = filterDuplicates(products);
    const {
        brand: availableBrands,
        channels: availableChannels,
        power: availablePower,
        status: stockAvailability,
    } = filters;
    // commented for reference;
    // const availableBrands = Array.from(
    //     new Set(
    //         products.map((product) => {
    //             return product.brand;
    //         })
    //     )
    // );
    res.render("catalogue/productCatalogue", {
        products,
        availableBrands,
        availableChannels,
        availablePower,
        stockAvailability,
    });
};

module.exports.renderReceivers = async (req, res) => {
    const products = await Product.find({ component: "Receiver" });
    const filters = filterDuplicates(products);
    const {
        brand: availableBrands,
        channels: availableChannels,
        power: availablePower,
        status: stockAvailability,
    } = filters;
    res.render("catalogue/productCatalogue", {
        products,
        availableBrands,
        availableChannels,
        availablePower,
        stockAvailability,
    });
};

module.exports.renderNetworkPlayers = async (req, res) => {
    const products = await Product.find({ component: "Network Player" });
    const filters = filterDuplicates(products);
    const {
        brand: availableBrands,
        channels: availableChannels,
        power: availablePower,
        status: stockAvailability,
    } = filters;
    res.render("catalogue/productCatalogue", {
        products,
        availableBrands,
        availableChannels,
        availablePower,
        stockAvailability,
    });
};

module.exports.renderCDPlayers = async (req, res) => {
    const products = await Product.find({ component: "CD Player" });
    const filters = filterDuplicates(products);
    const {
        brand: availableBrands,
        channels: availableChannels,
        power: availablePower,
        status: stockAvailability,
    } = filters;
    res.render("catalogue/productCatalogue", {
        products,
        availableBrands,
        availableChannels,
        availablePower,
        stockAvailability,
    });
};
