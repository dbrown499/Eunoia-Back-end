
\c eunoia_app;


INSERT INTO Products (type, name, description, size, price, stock, image_url) 
VALUES 
('Sweater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'XS', 125, 10, 'assets/D1F5312F-C63B-41DF-B241-7D81D44676E9.png'),
('Sweater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'S', 125, 20, 'assets/D1F5312F-C63B-41DF-B241-7D81D44676E9.png'),
('Sweater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'M', 125, 20, 'assets/D1F5312F-C63B-41DF-B241-7D81D44676E9.png'),
('Sweater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'L', 125, 20, 'assets/D1F5312F-C63B-41DF-B241-7D81D44676E9.png'),
('Sweater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'XL', 125, 20, 'assets/D1F5312F-C63B-41DF-B241-7D81D44676E9.png'),
('Sweater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'XXL', 125, 10, 'assets/D1F5312F-C63B-41DF-B241-7D81D44676E9.png');

INSERT INTO orders (customer_name, customer_email, total_amount, order_status)
VALUES 
('Jane Doe', 'jane.doe@example.com', 125.00, 'completed'),
('John Smith', 'john.smith@example.com', 125.00, NULL),
('Alice Johnson', 'alice.johnson@example.com', 125.00, NULL),
('Bob Brown', 'bob.brown@example.com', 125.00, 'completed');



INSERT INTO order_items (order_id, product_id, quantity, price_per_unit, total_price)
VALUES 
(1, 1, 2, 125, 250), 
(2, 1, 3, 125, 375),
(3, 1, 2, 125, 250),
(4, 2, 1, 125, 125);


INSERT INTO billing_details 
(order_id, full_name, address_line1, address_line2, city, state, postal_code, country, phone_number, email)
VALUES 
(1, 'Jane Doe', '123 Main St', 'Apt 4B', 'New York', 'NY', '10001', 'USA', '555-123-4567', 'jane.doe@example.com'),
(2, 'John Smith', '456 Elm St', NULL, 'Los Angeles', 'CA', '90001', 'USA', '555-987-6543', 'john.smith@example.com'),
(3, 'Alice Johnson', '789 Maple Ave', 'Suite 101', 'Chicago', 'IL', '60601', 'USA', '555-456-7890', 'alice.johnson@example.com'),
(4, 'Bob Brown', '101 Pine St', NULL, 'Houston', 'TX', '77001', 'USA', '555-321-9876', 'bob.brown@example.com');


INSERT INTO payments (order_id, payment_method, amount, payment_status)
VALUES 
(1, 'credit_card', 75.00, 'completed'),
(2, 'paypal', 100.00, 'pending'),
(3, 'paypal', 100.00, 'pending'),
(4, 'credit_card', 50.00, 'failed');
