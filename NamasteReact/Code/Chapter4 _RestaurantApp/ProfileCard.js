import "./profileCard.css";

const ProfileCard = () => {
return(
    <div className="container">
        <h1>Profile Card</h1>
           <div className="profile-card">
        
        <div className="image-container">
             <img src="https://plus.unsplash.com/premium_photo-1725024146606-188e7c6334ce?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" />
        </div>
        <div className="details">
          <p> <strong>John Doe</strong> , Web Developer</p> 
        </div>
        <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
       

    </div>


    </div>
 
)
}

export default ProfileCard;