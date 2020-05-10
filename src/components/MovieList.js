import React, { Component } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap'
import Video from './Video';


class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList:[],
            initSelected: 'Wybierz film',
            selectedMovie: '',
            video_url: '',
            description: ''
        };
        this.changeMovie = this.changeMovie.bind(this);
        this.getLink = this.getLink.bind(this);
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
        console.log(target)
        const value = target.value;
        const name = target.name;
        const key = target.key;
        this.setState({
            selectedMovie: name,
            video_url: value
        })
        console.log(this.state.selectedMovie)
        console.log(this.state.video_url)
      }

      getLink = (link, description) => {
          this.setState({
              video_url: link,
              description: description
          })
          console.log(this.state.video_url)
          console.log(this.state.description)
      }

    render() {
        const {selectedMovie, movieList, initSelected, video_url, description} = this.state;
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-movies">
                        {selectedMovie ? selectedMovie : initSelected}
                    </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {movieList.map((movie) =>
                                <Dropdown.Item
                                    key={movie.id}
                                    value={movie.video_url}
                                    name={movie.title}
                                    // onClick={this.changeMovie}
                                    onClick={() => this.getLink(movie.video_url, movie.description)}
                                    >{movie.title}
                        </Dropdown.Item>
                            )}
                    </Dropdown.Menu>
                </Dropdown>
                <br />
                <Video title={selectedMovie} video_url={video_url} description={description}/>
            </div>
        )
    }

}

export default MovieList;