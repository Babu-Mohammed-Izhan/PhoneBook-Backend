const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}


const password = process.argv[2]

const url = `mongodb+srv://izhan:${password}@cluster0.airbl.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

const newname = process.argv[3]
const newnumber = process.argv[4]
if (process.argv.length < 4) {
    Person
        .find({})
        .then(persons => {
            persons.forEach(note => [
                console.log(note)
            ])
            mongoose.connection.close()
        })

} else {
    const person = new Person({
        name: newname,
        number: newnumber,
    })

    person.save().then(() => {
        console.log(`added ${newname} number ${newnumber} to phonebook`)
        mongoose.connection.close()
    })
}










