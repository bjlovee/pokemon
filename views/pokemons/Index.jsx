const React = require('react');
const Default = require('../layouts/Default.jsx')


class Index extends React.Component{
    render(){
        const {pokemons} = this.props
        return(
            <Default title="Pokemons Index Page">
                <ul>
                    {
                        pokemons.map((pokemon) => {
                            const {name, age, readyToFight} = pokemon
                            return (
                                <li key={pokemon._id}>
                                    <a href={`/pokemon/${pokemon._id}`}>
                                    {name}</a> is {age}
                                    
                                     <br/>
                                    {
                                        readyToFight? 
                                        'pokemon is ready to fight':
                                        'pokemon is not ready to fight'
                                    }
                                    <br/>
                                    <form method="POST" action={`/pokemon/${pokemon._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${age} ${name}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index
