const app = require("./src/index");
const mongoose = require("mongoose");

// connect to mongo
mongoose.connect("mongodb://mongo:27017/docker-node-mongo", { useNewUrlParser: true })
 .then(() => console.log("Connected to MongoDB"))
 .catch(err => console.error(err));

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));

process.on("unhandledRejection", e => {
 console.log(e.message);
 process.exit(1);
});