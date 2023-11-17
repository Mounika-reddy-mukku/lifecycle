import React from 'react'
class Normal extends React.Component{
    constructor(props){
        super(props);
        this.state={ct:new Date().toLocaleTimeString()}
    }
    shouldComponentUpdate(){
        return false
    }
    updateTime=()=>{
        setInterval(()=>{
            this.setState({ct:new Date().toLocaleTimeString()})
        },1000)
        
    }
    render(){
        return <>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>

                    </div>
                    <div className='col-4 mt-4'>
                    <h1>{this.state.ct}</h1>
                    <button onClick={this.updateTime}>click</button>
                    </div>
                </div>

            </div>
            
        </>
    }

}
export default Normal