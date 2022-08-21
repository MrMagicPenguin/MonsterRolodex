import {Component} from "react";
import './card.styles.css'
class Card extends Component {
    constructor() {
        super();
    }

    render(){
        const {id, name, email} = this.props.monster
        return (
            <div className='card'>
                <img
                    alt={`monster ${name}`}
                    src={`https://robohash.org/${id}?set=set4&size=180x180`}
                />
                <h3>{name}</h3>
                <p>{email}</p>
            </div>

        )
    }
}

export default Card