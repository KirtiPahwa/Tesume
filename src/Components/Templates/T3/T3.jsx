import "./T3.css";
import { demoProfileData } from "../../../Helpers";
import EachEdu from '../T1/components/EachEdu';
import EachExperience from '../T1/components/EachExperience';
import EachSkill from '../T1/components/EachSkill';

const T3 = () => {
    return(

        <div className="T3">
            <div className="container">
                <div className="upper_part">
                    <div className="profile_photo">
                        <img src="https://www.bing.com/th?id=OIP.JWeoMXt9SFgHXs-vqGTiuAHaHa&w=200&h=148&c=7&qlt=90&bgcl=ececec&o=6&pid=PersonalBing" alt="dp" />
                    </div>
                    <div className="profile_details">
                        <h2>{demoProfileData.name}</h2><br />
                        <p>{demoProfileData.currentProfession}</p>
                    </div>
                </div>
                <div className="lower_part">
                    <div className="left_side">

                        <div className="links">
                            <ul>
                                <li>
                                    <span className="icon"><a href={demoProfileData.socialLinks.linkedin}> <ion-icon name="logo-linkedin"></ion-icon> </a></span>
                                </li>
                                <li>
                                    <span className="icon"> <a href={demoProfileData.socialLinks.github}> <ion-icon name="logo-github"></ion-icon></a></span>
                                </li>
                                <li>
                                    <span className="icon"><a href={demoProfileData.socialLinks.phone}> <ion-icon name="call"></ion-icon></a></span>
                                </li>
                                <li>
                                    <span className="icon"><a href={demoProfileData.socialLinks.email}> <ion-icon name="mail"></ion-icon></a></span>
                                </li>
                                <li>
                                    <span className="icon"><a href={demoProfileData.socialLinks.website}> <ion-icon name="globe"></ion-icon></a></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="right_side">
                        <div className="education">
                            <div className="T3_container">
                                <h5><ion-icon name="book"></ion-icon>Education</h5>
                                <div className="add-more">
                                <ion-icon name="add"></ion-icon>
                                </div>
                            </div>
                            <div className="T3_edu_wrapper">
                                {
                                    demoProfileData.education.map( (each,i) => <EachEdu key={i} {...{institution_name: each.institution_name, enroll_year: each.enroll_year,passout_year: each.passout_year,grades: each.grades}} />)
                                }
                            </div>
                        </div>
                        <div className="skills">
                            <div className="T3_container">
                                <h5><ion-icon name="copy"></ion-icon>Skills</h5>
                                <div className="add-more">
                                <ion-icon name="add"></ion-icon>
                                </div>
                            </div>
                            <div className="T3_skill_wrapper">
                                {
                                    demoProfileData.skills.map( (each,i) => <EachSkill key={i} {...{skillName: each.skillName,proficiency: each.proficiency}} />)
                                }
                            </div>
                        </div>
                        <div className="experience">
                            <div className="T3_container">
                                <h5><ion-icon name="laptop"></ion-icon>Experience</h5>
                                <div className="add-more">
                                <ion-icon name="add"></ion-icon>
                                </div>
                            </div>
                            <div className="T3_exp_wrapper">
                                {
                                    demoProfileData.experience.map( (each,i) => <EachExperience key={i} {...{title: each.title, period: each.period,organization: each.organization}} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default T3;