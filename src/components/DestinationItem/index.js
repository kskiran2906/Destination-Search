import './index.css'
import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props
    const {imgUrl, name} = destinationDetails
    console.log(imgUrl, name)

    return (
      <li className="destination-item">
        <img className="destination-img" src={imgUrl} alt={name} />
        <p className="destination-name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
