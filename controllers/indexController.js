const indexController = {
  
    index: (req, res) => {
        res.render("index")
    },

    clientes: (req, res) => {
        res.render("clientes")
    },

    createClientes: (req, res) => {
        res.render("createClientes")
    },

    editClientes: (req, res) => {
        res.render("editClientes")
    }

}

module.exports = indexController;