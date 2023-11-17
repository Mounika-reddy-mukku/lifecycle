import React from 'react'
class Didmount extends React.Component{
    constructor(props){
        super(props);
        this.state={ct:new Date().toLocaleTimeString()}
    }
    componentDidMount=()=>{
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
                    </div>
                </div>

            </div>
            
        </>
    }

}
export default Didmount