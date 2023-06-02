import TeamData from "../Data/TeamData";

const Member = () => {
    return(
        <div className="member">
            <div>
        <iframe scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/269248772&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" width="100%" height={300} frameBorder="no">
        </iframe>
        <div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}>
          <a href="https://soundcloud.com/teenagewrist" title="Teenage Wrist" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Teenage Wrist</a> · 
          <a href="https://soundcloud.com/teenagewrist/stoned-alone" title="Stoned, Alone" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Stoned, Alone</a>
        </div>
      </div>
        </div>
    )
}

export default Member;