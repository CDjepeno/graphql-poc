import React, { FunctionComponent, useState } from 'react';
import formatType from '../helpers/format-type'
import { Fighter } from '../pages/fighter-list';
import { useNavigate } from 'react-router-dom';


type Props = {
    fighter : Fighter 
    borderColor?: string
}

const FighterCard : FunctionComponent<Props> = ({fighter, borderColor = '#ff0000'}) => {

    const [color, setColor] = useState<string>();
    const navigate = useNavigate();

    const showBorder = () => {
        setColor(borderColor)
    }
    
    const hideBorder = () => {
        setColor('#f5f5f5') // Ont remet la bordure initiale
    }

    const goToFighter = (_id: any) => {
        navigate(`/fighters/${_id}`)
    } 

    return ( 
        <div id="card" className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder} onClick={() => goToFighter(fighter.id)}>
            <div className="card horizontal hoverable" style={{ borderColor: color }}>
                <div className="card-image col">
                    <img  src={fighter.picture} alt=""/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p className="center b={-5}">{fighter.name}</p>
                            <span className={formatType(fighter.type)}>{fighter.type}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FighterCard;

