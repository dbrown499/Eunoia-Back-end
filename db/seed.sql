\c eunoia_app;

INSERT INTO emails (name_of_email)
VALUES 
('diamondloveme1@gmail.com');

INSERT INTO Products (type, name, description, size, price, stock, image_url) 
VALUES 
('sweater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'XS', 125, 10, '/Users/diamondbrown/Documents/Diamond-Project/Major-Projects/Eunoia_app/back-end/images/D1F5312F-C63B-41DF-B241-7D81D44676E9.png'),
('sweater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'S', 125, 20, '/Users/diamondbrown/Documents/Diamond-Project/Major-Projects/Eunoia_app/back-end/images/D1F5312F-C63B-41DF-B241-7D81D44676E9.png'),
('sweater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'M', 125, 20, 'images/D1F5312F-C63B-41DF-B241-7D81D44676E9.png'),
('sweater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'L', 125, 20, 'images/D1F5312F-C63B-41DF-B241-7D81D44676E9.png'),
('sweater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'XL', 125, 20, 'images/D1F5312F-C63B-41DF-B241-7D81D44676E9.png'),
('sweater', 'Kiss The Moment Goodbye', 'Cropped Fit Hoodie', 'XXL', 125, 10, 'images/D1F5312F-C63B-41DF-B241-7D81D44676E9.png');

INSERT INTO orders (item_count, total_amount)
VALUES 
(5, 675.00),
(3, 405.00);


INSERT INTO order_items (order_id, product_size, taxes, price_per_unit)
VALUES 
(1, 'XS', 10, 125), 
(1, 'S', 10, 125),
(1, 'M', 10, 125),
(1, 'L', 10, 125),
(1, 'XL', 10, 125),
(2, 'XXL', 10, 125),
(2, 'S', 10, 125),
(2, 'XS', 10, 125);



INSERT INTO billing_details 
( order_id, full_name, address_line1, city, state, postal_code, country, phone_number, email)
VALUES 
(1, 'Alice Johnson', '789 Maple Ave Suite 101', 'Chicago', 'IL', '60601', 'USA', '555-456-7890', 'alice.johnson@example.com'),
(2, 'Bob Brown', '101 Pine St', 'Houston', 'TX', '77001', 'USA', '555-321-9876', 'bob.brown@example.com');


INSERT INTO payments (order_id, payment_method, amount, payment_status)
VALUES 
(1, 'credit_card', 675.00, 'completed'),
(2, 'paypal', 405.00, 'pending');





