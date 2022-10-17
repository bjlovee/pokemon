const React = require('react');
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
   
    render(){
        const {name, type, readyToFight, _id} = this.props.pokemon
        const capName = name[0].toUpperCase() + name.substring(1)
        return(
        <Default title={`${capName} Show Page`} pokemon={this.props.pokemon}>
            <p>{capName} type is {type} and {readyToFight? 'it\'s ready to fight': 'it\'s not ready to fight'}</p>
            <a href="https://img.pokemondb.net/artwork/large/geodude.jpg">Geodude Img</a><br/>
            <a href="https://img.pokemondb.net/artwork/avif/slowbro.avif">Slowbro</a><br/>
            <a href="https://img.pokemondb.net/artwork/avif/gastly.avif">Gastly</a><br/>
            <a href="https://img.pokemondb.net/artwork/avif/voltorb.avif">Voltorb</a><br/>
            <a href="https://img.pokemondb.net/artwork/avif/snorlax.avif">Snorlax</a>
        </Default>
        )
   } 
}

module.exports = Show