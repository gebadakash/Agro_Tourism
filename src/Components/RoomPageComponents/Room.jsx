import "./room.css";

const roomsData = [
  {
    title: 'Premium King Room',
    price: 99,
    size: '30 ft',
    capacity: 'Max person 3',
    bed: 'King Beds',
    services: 'Wifi, Television, Bathroom, ...',
    view: 'Sea View',
    image: 'images/room-1.jpg'
  },
  {
    title: 'Deluxe Room',
    price: 86,
    size: '30 ft',
    capacity: 'Max person 3',
    bed: 'King Beds',
    services: 'Wifi, Television, Bathroom, ...',
    view: 'Sea View',
    image: 'images/room-2.jpg'
  },

  {
    title: 'Double Room',
    price: 71,
    size: '30 ft',
    capacity: 'Max person 3',
    bed: 'King Beds',
    services: 'Wifi, Television, Bathroom, ...',
    view: 'Sea View',
    image: 'images/room-3.jpg'
  },


  {
    title: 'Luxury Room',
    price: 79,
    size: '30 ft',
    capacity: 'Max person 3',
    bed: 'King Beds',
    services: 'Wifi, Television, Bathroom, ...',
    view: 'Sea View',
    image: 'images/room-4.jpg'
  },



];

const Room = ({ room }) => {
  return (
    <div className="room">
      <div className="room__pic__item set-bg" style={{ backgroundImage: `url(${room.image})` }}></div>
      <div className="room__text">
        <h3>{room.title}</h3>
        <h2><sup>$</sup>{room.price}<span>/day</span></h2>
        <ul>
          <li><span>Size:</span>{room.size}</li>
          <li><span>Capacity:</span>{room.capacity}</li>
          <li><span>Bed:</span>{room.bed}</li>
          <li><span>Services:</span>{room.services}</li>
          <li><span>View:</span>{room.view}</li>
        </ul>
        <a href="#">Book Now</a>
      </div>
    </div>
  );
};

const RoomsSection = () => {
  return (
    <section className="rooms spad">
      <div className="container">
        <div className="row">
          {roomsData.map((room, index) => (
            <div key={index} className="col-lg-6 p-0">
              <Room room={room} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
