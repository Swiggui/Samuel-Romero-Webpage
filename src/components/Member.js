import TeamData from "../Data/TeamData";
import Social from "../components/Social";
import '../Styles/memberStyles.css';

const Member = () => {
    return(
        <div id="members">
            {TeamData.map((member, index) => (
                <div 
                    className="member"
                    key={index}>
                    <img src={member.PhotoPath}/>
                    <article className="member-info">
                        <h2>{member.Name}</h2>
                        <h3>{member.Role}</h3>
                        <p>{member.MiniBio}</p>
                        {
                            member.SocialNetworks.map((social, index) => (
                                    
                                    <Social
                                        name = {social.name}
                                        link = {social.link}
                                    />
                                )
                            )
                        }
                    </article>
                    <div>
                        <iframe
                            className="media"
                            allow="autoplay"
                            src={member.MainProject}
                            width="75%"
                            height={500}/>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default Member;