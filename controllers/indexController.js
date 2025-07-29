const indexController = {
  
    index: (req, res) => {
        res.render("index")
    },

    clientes: (req, res) => {
        res.render("clientes")
    }

}

module.exports = indexController;