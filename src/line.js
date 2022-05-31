import React from 'react';

class Line extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: false,
            like: false
        };
    }

    handleClick = () =>{
        if(this.state.clicked === false){
            return this.setState({clicked: true})
        } else if(this.state.clicked === true){
            return this.setState({clicked: false})
        }
    }

    likeClick = () =>{
        if(this.state.like === false){
            return this.setState({like: true})
        } else if(this.state.like === true){
            return this.setState({like: false})
        }
    }

    render(){
        let iconClass = this.state.clicked ? 'fa fa-chevron-circle-right rotate' : 'fa fa-chevron-circle-right notRotate';
        let bodyClass = this.state.clicked ? 'postsbody visible' : 'postsbody hidden';
        let likeClass = this.state.like ? 'fa fa-thumbs-up' : 'fa fa-thumbs-o-up';
        return(
            <div className='container'>
                <ul>
                    <li key={this.props.id} className='line' onClick={this.handleClick}>
                        <i className={iconClass} aria-hidden="true"></i>
                        {this.props.title}
                    </li>
                    <div className={bodyClass}>
                        {this.props.body}
                        <div>
                            <i id='like' className={likeClass} onClick={this.likeClick} aria-hidden="true"></i>
                        </div>           
                    </div>
                </ul>
            </div>    
        )
    }
}

export default Line;