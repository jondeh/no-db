const data = require('../data.json')
const chords = []
let counter = 0


module.exports = {
    getNotes: (req, res) => {
        res.status(200).send(data)
    },

    addChords: (req, res) => {
        const {newChords} = req.body
        newChords.id = counter
        chords.push(newChords)
        counter++
        res.status(200).send(chords)
    },

    editChords: (req, res) => {
        
    },

    editName: (req, res) => {
        console.log(req.params)
        console.log(req.body)
        const {id} = req.params
        const {chordTitle} = req.body
        let index = chords.findIndex(e => +e.id === +id)
        chords[index].chordName = chordTitle
        console.log(chords)
        res.status(200).send(chords)
    },

    deleteChords: (req, res) => {
        const {id} = req.params
        const index = chords.findIndex(e => +e.id === +id)
        chords.splice(index, 1)
        res.status(200).send(chords)
    }
}