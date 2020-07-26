import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props)
  
  this.state = {
    friends
  };
  }
  removeFriend = id => {
    
    const friends = this.state.friends.id.filter(friend => friend.id !== id);
    // set friends to a filter of each id, passing each item of the array's ID not equal to it's own ID

    this.setState({ friends })
  };

  
  render(){
  return (
    <Wrapper>
      <h1 className="title">Friends List</h1>
      {this.state.friends.map(friend => (
      <FriendCard
        removeFriend = {this.removeFriend}
        id={friend.id}
        key={friend.id}
        name={friend.name}
        image={friend.image}
        occupation={friend.occupation}
        location={friend.location}
        />
      ))}
    </Wrapper>
    );
    }
  
  }


export default App;
