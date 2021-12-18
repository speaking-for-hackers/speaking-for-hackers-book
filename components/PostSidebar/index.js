import Footer from "../Footer"
import PostNavigation from "../PostNavigation"

const PostSidebar = ({ posts, currentSlug }) => {
  return (
    <div className="bg-dark-900 border-r xl:border-l border-gray-900 flex-col justify-between hidden md:flex">
      <PostNavigation posts={posts} currentSlug={currentSlug} />
      <Footer position="sidebar" />
    </div>
  )
}
export default PostSidebar
