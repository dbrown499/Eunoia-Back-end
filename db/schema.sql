DROP DATABASE IF EXISTS eunoia_app;

CREATE DATABASE eunoia_app;

\c eunoia_app;



-- CREATE TABLE Users (
--     user_id SERIAL PRIMARY KEY,
--     name VARCHAR(100),
--     email VARCHAR(100) UNIQUE NOT NULL,
--     password_hash VARCHAR(255) NOT NULL,
--     address TEXT,
--     role VARCHAR(50) DEFAULT 'customer', -- could be 'admin' or 'customer'
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

CREATE TABLE Products (
    product_id SERIAL PRIMARY KEY,
    type TEXT NOT NULL,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    size  TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL, -- For inventory management
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE Orders (
--     order_id SERIAL PRIMARY KEY,
--     user_id INT REFERENCES Users(user_id),
--     total_amount DECIMAL(10, 2) NOT NULL,
--     order_status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'shipped', 'delivered'
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE Order_Items (
--     order_item_id SERIAL PRIMARY KEY,
--     order_id INT REFERENCES Orders(order_id),
--     product_id INT REFERENCES Products(product_id),
--     quantity INT NOT NULL,
--     price_at_time DECIMAL(10, 2) NOT NULL -- stores price at time of purchase
-- );

-- CREATE TABLE Cart (
--     cart_id SERIAL PRIMARY KEY,
--     user_id INT REFERENCES Users(user_id),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE Cart_Items (
--     cart_item_id SERIAL PRIMARY KEY,
--     cart_id INT REFERENCES Cart(cart_id),
--     product_id INT REFERENCES Products(product_id),
--     quantity INT NOT NULL
-- );

-- CREATE TABLE Payments (
--     payment_id SERIAL PRIMARY KEY,
--     order_id INT REFERENCES Orders(order_id),
--     payment_method VARCHAR(50), -- e.g. 'credit card', 'paypal'
--     payment_status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'completed'
--     amount DECIMAL(10, 2) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );