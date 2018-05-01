# How To Design Twitter

## Scope
How do we design the core functionalities, 
- How a user sends tweets
- Timeline/Feeds when opening Twitter
  - User's own timeline
  - Feeds of all the users he follows
- Following

How do we design some advanced features
- Trending Topics
- Who to follow

## System
### Data modeling
- User table: id, name, email, etc.
- Tweet table: id, content, owner
- User-tweet relationship: A sends a tweet 
- User-user relationship: A follows B

### Multi-tier web architecture
- UI
- Load balancer
- Services

## Solution
### Basic: Home feeds/timeline
When a user follows a lot of people, fetching and rendering all their feeds can be costly (join tables)
- We can do "Infinite scroll" on the frontend to only select a small range of tweets
- On the backend, we can do a Pub-Sub architecture to precalulate the feeds of each user,
  - We pick high availability over consistency, a delayed feeds is better than slow loading
  - When a user tweets, an event is published, all of his followers are essentially subscribers this event and will work in parallel to update their feeds.
  - Each follower's worker might queue up if all the users tweet, but eventual consistency is guaranteed.
  - When a user follows another new user, it is another type of event which the corresponding user worker will react.
- To seek tradeoff between space and time, we can precalculate the top N feeds, and do on-the-fly search for older feeds.

### Advanced: Trending Topics 
Subproblems
- How to get trending topic candidates?
  - Get the most frequent hashtags over the last period of time.
  - Get the hottest search queries
- How to rank those candidates?
  - The most straightforward way is to rank based on frequency.
  - We can integrate other signals like reply/retweet/favorite, freshness, or add some personalized signals like whether there are many follows/followers talking about the topic.

### Advanced: Who To Follow
- People you may know (friends): traverse "following graph" with 2-3 steps away
- Celebrities/brands…
- Follow-up
  - How to scale the system when there are millions/billions of users?
  - How to evaluate the system?
  - How to design the same feature for Facebook (bi-directional relationship)

### Moments/What's Trending Now
Basically, Moments will show you a list of interesting topics for different categories (news, sports, fun etc.). For each topic, you will also get several top tweets discussing it.
- Polling: Get hottest articles from news websites for the past few hours. For each article, find tweets related to it and figure out which category (news, sport, fun etc.) it belongs to.
- Pushing: Monitoring the messages bus, bucketing by category, filtering, ranking.

Technical Challenges
- Categorize each tweet/topic to a category (news, sports etc.) 
- Generate and rank trending topics at current moment 

## Scalability
- Pub-Sub architecture is easy to scale horitonally, adding new workers for the new users.

[Reference 1](http://blog.gainlo.co/index.php/2016/02/17/system-design-interview-question-how-to-design-twitter-part-1/)
[Reference 2](http://blog.gainlo.co/index.php/2016/02/24/system-design-interview-question-how-to-design-twitter-part-2/)
[Reference 3](https://www.youtube.com/watch?v=KmAyPUv9gOY&t=8s)
