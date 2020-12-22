module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/transactionSchema', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
