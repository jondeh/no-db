import React, {Component} from 'react'

class Note extends Component {
    constructor(){
        super()
        this.state = {
            colorToggle: ''
        }
    }

    // componentDidMount(){
    //     this.setState({colorToggle: this.props.setFalse})
    // }

   componentDidUpdate(prevProps){
       console.log(prevProps, "prevprops")
       console.log(this.props, "this.props")
       if(prevProps.myNotes !== this.props.myNotes){
           console.log("insidefirst")
       if(this.props.myNotes === 'XXXXXX'){
           console.log("insidesecond")
           this.setState({colorToggle: false})
        }
       }
   }
    
    render(){
        const {addChordFn, addNotesFn, fretInd, strInd, fret, setFalse} = this.props
        return(
                        <div className="note"
                                style={{boxShadow: this.state.colorToggle && "0 0 10px 5px #fdbafd"}} 
                                key={fretInd + 1}
                                onClick={(event) => {
                                    this.setState({colorToggle: !this.state.colorToggle})
                                    addNotesFn(event, strInd, fretInd + 1)
                                }}>
                                    <div className="noteName">{fret}</div>
                        </div>
                        
        )}
}

export default Note;