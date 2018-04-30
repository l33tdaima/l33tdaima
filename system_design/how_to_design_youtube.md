# How To Design YouTube

## Scope
There are tons of features YouTube provides, let us focus on the primary features like,
- Storage. How do you design the database schema? What database to use?

## System
Use the most common architecture that front ends (both mobile and web) talk to the web server, which handles logics like user authentication, sessions, fetching and updating users’ data, etc.. And then the server connects to multiple backends like video storage, recommendation server and so forth.

## Solution
### Storage Data Model
We can talk using relational database, and in reality, Youtube does use MySQL as its main database from the beginning and it works pretty well.
- User table: storing email, name, registration data, profile information and so on.
- Video table: containing information including meta data (title, description, size, etc.), video file, comments, view counts, like counts and so on. We can break them into multiple tables.
- Author-Video relation table, user-like-video table.

### Video and Image Storage
- Store videos files and images (thumbnails of different sizes) separately.
- Use CDN (Content Delivery Network)
  - A globally distributed network of proxy servers deployed in multiple data centers.
  - Replicates content in multiple places so that there’s a better chance of content being closer to the user, with fewer hops, and content will run over a more friendly network.
- Host popular videos in CDN and less popular videos are stored in own servers by location. 

## Scalability
### Scale The Database
- From single server to master(write)-slave(read) model, to multiple masters-slave, to database partition/sharding approach.
- Further break database into video cluster and generic cluster (social network features)
### Cache
- Not only cache in server side, but also cache in client side.
- Don’t place too much bet on the cache for long tail products.

## Other Issues
### Security
- Protect hacked view count
  - Block malicious IP addresses; restrict the number of view count per IP
  - Detect high view count but low engagement patterns

[Reference 1](http://blog.gainlo.co/index.php/2016/10/22/design-youtube-part/)
[Reference 2](http://blog.gainlo.co/index.php/2016/11/04/design-youtube-part-ii/)
