import React, { Component } from 'react'
import axios from 'axios'
import Note from './Note'
import StringStart from './StringStart'

class Fretboard extends Component {
    constructor() {
        super()
        this.state = {
            strings: [],
            notes: [],
            className: 'fretboard-container2'


        }
    }

    componentDidMount = () => {
        axios.get('/api/chords').then(res => {
            this.setState({
                strings: res.data[0],
                notes: res.data[1]
            })
        })
    }

    click1 = () => {
        this.setState({className: "fretboard-container"})
    }

    click2 = () => {
        this.setState({className: "fretboard-container2"})
    }

    click3 = () => {
        this.setState({className: "fretboard-container3"})
    }

    click4 = () => {
        this.setState({className: "fretboard-containerRyan"})
    }

    click5 = () => {
        this.setState({className: "fretboard-containerUnicorn"})
    }

    click6 = () => {
        this.setState({className: 'fretboard-containerPerez'})
    }

    render() {
        const { addChordFn, addNotesFn, myNotes } = this.props
        
        return (
            <>
            <div className='fretboard-body'>
                <div className='string-start-container'>
                    
                    {this.state.strings.map((string, strInd) => {
                        return <StringStart 
                        strInd={strInd}
                        string={string}
                        addNotesFn={addNotesFn}
                        myNotes={myNotes.join('')}
                        setFalse={this.setFalse}
                        updateHighlight={this.props.updateHighlight}
                        />
                    })}
                </div>
                <div className={this.state.className}>
                    <div className="displayStrings">
                        <div className="displayString1"></div><div className="displayString2"></div><div className="displayString3"></div><div className="displayString4"></div><div className="displayString5"></div><div className="displayString6"></div><div className="displayString7"></div>
                    </div>
                    <div className="displayFrets">
                        <div className="displayFret"></div><div className="displayFret"></div><div className="displayFret"></div><div className="displayFret"></div><div className="displayFret"></div><div className="displayFret"></div><div className="displayFret"></div><div className="displayFret"></div><div className="displayFret"></div>
                    </div>
                    <div className="circles-container">
                        <div className="circles"></div>
                        <div className="circles"></div>
                        <div className="circles"></div>
                    </div>
                    {this.state.notes.map((string, strInd) => {
                        return <div className="string"
                            key={strInd}>
                            {string.map((fret, fretInd) => <Note
                                                                notes={this.state.notes} 
                                                                addChordFn={addChordFn}
                                                                addNotesFn={addNotesFn}
                                                                fretInd={fretInd}
                                                                strInd={strInd}
                                                                fret={fret}
                                                                myNotes={myNotes.join('')}
                                                                setFalse={false}
                                                                updateHighlight={this.props.updateHighlight}
                                                            />
                                )}
                        </div>
                    })}
                </div>
                <button
                    className="submit"
                    onClick={addChordFn}>ADD CHORD</button>
                    
            </div>
                <div className="button-container">
                <button className="dark-wood"
                onClick={this.click2}></button>
                <button className="medium-wood"
                onClick={this.click1}></button>
                <button className="light-wood"
                onClick={this.click3}></button>
                <button className="ryan" onClick={this.click4}></button>
                <button className="unicorn" onClick={this.click5}></button>
                <button className="perez" onClick={this.click6}></button>
                </div>
            </>
        )
    }
}

export default Fretboard;