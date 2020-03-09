import React, {Component} from 'react'
import Chord from './Chord'

class ChordsComponent extends Component {
    constructor(){
        super()
        this.state = {
        }
    }

    render(){
        const {myChords, deleteChords, editChords, myNotes, handleNameSubmit, handleChange} = this.props
        return(
            <div className="chords-container">
                <div className="chords-title"
                onClick={this.props.changeBackground}><h3>My Chords</h3></div>
                <div className="chords-grid">
                    
                {myChords.map((e,i) => <Chord 
                                            key={e.id}
                                            chordTitle={e.chordName}
                                            chordTones={e.tones}
                                            deleteChords={deleteChords}
                                            editChords={editChords}
                                            chords={e}
                                            myNotes={myNotes}
                                            handleNameSubmit={handleNameSubmit}
                                            handleChange={handleChange}
                                        />)}
                    
                </div>
            </div>
        )
    }
}

export default ChordsComponent;