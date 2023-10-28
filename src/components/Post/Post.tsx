import "./_post.scss";
interface PostProps {
  item: {
    title: string;
    description: string;
    urlToImage: string;
    author: string;
  };
}
const Post = ({ item }: PostProps) => {
  const title = item.title;
  const description = item.description;
  const image = item.urlToImage;
  const author = item.author;

  return (
    <>
      <div className="post">
        <span className="postTitle">{title}</span>
        <span className="postDescription">{description}</span>
        <img className="postImage" src={image} alt="" />
        <span>by {author}</span>
      </div>
    </>
  );
};
export default Post;
