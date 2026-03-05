const express = require("express");

const app = express();
const PORT = 3000;

console.log("Starting service... simulating heavy initialization...");

setTimeout(() => {
    console.log("Initialization completed. Service is ready.");

    app.get("/", (req, res) => {
        res.json({ message: "Banking microservice running" });
    });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

}, 30000); // 30 seconds delay