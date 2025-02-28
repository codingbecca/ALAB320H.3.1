import Score from "./Score";
import styles from "./Learner.module.css";

export default function Learner({ name, bio, scores }) {
  return (
    <div className={styles.learner}>
      <div>
        <h2>{name}</h2>
        <h3>Bio: {bio}</h3>
      </div>
      <div className={styles.scoresContainer}>
        {scores.map((score, i) => (
          <Score key={i} {...score} />
        ))}
      </div>
    </div>
  );
}
