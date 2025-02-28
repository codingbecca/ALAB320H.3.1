import Score from "./Score";

export default function Learner ({name, bio, scores}) {
    return  (
        <div>
            <h2>{name}</h2>
            <h3>{bio}</h3>
            {scores.map((score, i) => (
                <Score key={i} {...score} />
            ))}
        </div>
    )
}