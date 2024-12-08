DROP DATABASE IF EXISTS eunoia_app;
CREATE DATABASE eunoia_app;


\c eunoia_app;

CREATE TABLE emails (
    email_id SERIAL PRIMARY KEY,
    name_of_email VARCHAR(150) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Products (
    product_id SERIAL PRIMARY KEY,
    type TEXT NOT NULL,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    size  TEXT NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL, -- For inventory management
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    item_count INT NOT NULL CHECK (item_count > 0),
    total_amount NUMERIC(10, 2) NOT NULL, -- Sum of all `order_items.total_price`
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES orders(order_id) ON DELETE CASCADE,
    product_size TEXT NOT NULL,
    taxes INT NOT NULL,
    price_per_unit INT NOT NULL -- Price of the product at the time of the order
);


CREATE TABLE billing_details (
    billing_id SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES orders(order_id) ON DELETE CASCADE,
    full_name VARCHAR(100) NOT NULL,
    address_line1 VARCHAR(255) NOT NULL,
    -- address_line2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100),
    postal_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL -- Ensure it aligns with customer_email in `orders`
);

CREATE TABLE payments (
    payment_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(order_id) ON DELETE CASCADE,
    payment_method VARCHAR(50) NOT NULL, -- e.g., "credit_card", "paypal"
    amount NUMERIC(10, 2) NOT NULL,
    payment_status VARCHAR(20) DEFAULT 'pending', -- e.g., "completed", "failed"
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
