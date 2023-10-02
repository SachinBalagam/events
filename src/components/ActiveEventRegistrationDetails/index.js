// Write your code here
import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  renderInitialView = () => (
    <p className="initialViewHeading">
      Click on an event, to view its registration details
    </p>
  )

  renderYetToRegisterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yetToRegisterImage"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance Seeing
        dance live can often make you fall totally in love with this beautiful
        art form
      </p>
      <button type="button" className="button">
        Register Here
      </button>
    </div>
  )

  renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registeredImage"
      />
      <h1 className="registeredContent">
        You have already registered for the event
      </h1>
    </div>
  )

  renderRegistrationClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrationClosedImage"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  render() {
    const {data} = this.props
    console.log(data)
    switch (data) {
      case 'YET_TO_REGISTER':
        return this.renderYetToRegisterView()
      case 'REGISTERED':
        return this.renderRegisteredView()
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationClosedView()
      default:
        return this.renderInitialView()
    }
  }
}

export default ActiveEventRegistrationDetails
