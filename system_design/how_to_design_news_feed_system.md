# How to Design News Feed System (Twitter/Facebook/Instagram)

## Scope
When users go to their home pages, they will see updates from their friends based on particular order. Feeds can contain images, videos or just text and a user can have a large number of friends.

## System
The high level abstract system has the subsystem the following subproblems:
- Data model. We need some schema to store user and feed object.
  - There are lots of trade-offs when we try to optimize the system on read/write.
- Feed ranking. Facebook is doing more than ranking chronologically.
- Feed publishing. Publishing can be trivial when there’re only few hundreds of users. But it can be costly when there are millions or even billions of users. So there’s a scale problem here.

## Solution
### Data Model
Primary table
- User object, containing userID, name, registration date and so on so forth.
- Feed object, containing feedId, feedType, content, metadata etc., which should support images and videos as well.

Relation table
- User-Feed table.
- User-user friend relation. The most common approach is adjacency list.

In this design, to generate news feeds for a user we need join 3 queries,
- Search for all userId of his friends from user-user table;
- Search (top) all feedId from user-feeds table for each of friends;
- Search feeds content from feeds table.

To trade read from write, we can *denormalize* to write feeds content to user-feeds table, but it will introduce write redundancy and consistency issue.

### Feed Ranking
Ranking chronologically is not enough.

The ranking should improve core metrics, like users stickiness, retention, ads revenue. The common strategy is to calculate a feed score based on various features and rank feeds by its score.

Features include affinity score, edge weights(like/comments numbers, comment > like), time decay, and whether the feed has images/videos.

### Feed Publishing
- Push
  - Push updates to all the friends' timeline when a user feeds
  - Favor read performace over write performance.
- Pull
  - Timeline is calculated on the fly by 2-3 joins
  - Favor write performance over read performance.
- Combined
  - Pull for high profile users and push for low profile users.

## Scalability