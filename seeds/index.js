const mongoose = require("mongoose");
// requiring models to seed
const Product = require("../models/Product");
// requiring seed texts
const {
    adjective,
    sku,
    channels,
    power,
    status,
    brandName,
    component,
    receiverImages,
    amplifierImages,
    cdPlayerImages,
    networkPlayerImages,
} = require("./seedHelpers");

mongoose.set("strictQuery", true);

// connecting mongodb
async function connectDb() {
    try {
        await mongoose.connect("mongodb://localhost:27017/pidb");
        console.log("DB Connected");
    } catch (e) {
        console.log(e.message);
    }
}

connectDb();

// generate single random array item
const randEl = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

// seed function
const seedDb = async () => {
    // remove all data from the collection, if already populated - all will be removed
    await Product.deleteMany({});
    // Seed new data to the collection
    for (let i = 0; i < 50; i++) {
        const componentName = randEl(component);
        const randName = randEl(brandName);
        const productImages = (componentName) => {
            if (componentName === "Receiver") {
                return receiverImages;
            } else if (componentName === "Amplifier") {
                return amplifierImages;
            } else if (componentName === "CD Player") {
                return cdPlayerImages;
            } else {
                return networkPlayerImages;
            }
        };
        // creating instance of Product model and populate randomly generated texts
        const product = new Product({
            title: `${randName} ${randEl(sku)} ${randEl(
                adjective
            )} ${componentName}`,
            brand: `${randName}`,
            sku: `${randEl(sku)}-${randEl(sku)}-${randEl(sku)}`,
            component: `${componentName}`,
            description: `lorem25 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab delectus quae nihil facere dolorum tempore deleniti reprehenderit id eum. Aliquid dolor unde quisquam vitae maxime aspernatur adipisci magni assumenda.`,
            images: `${productImages(componentName)}`,
            channels: `${randEl(channels)}`,
            power: `${randEl(power)}`,
            status: `${randEl(status)}`,
        });

        // inserting data to mongodb
        await product.save();
    }
};

// calling seedDb function and close database connection
seedDb().then(() => {
    mongoose.connection.close();
});
