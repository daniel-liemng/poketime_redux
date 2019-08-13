import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import PokeBall from '../pokeball.png';
// Connect is a function for higher component
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    posts: []
  };
  // Use this with Axios. Now use data in store instead
  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
  //     console.log(res);
  //     this.setState({
  //       posts: res.data.slice(0, 10)
  //     });
  //   });
  // }

  render() {
    // const { posts } = this.state;
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={PokeBall} alt="logo" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p tag="div">{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Posts Yet</div>
    );
    return (
      <div className="container home">
        <h4 tag="div" className="center">
          Home
        </h4>

        {/* <p tag="div">{postList}</p> */}
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
