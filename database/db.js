const Faker = require('@faker-js/faker');

class Database {
    constructor() {
        this.id = 0;
        this.postId = 0;
        this.commentId = 0;
        this.users = [];
        this.posts = [];
        this.comments = [];
        this.generateComments =this.generateComments.bind(this)
    }

    generateUsers(n) {
        const userNum = n
        for (let i = 0; i < userNum; i += 1) {
            this.id += 1
            const userCard =  {
                id: this.id,
                name: Faker.faker.name.firstName(),
                avatar: Faker.faker.internet.avatar(),
                created: +Faker.faker.date.recent(20, '2023-02-22T00:00:00.000Z'),
            }
            this.users.push(userCard);
        }
    }

    generatePosts(n) {
        const postNum = n
        for (let i = 0; i < postNum; i += 1) {
            this.postId += 1;
            const rndUser = this.users[Math.floor(Math.random()*this.users.length)];
            const post = this.createPost(this.postId, rndUser);
            this.posts.push(post);
        }
    }

    generateComments(n) {
        const commentsNum = n
        for (let i = 0; i < commentsNum; i += 1) {
            this.commentId += 1;
            const rndUser = this.users[Math.floor(Math.random()*this.users.length)];
            const post = this.posts[Math.floor(Math.random()*this.posts.length)];
            const comment = this.createComment(this.commentId, post, rndUser);
            this.comments.push(comment);
        }
    }

    createPost(id, user) {
        const post = {
            id: id,
            author_id: user.id,
            title: Faker.faker.lorem.word(),
            author: user.name,
            avatar: user.avatar,
            image: Faker.faker.image.image(),
            created: +Faker.faker.date.recent(99, '2023-02-22T00:00:00.000Z'),
        }
        return post;
    }

    createComment(id, post, user) {
        const comment = {
            id: id,
            post_id: post.id,
            author_id: user.id,
            author: post.author,
            avatar: post.avatar,
            content: Faker.faker.lorem.text(),
            created: +Faker.faker.date.recent(20, '2023-02-22T00:00:00.000Z'),
        }
        return comment;
    }
}

const db = new Database();
db.generateUsers(10);
db.generatePosts(10);
db.generateComments(20);

module.exports = db;