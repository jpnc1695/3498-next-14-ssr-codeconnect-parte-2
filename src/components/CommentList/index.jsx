import { Comment } from "../Comment";
import styles from "./commentlist.module.css";
import { ReplyModal } from "../ModalReply";
import { Replies } from "../Replies";

export const CommentList = ({ comments }) => {
  return (
    <section className={styles.comments}>
      <h2>Comentários</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
            <ReplyModal comment={comment}/>
            <Replies/>
          </li>
        ))}
      </ul>
    </section>
  );
};
