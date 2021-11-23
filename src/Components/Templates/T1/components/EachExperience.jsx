
import styles from "./t1styles.module.css";

const EachExperience = ({ title, period, organization }) => {
    return (
        <div className={styles.eachExperience}>
            <h5>{title}</h5>
            <div><b>Period: </b>{period}</div>
            <div className={styles.organization}><b>Organization: </b> {organization}</div>
        </div>
    )
}

export default EachExperience;