import React, {Component} from 'react';
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
    render(){
        const {id, name, type, exp} = this.props;
        let imgId = ('00' + id).slice(-3);

        const imgSrc = POKE_API + imgId + '.png';
        
        return (
            <div className="Pokecard">
                <h2 className="Pokecard-title">{name}</h2>
                <img src={imgSrc} alt={name}/>
                <div>TYPE: {type}</div>
                <div>EXP: {exp}</div>
            </div>
        );
    }
}

export default Pokecard;