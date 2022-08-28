const express = require("express");
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

const products = [];

app.get("/food", (req, res) => {
    return res.json(products);
});

app.post("/food", (req, res) => {
    const { name, price } = req.body;

    const product = {
        name,
        price,
    };

    products.push(product);

    return res.status(201).json(product);
});

app.listen(3000, () => console.log("Server is runnig"));
