const React = require('react')
const Default = require('../layouts/Default.jsx')


class Edit extends React.Component {
    render(){
        const {name, _id, age, readyToFight} = this.props.pokemon
        return (
            <Default title={`${name} Edit Page`} pokemon={this.props.pokemon}>
                <form method="POST" action={`/pokemon/${_id}?_method=PUT`}>
                    Name: <input type="text" name="name" defaultValue={name}></input><br/>
                    Age: <input type="text" name="age" defaultValue={age}></input><br />
                    Ready To Fight: <input type="checkbox" name="readyToFight" defaultChecked={readyToFight}/> <br />
                    <input type="submit" value="Edit pokemon" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit