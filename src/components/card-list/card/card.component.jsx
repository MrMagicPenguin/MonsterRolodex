import './card.styles.css'

const Card = ({monster}) => {
    return (
        <div className='card'>
            <img
                alt={`monster ${monster.name}`}
                src={`https://robohash.org/${monster.id}?set=set4&size=180x180`}
            />
            <h3>{monster.name}</h3>
            <p>{monster.email}</p>
        </div>
    )
}

export default Card