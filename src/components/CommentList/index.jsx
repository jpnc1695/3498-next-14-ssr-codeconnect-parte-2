import { Comment } from "../Comment";
import styles from './commentlist.module.css'

export const CommentList = ({ comments }) => {
  return(
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment}  />
        </li>
      ))}
    </ul>
  );
};
