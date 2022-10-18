const React = require('react')
const Default = require('../layouts/Default.jsx')
class New extends React.Component {
    render(){
        return (
            <Default title="Create New Pokemon">
        
            <nav>
                <a href="/pokemon">Go Back To Pokemon Home Page</a>
            </nav>
            <form method='POST' action="/pokemon">
                Name: <input type="text" name="name" placeholder='Name of Pokemon Here'></input><br/>
               Type: <input type="text" name="type" placeholder='Type of Pokemon Here'></input><br/>
               Image: <input type="text" name="image" placeholder='insert img url'></input><br/>
                Is Ready To Fight: <input type="checkbox" name="readyToFight"></input><br/>
                <input type="submit" value="Submit Pokemon"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New