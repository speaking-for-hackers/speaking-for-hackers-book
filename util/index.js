export const getChapterPosts = (posts, chapter) => {
  return posts
    .filter((post) => post.meta.chapter === chapter)
    .sort((post1, post2) => (post1.meta.order > post2.meta.order ? 1 : -1))
}
