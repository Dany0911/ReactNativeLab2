import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer IupvZA5akKFg83jkU0yeQB_Ez4xEvWZusDXbVDnuQzfgMWkQGmY4iGqi_14QI8syYAin6LBG1h5FPNh4seGlfWqYmwPIN7407PfJFaNBQy7L5eXKPkk8uz_0bJQzZXYx"
    },
});