function filterPosts(posts, query) {
    if (!query) {
      return posts
    }

    return posts.filter(post => {
      const postTitle = post.node.title.toLowerCase()
      return postTitle.includes(query.toLowerCase())
    })
}

module.exports = filterPosts
