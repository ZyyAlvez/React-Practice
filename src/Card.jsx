import profilePicture from "./assets/image.png";
import PropTypes from "prop-types"


export default function Card(prop){

    return (
        <main className='card'>
            <div>
                <img alt={prop.name + "'s Profile Picture"} src={profilePicture} className="card-picture"></img>
            </div>
            <div className="card-name" style={{"textAlign": "center", "marginBottom": "5px", "fontSize": "23px", 
        "fontWeight": "bold"}}>
                {prop.name} - {prop.age}
            </div>
            <div className="card-description" style={{"fontSize": "18px", "paddingLeft": "5px"}}>
                The 'sus' Corgi
            </div>
        </main>
    );
}

// debugging purposes, expected data types of props
Card.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

// default props
Card.defaultProps = {
    name: "Guest",
    age: "IDK"
}