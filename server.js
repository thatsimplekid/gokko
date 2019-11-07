const   express                 = require("express");

const   gokko   = express();

gokko.set("trust proxy", 1);

gokko.listen(10000, () => {
    console.log(`Ready - listening on port ${"10000"}`)
})