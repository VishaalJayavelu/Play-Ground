const mongoose = require('mongoose')

const url1 = 'mongodb+srv://chat_app_admin:admin@cluster0.b4jdbnw.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url1, {}).then(()=> console.log('Connected to DB')).catch((e)=> console.log('Error', e))
