import mongoose from "mongoose";
import Product from "./model/productModel.js";
import dotenv from "dotenv";

dotenv.config();

const sampleProducts = [
    {
        name: "Men Grey Hooded Sweatshirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 100,
        image1: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
        image2: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500",
        image3: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500",
        image4: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        date: Date.now(),
        bestseller: true
    },
    {
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "Lightweight and comfortable pure cotton t-shirt for everyday wear.",
        price: 150,
        image1: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        image2: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
        image3: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500",
        image4: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500",
        category: "Men",
        subCategory: "TopWear",
        sizes: ["M", "L", "XL"],
        date: Date.now(),
        bestseller: false
    },
    {
        name: "Women Zip Front Relaxed Fit Jacket",
        description: "Stylish relaxed fit jacket with zip front closure.",
        price: 200,
        image1: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
        image2: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500",
        image3: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500",
        image4: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500",
        category: "Women",
        subCategory: "WinterWear",
        sizes: ["S", "M", "L"],
        date: Date.now(),
        bestseller: true
    },
    {
        name: "Women Casual Cotton Dress",
        description: "Comfortable and stylish cotton dress for casual wear.",
        price: 180,
        image1: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
        image2: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
        image3: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
        image4: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500",
        category: "Women",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        date: Date.now(),
        bestseller: false
    },
    {
        name: "Men Slim Fit Jeans",
        description: "Classic slim fit jeans with modern styling.",
        price: 220,
        image1: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
        image2: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=500",
        image3: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=500",
        image4: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500",
        category: "Men",
        subCategory: "BottomWear",
        sizes: ["28", "30", "32", "34", "36"],
        date: Date.now(),
        bestseller: true
    },
    {
        name: "Kids Printed T-shirt",
        description: "Fun and colorful printed t-shirt for kids.",
        price: 80,
        image1: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500",
        image2: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=500",
        image3: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500",
        image4: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=500",
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        date: Date.now(),
        bestseller: false
    },
    {
        name: "Women High Waist Trousers",
        description: "Elegant high waist trousers for formal and casual occasions.",
        price: 190,
        image1: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
        image2: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500",
        image3: "https://images.unsplash.com/photo-1582142306909-195724d33b6e?w=500",
        image4: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500",
        category: "Women",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL"],
        date: Date.now(),
        bestseller: true
    },
    {
        name: "Men Winter Jacket",
        description: "Warm and comfortable winter jacket with hood.",
        price: 350,
        image1: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
        image2: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500",
        image3: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500",
        image4: "https://images.unsplash.com/photo-1548126032-079751a60ad5?w=500",
        category: "Men",
        subCategory: "WinterWear",
        sizes: ["M", "L", "XL", "XXL"],
        date: Date.now(),
        bestseller: true
    },
    {
        name: "Kids Warm Hoodie",
        description: "Cozy and warm hoodie perfect for winter.",
        price: 120,
        image1: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500",
        image2: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500",
        image3: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=500",
        image4: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500",
        category: "Kids",
        subCategory: "WinterWear",
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        date: Date.now(),
        bestseller: false
    },
    {
        name: "Women Summer Tank Top",
        description: "Lightweight and breathable tank top for summer.",
        price: 90,
        image1: "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=500",
        image2: "https://images.unsplash.com/photo-1585914924199-e6a65f2f8f3a?w=500",
        image3: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=500",
        image4: "https://images.unsplash.com/photo-1583391733956-6c78276477e5?w=500",
        category: "Women",
        subCategory: "TopWear",
        sizes: ["S", "M", "L"],
        date: Date.now(),
        bestseller: false
    }
];

async function seedDatabase() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB");

        // Clear existing products (optional)
        await Product.deleteMany({});
        console.log("Cleared existing products");

        // Insert sample products
        const result = await Product.insertMany(sampleProducts);
        console.log(`✓ Successfully added ${result.length} products to the database`);

        // Close connection
        await mongoose.connection.close();
        console.log("Database connection closed");
        
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
}

seedDatabase();
