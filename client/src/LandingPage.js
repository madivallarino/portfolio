import picture from './picture.JPG'

const LandingPage = () => {

    return (
        <div className="landingpage">
            <div className="side">
                <img src={picture} />
            </div>
            <div className="side">
                <div className="info">
                    <h1>Hi, I'm Madi.</h1>
                    <h3>Full-Stack Developer</h3>
                </div>
                <div className="project">
                    
                </div>
            </div>
        </div>
    )
}

export default LandingPage;