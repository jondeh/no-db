const express = require('express'),
    cors = require('cors'),
    port = 8888,
    app = express()
    chordCtrl = require('./controllers/chordCtrl')

app.use(cors())
app.use(express.json())

app.get('/api/chords', chordCtrl.getNotes)
app.post('/api/my-chords', chordCtrl.addChords)
app.put('/api/my-chords', chordCtrl.editChords)
app.put('/api/my-chords/:id', chordCtrl.editName)
app.delete('/api/my-chords/:id', chordCtrl.deleteChords)






app.listen(port, () => console.log(`RUNNING ON ${port}`))