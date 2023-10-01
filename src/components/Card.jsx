/* eslint-disable react/prop-types */
import placeholder from '../assets/placeholder.png'
// eslint-disable-next-line no-undef
export default function Card({imageUrl, location, googleMapsUrl, title, startDate, endDate, description} = props){
    return(
           <div className="card">
                <div className="card--img">
                    <img src={imageUrl}/>
                </div>
                <div className="card--info">
                    <div className='card--info-location'>
                        <img className='placeholder' src={placeholder} />
                        <h4 className='card--info-country'>{location}</h4>
                        <a className='card--info-link' href={googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h2 className='card--info-title'>{title}</h2>
                    <p><span className='date'>{startDate}</span>-<span className='date'>{endDate}</span></p>
                    <p className='card--info-description'>{description}</p>
                </div>
           </div>
    )
}