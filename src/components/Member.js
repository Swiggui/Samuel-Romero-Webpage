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
                    <img className="member-photo " src={require(`../Media/Images/TeamImages/${member.PhotoPath}`)} alt={"A smile of " + member.Name}/>
                    <article className="member-info">
                        <h2 className="fw-bold">{member.Name}</h2>
                        <h3 className="fw-light">{member.Role}</h3>
                        <p>{member.MiniBio}</p>
                    </article>
                    <div>
                        <iframe
                            className="member-project"
                            allow="autoplay"
                            src={member.MainProject}
                            width="75%"
                            height={500}
                            title={"Featured project of " + member.Name}/>
                    </div>
                    <div className="member-social-networks">
                    {
                        member.SocialNetworks.map((social, index) => (

                                    <Social
                                        name = {social.name}
                                        link = {social.link}
                                    />
                            )
                        )
                    }
                    </div>
                </div>
            ))}
        </div>
    );
}


export default Member;