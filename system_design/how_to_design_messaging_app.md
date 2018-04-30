# How To Design Messaging App like Facebook Messenger/WhatsApp/Wechat

## Scope
We will focus the design of fundamental feature of 1-on-1 chat.

## System: Basic Infrastructure
- Basically, one of the most common ways to build a messaging app is to have a chat server that acts as the core of the whole system.
  - User A wants to send message “Hi there” to user B. A first sends the message to the chat server.
  - The chat server receives the message and sends an acknowledgement back to A, meaning the message is received. Based on the product, the front end may display a single check mark in A’s UI.
  - B receives the message and sends back an acknowledgement to the chat server.
    - Case 1: if B is online and connected to the chat server, that’s great. The chat server just sends the message to B.
    - Case 2: If B is not online, the chat server holds the message and sends a push notification to B.
  - The chat server notifies A that B received the message and updates with a double check mark in A’s UI.

## Solution: Advanced Features
- Showing online friends
  - Straightforward approach is once a user is online, he sends a notification to all his friends, which needs O(average number of friends * peak users) of requests.
  - One optimization is only sends lazy notifications, like a user sends messages or has other activities like commentting etc.

## Scalability
- How to reduce the cost of HTTP or other protocol's connection resouce?  HTTP persistent connection.
- How to handle massive amount of users globally. Sharding multiple chat servers.
