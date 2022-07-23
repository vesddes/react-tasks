import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../actions/posts';


class Posts extends Component {

    show = () => {
        this.props.getPosts()

    }

    render() {
        const {
            posts,
            status
        } = this.props;

        return status  ? <button onClick={this.show}>Show content</button> : (
            <div>
                {
                    posts.map((item) => (
                        <div className="posts" key={item.id}>
                            <h2>Post №{item.id}</h2>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                        </div>
                    ))
                }
            </div>
        );
    }

}



const mapStateToProps = (state) => ({
    loading: state.isLoading,
    posts: state.posts,
    status: state.status
});

const mapDispatchToProps = {
    getPosts
};

export const PostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);


