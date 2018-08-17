import React, { Component } from 'react';


let header = 'Read-It';

let array = 
  [
    {
      id: 1,
      title: "The Haunter in the Dark",
      author: "Robert Blake",
      image: "https://r.hswstatic.com/w_907/gif/stufftoblowyourmind-23-2014-04-The_Haunter_of_the_Dark_by_PeteAmachree.jpg",
      article: "Horrible beyond conception was the Frye yard. The natives, all of a tangible object with measureable dimensions could so easily lead back at the virtual identity, and reflecting on what had set out through the solid form. One definite flash I shall go mad itself at Plate XII, which represented in gruesome detail a butcher’s shop of the frightful position of subordination and pleading. Noyes’s tones exuded a kind of jewellery that the kylix parted, and Willett appeared in the dark. Only once in a throaty voice of my prospective host. From his cursory survey were made. From the very moment I decided that the visions (rather than the worst had happened.",
      vote: 5,
      date: "2014-03-01T21:28:56.782Z"
    },
    {
      id: 2,
      image: "https://mcrassus.files.wordpress.com/2015/04/shadow-over-innsmouth.jpg", 
      title: "The Shadow over Innsmouth",
      author: "Obed Marsh", 
      article: "The most we said almost nothing, for I had been turned back by the marine Old Ones. Heating devices were new and almost prostrating those in the centre of top probably breathing aperture. At end of torso, corresponding to projections at other end. This, I realised, was my first subconscious glance and supplied the rest—and of course it would be no use . . She’d have got me ye Sarcophagus of ye Spheres beyond. Have ye Wordes that bringe up YOGGE-SOTHOTHE, and sawe for ye firste Time that fface spoke of the arch was known to him, was to die. The life-glow—he knows how much had still to tell the audient void.",
      votes: 16,
      date: "2005-08-19T23:15:30.000Z"
    },
    {
      id: 3,
      image: "https://f4.bcbits.com/img/a2106523465_10.jpg", 
      title: "The Colour out of Space",
      author: "Nahum Gardner", 
      article: "There was something more. The butler, tougher-fibred than I, did not wish to go thither because it suggests something Wilcox had told no one could perhaps crawl inconspicuously through the arched gate into Celephaïs and in charge of the lower hall, at one point there lay a trim white Nahum Gardner house amidst its fertile gardens and watch the dense personnel of such a doubt, although no ghostly evidence was damnably vast and imposing labyrinths of stone with a notorious cult-leader, lately expelled from England, who had suffered but little idea of any hippocephalic bird. Its outline against the walls of slippery thumping.",
      votes: 2,
      date: "2013-06-02T13:38:16.002Z"
    }
  ];

//let title = "The Haunter in the Dark";
//let author = "Robert Blake";
//let image = "https://r.hswstatic.com/w_907/gif/stufftoblowyourmind-23-2014-04-The_Haunter_of_the_Dark_by_PeteAmachree.jpg";
//let article = "Horrible beyond conception was the Frye yard. The natives, all of a tangible object with measureable dimensions could so easily lead back at the virtual identity, and reflecting on what had set out through the solid form. One definite flash I shall go mad itself at Plate XII, which represented in gruesome detail a butcher’s shop of the frightful position of subordination and pleading. Noyes’s tones exuded a kind of jewellery that the kylix parted, and Willett appeared in the dark. Only once in a throaty voice of my prospective host. From his cursory survey were made. From the very moment I decided that the visions (rather than the worst had happened.";
//let vote = 5;
//let date = "2014-03-01T21:28:56.782Z";

function Comment(props) {
    return (
        <div className="col-12">
          <p>{props.comment}</p>
        </div>
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
            <img className="img-fluid rounded p-3" src={array[0].image} /> 
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