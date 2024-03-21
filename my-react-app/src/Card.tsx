import profilePic from './assets/me.png'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Caleb</h2>
            <p className='card-text'>I am studying for web development and play video games</p>
        </div>
    );
}

export default Card;