module.exports = db => {
    const stocks = [
            {
              name: 'Apple, Inc.',
              symbol: 'AAPL',
              currentPrice: 169.75,
              id: 1
            },
            {
              name: 'Starbucks, Inc.',
              symbol: 'SBUX',
              currentPrice: 108.09,
              id: 2
            },
            {
              name: 'Microsoft, Inc.',
              symbol: 'MSFT',
              currentPrice: 319.91,
              id: 3
            },
            {
              name: 'Cisco Systems, Inc.',
              symbol: 'CSCO',
              currentPrice: 60.36,
              id: 4
            },
            {
              name: 'QUALCOMM Incorporated',
              symbol: 'QCOM',
              currentPrice: 176.67,
              id: 5
            },
            {
              name: 'Amazon.com, Inc.',
              symbol: 'AMZN',
              currentPrice: 3341.58,
              id: 6
            }
      ]
  
    stocks.forEach(stock => db.stocks.insert(stock))
  }
  