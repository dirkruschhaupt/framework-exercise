import React, { Component } from 'react';
import array from './data.js';
import './App.css';

let header = 'Read-It';

console.log(array);

function Comment(props) {
    return (
        <div className="col-12">
          <p>{props.comment}</p>
        </div>
    );
}

function Image(props) {
  return (
    <img className="img-fluid rounded p-3" src={props.image} alt={props.author}/>
  );
}

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfComments: 0,
            numberOfDays: 0,
            date: Date(),
            isHidden: true
        }
    }

    render() {
      let comments = this.state.numberOfComments;
      let postedDate = this.state.date.slice(0, 15)

      return (
        <div className="row mt-5 bg-light border rounded">

          <div className="col-xs-12 col-sm-4 col-lg-3">
            <img className="img-fluid rounded p-3" src={array[0].image} alt={array[0].author}/> 
          </div>
    
          <div className="col-xs-12 col-sm-6 col-lg-7 p-3">

            <header className="font-weight-bold">
              <span>{array[0].title} | ^ {array[0].vote}</span>
            </header>
                
            <p>{array[0].article}</p>

            <span>{postedDate} | {comments} comments</span>
                 
          </div>

          <div className="col-xs-12 col-sm-2 p-3 text-right">
            <span>{array[0].author}</span>
          </div>

        </div>

      );
    }
    
}

class App extends Component {
    
    render() { 
        
        return (
          <div>
            <header className="App-header">
              <h3 className="App-title">{header}</h3>
            </header>
            <nav >
              <input type="text" className="font-weight-bold m-3" placeholder="Filter"></input>
              <button type="button" className="btn btn-secondary m-3 float-right">New Post</button>
            </nav>
              <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                  <div className="col-11">
                  <Post />
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default App;