# How To Design A TinyURL System

## Scope
Basically, TinyURL is a URL shortening service. Map a long hard-to-remember URL into a short alias like http://tinyurl.com/j7ve58y.

### Basic scope:
- User enters a URL and gets a randomly generated short alias
    - Do they specify expiration?
- User enters a tiny url and views the contents
### Additional clarifications:
- User is anonymous or account based?
- Service tracks analytics of pages?
- Service deletes expired entries?
- Service has high availability

## System (from high level design perspective)
- Traditional three-tiers web architectures to handle traffic
  - Client <-> Web Server <-> Write/Read API Server <-> Data Store
- Key-value store for alias to URL mapping
- The Write API to generate hash for any given URL and The Read API to retrieve URL.

## Solutions (for the key components)
### Write API Server
Usually the length is 7 containing [A-Za-z0-9], we can serve 62 ^ 7 ~= 3500 billion URLs.
- The straightforward way is just randomly picking a string of 7 chars and making sure no collision.
- MD5 + base62 encoding, 
    ```
    alias = base_encode(md5(ip_address+timestamp))[:URL_LENGTH]
    ```
- Incremental ID based, faster than random ID based insertion, because it appends. But it won't allow user to pick customized alias.

### Read API Server
Take the alias, query the database for the original URL

### Database
- Start with simple SQL database. 
  - Each record is approximately 7 bytes (alias) + 2000 bytes (de facto URL limit) + other overhead.
- Expand to a NoSQL database for a larger dataset.

## Scalability
### Steps: 
- Benchmark/Load Test
- Profile for bottlenecks
- Address bottlenecks while evaluating alternatives and trade-offs
- Repeat

### Distributed Key-Value Store
- Algorithm to shard alias and re-shard
- Replication
- Concurrency

### Memory Cache
