import styles from "./Score.module.css"

export default function Score ({ date, score}) {
    const parsedDate = new Date(date);

    //We want the date in two formats: format one is YYYY-MM-DD and format two is MM/DD/YY
    //format one:
    const formattedISO = parsedDate.toISOString().split('T')[0];

    //format two:
    const formattedShort = new Intl.DateTimeFormat('en-US', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
      }).format(parsedDate);
    
    return (
        <div className={styles.scoreContainer}>
            <time dateTime={formattedISO}>{formattedShort}</time>
            <p className={styles.score}>Score: {score}%</p>
        </div>
    )
}