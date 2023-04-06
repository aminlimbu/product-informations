const mongoose = require("mongoose");
const Product = require("../models/Product");
const {
    adjective,
    sku,
    channels,
    power,
    status,
    brandName,
    component,
} = require("./seedHelpers");

mongoose.set("strictQuery", true);

async function connectDb() {
    try {
        await mongoose.connect("mongodb://localhost:27017/pidb");
        console.log("DB Connected");
    } catch (e) {
        console.log(e.message);
    }
}

connectDb();

const randEl = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

const seedDb = async () => {
    // remove all data from the collection
    await Product.deleteMany({});
    // Seed new data to the collection
    for (let i = 0; i < 50; i++) {
        const componentName = randEl(component);
        const randName = randEl(brandName);
        const product = new Product({
            title: `${randName} ${randEl(sku)} ${randEl(
                adjective
            )} ${componentName}`,
            brand: `${randName}`,
            sku: `${randEl(sku)}-${randEl(sku)}-${randEl(sku)}`,
            component: `${componentName}`,
            description:
                "lorem25 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab delectus quae nihil facere dolorum tempore deleniti reprehenderit id eum. Aliquid dolor unde quisquam vitae maxime aspernatur adipisci magni assumenda.",
            channels: `${randEl(channels)}`,
            power: `${randEl(power)}`,
            status: `${randEl(status)}`,
        });
        await product.save();
    }
};

seedDb().then(() => {
    mongoose.connection.close();
});
