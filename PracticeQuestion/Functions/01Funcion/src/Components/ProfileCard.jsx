// Question 03. Create a functional component <Profile /> that returns a card-style UI.


import "../index.css";

function Profile() {
  return (
    <>
      <div className="container">
        <div className="image">
          <img
            src="https://media.istockphoto.com/id/1325012955/photo/headshot-portrait-of-a-young-nurse.jpg?s=1024x1024&w=is&k=20&c=cmLl2CRKJbri0QW8c95R-Pum5rL6F-ny38KvXncAc1k="
            alt=""
          />
        </div>
        <div className="name">
          <h3>Medanta Hospital</h3>
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            hic, eum fugit aperiam aliquam in natus vero impedit optio dolores
            quia similique enim accusamus est veniam, laudantium nam delectus,
            ea et magni suscipit quas cum! Ut, atque facere quidem accusantium
            quas minima reprehenderit aperiam eum ipsa molestiae consequatur,
            reprehenderit?
          </p>
        </div>

        <div className="button">
          <button>Book An Appointment</button>
        </div>
      </div>
    </>
  );
}

function ProfileCard() {
  return (
    <>
      <Profile />
    </>
  );
}

export default ProfileCard;
