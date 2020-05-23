import React, { Component } from 'react'

class Chord extends Component {
    constructor() {
        super()
        this.state = {
            isEdit: false
        }
    }

    isEdit = () => {
        this.setState({ isEdit: true })
    }

    handleSubmit = (e) => {
        e.stopPropagation()
        this.setState({ isEdit: false })
        this.props.handleNameSubmit(this.props.chords.id)
    }

    render() {
        const { chordTitle, chordTones, deleteChords, chords, editChords, myNotes, handleChange } = this.props
        let newNotes = myNotes.join('')
        console.log(this.state.isEdit, "EDIT")
        return (
            
            
            <div className={this.props.chordPicUpdate}>
                
                <div className="chord-title"
                    onClick={this.isEdit}>
                    {
                        this.state.isEdit
                            ? <><input className="input"
                                onChange={(e) => handleChange(e.target.value)} /> <button className="submitEdit"
                                    onClick={(e) => this.handleSubmit(e)}>OK</button></>
                            : <h1>{chordTitle.replace(/,/g, '').replace(/unknown/g, '').replace(/Em711/g, 'Ryan')}</h1>
                    }

                </div>
                <div className="tones">
                    {chordTones.replace(/,/g, '-').replace(/E-G-B-D-A/g, 'Aposhian')}
                </div>
                
                <div className={`${this.props.chordPicUpdate}-buttons`}>
                    {/* <button className="edit"
                        onClick={() => editChords(chords.id, chords)}
                    >EDIT
                    </button> */}
                    <button className={`${this.props.chordPicUpdate}-edit`}
                        onClick={() => deleteChords(chords.id)}
                    >X
                    </button>
                </div>
                    
            </div>
            
        )
    }
}

export default Chord;