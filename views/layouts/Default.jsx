const React = require('react');

class Default extends React.Component {
    render(){
        const {pokemon, type} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{type}</title>
                </head>
                <body>
                    <nav>
                        <a href="/pokemon">Go to Home Page For pokemon</a><br/>
                        <a href="/pokemon/new">Create a New pokemon</a><br/>
                        { pokemon? <a href={`/pokemon/${pokemon._id}/edit`}> {pokemon.name} Edit Page </a> : ''}<br/>
                        { pokemon? <a href={`/pokemon/${pokemon._id}`}>{pokemon.name} Show Page</a> : ''}
                    </nav>
                    <h1>
                        {type}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default