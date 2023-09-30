import React, { FunctionComponent, useState } from 'react';
import formatType from '../helpers/format-type'
import { Fighter } from '../pages/fighter-list';
import { useNavigate } from 'react-router-dom';


type Props = {
    fighter : Fighter 
    borderColor?: string
}

const FighterCard : FunctionComponent<Props> = ({fighter, borderColor = '#ff2600'}) => {

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
        <div className='col-sm-4'>
            <div id="card horizontal hoverable" style={{ borderColor: color, maxWidth: 400}} className="card mb-3 " onMouseEnter={showBorder} onMouseLeave={hideBorder} onClick={() => goToFighter(fighter.id)}>
                <div className="row g-0 " >
                        <img className="img col-md-5" src={fighter.picture} alt=""/>
                    <div className="col-md-6">
                        <div className="card-body">
                            <p className="center b={-5}">{fighter.name}</p>
                                <span className={formatType(fighter.type)}>{fighter.type}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
    // <div class="card mb-3" style="max-width: 540px;">
    //     <div class="row g-0">
    //       <div class="col-md-4">
    //         <img src="..." class="img-fluid rounded-start" alt="...">
    //       </div>
    //       <div class="col-md-8">
    //         <div class="card-body">
    //           <h5 class="card-title">Card title</h5>
    //           <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //           <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    //         </div>
    //       </div>
    //     </div>
    // </div> 
}


export default FighterCard;

