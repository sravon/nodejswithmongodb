const mongoose = require('mongoose')

module.exports = () => {
  mongoose
    .connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@mongo:27017/test`, {
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .then(() => {
      console.log('Mongodb connected.......')
    })
    .catch(err => console.log(err.message))

  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to mongo..')
  })

  mongoose.connection.on('error', err => {
    console.log(err.message)
  })

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection is disconnected...')
  })

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log(
        'Mongoose connection is disconnected due to app termination...'
      )
      process.exit(0)
    })
  })
}
