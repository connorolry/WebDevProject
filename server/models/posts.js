const posts = [
    {
        userId: 1,
        postId: 1,
        post: "lorem ipsum",
        date: "1/1/2022"

    }
]

let getPosts = () => posts

function post(newPost){
    posts.push(newPost)
}

function deletePost(postId){
  let i = posts.map((posts) => posts.postId).indexOf(postId);
  posts.splice(i, 1);
  console.log(posts)
}
module.exports = {getPosts, post, deletePost}