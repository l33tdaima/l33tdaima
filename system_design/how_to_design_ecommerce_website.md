# How To Design eCommerce Website like Amazon

## Scope
Although an eCommerce website has many advanced features like order tracking, product search and recommendation, product reviews, payment, customer service etc. We will focus on fundamental product ordering features and high level design.

## System: Basic Data Model
In the simplest scenario, we need three major objects: Product, User and Order.
  - Product defines the basic model for a product in the shopping cart
    - Columns are price, inventory, name, description, category;
    - Category could be another table;
  - Users defines customers who potentially could buy products
  - Orders stores information about orders made by users
    - Contains UserID, ProductID, amount, timestamp, payment, status, etc.

## System: NoSQL Data Model
- Instead of having a separate Order table, we can store all the items a user has bought in the same row of User table. As a result, when fetching a user, not only will we get all the personal information, but also his purchase history.
- Product table now don't have to a long list of columns for different type of products, such as books or computers.

## Solution for Concurrency
One example issue is two customers are ordering the same product which has only one left. How do you achieve concurrency in eCommerce websites?
- Pessimistic concurrency control: such as resource lock might not be practical and user friendly.
- Optimistic concurrency control: each process/thread accesses data freely, however, before committing changes, each transaction should check if the data has the same state as it did when you last read it.
  - If the data hasn’t been modified, you can safely commit it.
  - Otherwise, roll back and try again until there’s no conflict.
  - Good for eCommerce systems that are unlikely to have conflicts.

## Scalability: 
CAP (Consistency, Availability, Partition-tolerance)
### Availability
ECommerce website requires high availability by having hundreds or thousands of replicas, but it will be harder to guarantee high consistency.

### Consistency
- Strong consistency by placing lock on competing resources is usually costly and blocking system.
- Weak consistency by providing minimum guarantee of consistency.
- Eventual consistency: the system only guarantees that every replica will have the same value eventually. Basically, it’s possible that each replica holds different versions of the data at a particular time. So when the client read the data, it may get multiple versions. At this point, the client (instead of the database) is responsible to resolve all the conflicts and update them back to the server.
