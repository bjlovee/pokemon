const RESOURCE_PATH = '/pokemon'

const viewController = {
    index(req, res, next){
        res.render('pokemon/Index', res.locals.data)
    },
    newView(req, res, next){
        res.render('pokemon/New')
    },
    edit(req, res, next){
        res.render('pokemon/Edit', res.locals.data)
    },
    show(req, res, next){
        res.render('pokemon/Show', res.locals.data)
    },
    redirectHome(req, res, next){
        res.redirect(RESOURCE_PATH)
    },
    redirectShow(req, res, next){
        const pokemonId = req.params.id || res.locals.data.pokemon._id
        res.redirect(`${RESOURCE_PATH}/${pokemonId}`)
    }

}

module.exports = viewController