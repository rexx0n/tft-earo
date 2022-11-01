// webpack.mix.js

let mix = require("laravel-mix");

mix.js("./main.js", "dist").sass("./styles/style.scss", "dist").setPublicPath("./");
