import React, {Component} from 'react'
import Fretboard from './Fretboard'
import ChordsComponent from './ChordsComponent'
import axios from 'axios'

class Body extends Component {
    constructor(){
        super()
            this.state = {
                myNotes: ["X", "X", "X", "X", "X", "X"],
                myChords: [],
                className: "body",
                chordName: ""
            }
    }

    addNotes = (e, si, i) => {
        let newNotes = [...this.state.myNotes]
        newNotes[si] = i
        this.setState({
            myNotes: newNotes,
        })
    }

    addChord = () => {
        let joinChords = this.state.myNotes.join("-")
        axios.get(`https://api.uberchord.com/v1/chords?voicing=${joinChords}`)
        .then(res => {
            let newChords = res.data[0]
            axios.post('/api/my-chords', {newChords}).then(response => {
                this.setState({
                    myChords: response.data,
                    myNotes: ["X", "X", "X", "X", "X", "X"],
                    className: 'body'
                    
            })
            })
        })
        .catch(err => console.log(err))
    }


    handleChange = (e) => {
        this.setState({myName: e})
    }

    handleNameSubmit = (id) => {
        console.log(id)
        axios.put(`/api/my-chords/${id}`, {chordTitle: this.state.myName})
        .then(res => {
            this.setState({myChords: res.data})
        })
    }
    


    editChords = (id, chord) => {
        let editingChords = chord.strings.split(' ')
        this.setState({myNotes: editingChords})
    }



    deleteChords = (id) => {
        
        
        axios.delete(`/api/my-chords/${id}`).then(res => {
            this.setState({
                myChords: res.data
            })
        })
    }

    render(){
        console.log(this.state.chordName, "chordName")
        console.log(this.state.myChords, "myChords")
    return(
        <div className={this.props.bodyStyle}>
            <Fretboard 
                addChordFn={this.addChord}
                addNotesFn={this.addNotes}
                myNotes={this.state.myNotes}
                updateHighlight={this.props.updateHighlight}
                myChords={this.state.myChords}/>
            <ChordsComponent 
                myChords={this.state.myChords}
                deleteChords={this.deleteChords}
                editChords={this.editChords}
                myNotes={this.state.myNotes}
                handleNameSubmit={this.handleNameSubmit}
                handleChange={this.handleChange}
                updateStyle={this.props.updateStyle}
                chordPicUpdate={this.props.chordPicUpdate}/>
        </div>
        )
    }
}

export default Body;