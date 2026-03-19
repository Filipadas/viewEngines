const express = require('express');
const router = express.Router();

    // Simulando uma lista de produtos
    const produtos = [
        { id: 1, nome: 'Produto A', preco: 10.99 },
        { id: 2, nome: 'Produto B', preco: 19.99 },
        { id: 3, nome: 'Produto C', preco: 5.49 },
        { id: 4, nome: 'Produto D', preco: 15.00 },
        { id: 5, nome: 'Produto E', preco: 7.25 }
    ];

// GET - listar todos os produtos
router.get('/', (req, res) => {
    res.render('produtos/index', { title: 'Lista de Produtos', produtos });
});

module.exports = router;