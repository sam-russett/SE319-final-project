require("dotenv").config();

// const productsData = 
const connectDB = require("./config/db");
const Product = require("./models/products_template");

connectDB();

const importData = async () => {

    try {
        await Product.deleteMany({});

        await Product.insertMany(productsData);

        console.log("Data Import Successful");

        process.exit();

    } catch (error) {
        console.error("Error with data import");
        process.exit(1);
    }
};

importData();