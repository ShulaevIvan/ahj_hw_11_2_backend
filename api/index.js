const database = require('../database/db');

exports.getPosts = (ctx) => new Promise((resolve, reject) => {
    try {
      const result = {
        status: 'ok',
        data: JSON.stringify(database.posts),
      };
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });

  exports.getPostsById = (id) => new Promise((resolve, reject) => {
    try {
      const sortedData = database.posts.filter((post) => post.id === Number(id))
      const result = {
        status: 'ok',
        data: JSON.stringify(sortedData),
      };
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });

  exports.getPostCommentById = (id) => new Promise((resolve, reject) => {
    try {
      const postComments = database.comments.filter((comment) => comment.post_id === Number(id));
      const result = {
        status: 'ok',
        data: postComments,
      };
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });

  exports.getCommentsLastest = (id) => new Promise((resolve, reject) => {
    try {
      const sortedData = database.comments.sort((a, b) => new Date(a.created) - new Date(b.created));
      let postComments = sortedData.filter((comment) => comment.post_id === Number(id));
      if (postComments.length >= 3) {
        postComments = postComments.slice(-3);
      }
      const result = {
        status: 'ok',
        data: postComments,
      };
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });