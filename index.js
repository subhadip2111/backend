const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const productRecommendations = {
    1: [
        { id: 1, name: "Product 1", price: 20 },
        { id: 2, name: "Product 2", price: 25 },
        { id: 3, name: "Product 3", price: 30 }
    ],
    2: [
        { id: 4, name: "Product 4", price: 22 },
        { id: 5, name: "Product 5", price: 27 },
        { id: 6, name: "Product 6", price: 32 }
    ],
    3: [
        { id: 7, name: "Product 7", price: 24 },
        { id: 8, name: "Product 8", price: 29 },
        { id: 9, name: "Product 9", price: 34 }
    ]
};

app.get('/recommended-products', (req, res) => {
    const variantId = req.query.variant_id;

    if (!variantId || !productRecommendations[variantId]) {
        return res.status(400).json({
            error: "Invalid or missing variant_id. Please provide a valid variant_id (1, 2, or 3)."
        });
    }

    res.json({
        products: productRecommendations[variantId]
    });
});

app.listen(port, () => {
    console.log(`API running on port ${port}`);
});