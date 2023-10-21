import Post from "../Post/Post";
interface PostGridProps {
  items: Array<any>;
}
const PostGrid = ({ items }: PostGridProps) => {
  return (
    <div className="post-grid">
      {items.map((item, i) => (
        <Post key={i} item={item} />
      ))}
    </div>
  );
};
export default PostGrid;
