import React from 'react'
import Two from './two'
class Fav extends React.Component{
    favcol="Lavender"
    render(){
        return <>
            <Two favcol={this.favcol}/>
        </>
    }
    
}
export default Fav