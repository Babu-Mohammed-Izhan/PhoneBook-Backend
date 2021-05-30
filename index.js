require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

morgan.token('content', function (req, res) { return JSON.stringify(req.body) })

const app = express()
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - :content'))
app.use(cors())
app.use(express.static('build'))
app.use(express.json())



app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
    Person
        .find({})
        .then(persons => {
            response.json(persons)
        })

})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.get('/info', (request, response) => {
    const arrayLength = persons.length
    response.send(`<h3>Phonebook has info for ${arrayLength} people</h3>`)
})

app.get("/api/persons/:id", (request, response, next) => {
    Person.findById(request.param.id)
        .then(person => {
            if (person) {
                response.json(person)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => {
            next(error)
        })
})



app.delete('/api/persons/:id', (request, response, next) => {
    console.log(request.params.id)
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})



app.post('/api/persons', (request, response, next) => {
    const body = request.body
    if (body.name === null) {
        return response.status(400).json({
            error: 'name is missing'
        })
    } else if (body.number === null) {
        return response.status(400).json({
            error: 'number is missing'
        })
    }
    const person = new Person({
        name: body.name,
        number: body.number,
    })

    person.save().then(person => {
        console.log(`added ${body.name} number ${body.number} to phonebook`)
        response.json(person)
    })
        .catch(error => {
            next(error)
        })
})



app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body

    const person = {
        name: body.name,
        number: body.number,
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
        .then(updatedPerson => {
            response.json(updatedPerson)
        })
        .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
    next(error)
}

app.use(errorHandler)

