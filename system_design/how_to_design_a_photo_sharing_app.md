# How To Design A Photo Sharing App Like Instagram

## Scope
A photo sharing app will have features like
- Users can follow each other, like/comment theirs pictures
- Upload and render pictures
- Explore the picture pool
- Advertisement
We will focus on the fundamental phote feeds feature.

## System
### Basic Data Model
- User table containing id, email, profile, etc.
- Picture table containing id, caption, picture binary, picture metadata, hash tag etc.
- User relationship, such as Alice follows Bob.
- User-picture relationship, Alice posts a new picture.

## Solution
To check a user’s feed, we can fetch all pictures from people he follows.
### Timeline Feeds
- The straighforward chronological order, might not be the best approach.
- A common optimization is to come up with a scoring mechanism that takes various features as signals and computes a final score for each picture.
### Image Optimization
- A good storage system like Amazon S3.
- Static image data can be optimized by cache (speed) and replication (robustness).
- Image compression.

## Scalability
- Feeds could go slow if a user follows many people with frequent posts.
  - Search top most relevant pictures with infinite scroll.
  - Offline pipeline to precalcuate.
- Architecture with well designed components which easily get horizontally sharded.
- Database partitioning (vertical) and sharding (horizontal).
