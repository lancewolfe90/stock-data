const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/stocks', (req, res) => {
  const stocks = db.stocks.findAll().slice(0).sort((a, b) => a.name > b.name ? 1 : 0)
  console.log("htting the stocks route", stocks[0]);
  res.json(stocks)
})

router.get('/stocks/:id', (req, res) => {
  const stock = db.stocks.find(req.params.id)
  res.json(stock)
})

router.post('/stocks', (req, res) => {
  const newstock = db.stocks.insert({
    "name": req.body.name,
    "symbol": req.body.symbol,
    "currentPrice": req.body.currentPrice
  })
  res.json(newstock)
})

router.put('/stocks/:id', (req, res) => {
  const updatedstock = db.stocks.findByIdAndUpdate(req.params.id, {
    "name": req.body.name,
    "symbol": req.body.symbol,
    "currentPrice": req.body.currentPrice
  })
  res.json(updatedBook)
})

// router.patch('/books/cart/add/:id', function (req, res) {
//   const book = db.books.find(req.params.id)
//   book.inCart = true
//   res.json(book)
// })

// router.patch('/books/cart/remove/:id', function (req, res) {
//   const book = db.books.find(req.params.id)
//   book.inCart = false
//   res.json(book)
//})

router.patch('/stocks/:id', (req, res) => {
   const stock = db.stocks.findByIdAndUpdate(req.params.id, req.body)
   res.json(db.stocks.findAll())
})

router.delete('/stocks/:id', (req, res) => {
  let selectedstock = db.stocks.find(req.params.id)
  db.stocks.delete(req.params.id)
  res.json(selectedstock)

})



module.exports = router
