const React = require('react');

class Default extends React.Component {
    render(){
        const {pokemon, age} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{age}</title>
                </head>
                <body>
                    <nav>
                        <a href="/pokemon">Go to Home Page For pokemon</a>
                        <a href="/pokemon/new">Create a New pokemon</a>
                        { pokemon? <a href={`/pokemon/${pokemon._id}/edit`}> {pokemon.name} Edit Page </a> : ''}
                        { pokemon? <a href={`/pokemon/${pokemon._id}`}>{pokemon.name} Show Page</a> : ''}
                    </nav>
                    <h1>
                        {age}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default