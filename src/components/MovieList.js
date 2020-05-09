import React, { Component } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap'


class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList:[],
            initSelected: 'Wybierz film',
            selectedMovie: '',
            // video_url: ''
        };
        this.changeMovie = this.changeMovie.bind(this)
    };

    componentDidMount() {
        const DATABASE = '/movies/database.json';
        axios.get(DATABASE)
              .catch(function (error) {
                  if (error.response.status) {
                      console.log(error.response.status)
                  }
              })
              .then(response => this.setState({
                movieList: response.data.movies,
              }))
      }

      changeMovie(movie) {
        const target = movie.target;
        const value = target.value;
        const name = target.name;
        const key = target.key;
        this.setState({
            selectedMovie: name,
            video_url: key
        })
        console.log(this.state.selectedMovie)
        console.log(this.state.video_url)
      }

    render() {
        const {movieList} = this.state
        return (
            <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-movies">
                    {this.state.selectedMovie ? this.state.selectedMovie : this.state.initSelected}
                </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {movieList.map((movie) =>
                            <Dropdown.Item
                                key={movie.id}
                                value={movie.id}
                                name={movie.title}
                                onClick={this.changeMovie}
                                >{movie.title}
                    </Dropdown.Item>
                        )}
                </Dropdown.Menu>
            </Dropdown>
        )
    }

}

export default MovieList;