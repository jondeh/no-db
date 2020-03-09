import React, {Component} from 'react'

class StringStart extends Component {
    constructor(){
        super()
        this.state = {
            colorToggle: false
        }
    }

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
        const {strInd, string, addNotesFn, myNotes, setFalse} = this.props
        return(
            <div className="string-start"
                            style={{boxShadow: this.state.colorToggle && "0 0 10px 5px #fdbafd"}}
                            key={strInd}
                            onClick={(event) => {
                                this.setState({colorToggle: !this.state.colorToggle})
                                addNotesFn(event, strInd, 0)}}><h3>{string}</h3>
                        </div>
        )
    }
}

export default StringStart;