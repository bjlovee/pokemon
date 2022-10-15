const React = require('react');
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
   
    render(){
        const {name, age, readyToFight, _id} = this.props.pokemon
        const capName = name[0].toUpperCase() + name.substring(1)
        return(
        <Default title={`${capName} Show Page`} pokemon={this.props.pokemon}>
            <p>{capName} is {age} and {readyToFight? 'it\'s ready to fight': 'it\'s not ready to fight'}</p>
        </Default>
        )
   } 
}

module.exports = Show