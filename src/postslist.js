import React from 'react';
import Line from './line';

class PostsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then(data => {
                this.setState({posts: data})
            })
    }

    render(){
        return(
            <div>
                {(this.state.posts.map(post => <Line {...post} />))}
            </div>
        )
    }
}

export default PostsList;