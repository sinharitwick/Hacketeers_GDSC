import React from "react";
import aboutimage from '../images/about.jpg'
function About(){
    return(
        <div id='about'>
            <div className="about-text">
                <h1>ABOUT US
                </h1>
                <br />
                <p>We know how difficult it is to guide yourself through college life. And this platform will help you. Let us explain how. <br /></p> <br />
                <p>
                <ol>
                    <li><h4>Ask Questions</h4><p>You can ask questions to your peers and see questions that have already been asked.You will be surprised to see how many have had the same doubts.</p></li>
                    <br /><li><h4>Make friends</h4><p>You can edit your profile and build your bio to introduce yourself to your college mates.</p></li>
                    <br /><li><h4>Stay Informed</h4><p>This site will keep you informed about all the events that will be happening in your college. The Societies in your college are going to use this platform to inform you of all the activities they organise.</p></li>
                    <br /><li><h4>Enjoy your College Life</h4><p>We have a map of all the places flocked by your college peers. You can read reviews and find your spots to chill and socialize!</p></li>
                </ol>
                </p>

                
            </div>
            <div className="about-image">
                <img src={aboutimage} alt=''/>
            </div>
        </div>
    )
}
export default About;