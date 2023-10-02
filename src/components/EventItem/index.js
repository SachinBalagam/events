// Write your code here
import './index.css'

const EventItem = props => {
  const {data, onActiveEventClick, isActive} = props
  const {name, location, imageUrl, registrationStatus, id} = data
  const activeCss = isActive ? 'active' : ''

  const onClickActiveEvent = () => {
    onActiveEventClick(registrationStatus, id)
  }

  return (
    <li className="each-event">
      <button
        type="button"
        className="event-button"
        onClick={onClickActiveEvent}
      >
        <img src={imageUrl} alt="event" className={`image ${activeCss}`} />
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
