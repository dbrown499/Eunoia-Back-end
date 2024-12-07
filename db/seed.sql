\c eunoia_app;


INSERT INTO Products (type, name, description, size, price, stock, image_url) 
VALUES 
('sweater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'XS', 125, 10, '/Users/diamondbrown/Documents/Diamond-Project/Major-Projects/Eunoia_app/back-end/images/D1F5312F-C63B-41DF-B241-7D81D44676E9.png'),
('sweater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'S', 125, 20, '/Users/diamondbrown/Documents/Diamond-Project/Major-Projects/Eunoia_app/back-end/images/D1F5312F-C63B-41DF-B241-7D81D44676E9.png'),
('sweater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'M', 125, 20, 'images/D1F5312F-C63B-41DF-B241-7D81D44676E9.png'),
('sweater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'L', 125, 20, 'images/D1F5312F-C63B-41DF-B241-7D81D44676E9.png'),
('weater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'XL', 125, 20, 'images/D1F5312F-C63B-41DF-B241-7D81D44676E9.png'),
('sweater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'XXL', 125, 10, 'images/D1F5312F-C63B-41DF-B241-7D81D44676E9.png');

INSERT INTO orders (customer_name, customer_email, total_amount, order_status)
VALUES 
('Jane Doe', 'jane.doe@example.com', 125.00, 'completed'),
('John Smith', 'john.smith@example.com', 125.00, NULL),
('Alice Johnson', 'alice.johnson@example.com', 125.00, NULL),
('Bob Brown', 'bob.brown@example.com', 125.00, 'completed');



INSERT INTO order_items (product_id, quantity, price_per_unit, total_price)
VALUES 
(1, 2, 125, 250), 
(1, 3, 125, 375),
(1, 2, 125, 250),
(2, 1, 125, 125);


INSERT INTO billing_details 
( full_name, address_line1, address_line2, city, state, postal_code, country, phone_number, email)
VALUES 
('Jane Doe', '123 Main St', 'Apt 4B', 'New York', 'NY', '10001', 'USA', '555-123-4567', 'jane.doe@example.com'),
('John Smith', '456 Elm St', NULL, 'Los Angeles', 'CA', '90001', 'USA', '555-987-6543', 'john.smith@example.com'),
('Alice Johnson', '789 Maple Ave', 'Suite 101', 'Chicago', 'IL', '60601', 'USA', '555-456-7890', 'alice.johnson@example.com'),
('Bob Brown', '101 Pine St', NULL, 'Houston', 'TX', '77001', 'USA', '555-321-9876', 'bob.brown@example.com');


INSERT INTO payments (payment_method, amount, payment_status)
VALUES 
('credit_card', 75.00, 'completed'),
('paypal', 100.00, 'pending'),
('paypal', 100.00, 'pending'),
('credit_card', 50.00, 'failed');


INSERT INTO emails (name_of_email)
VALUES 
('diamondloveme1@gmail.com');


