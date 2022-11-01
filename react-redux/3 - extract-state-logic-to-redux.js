//First, define an action type ADD and set it to a const ADD. Next, define an action creator addMessage() which creates the action to add a message. You'll need to pass a message to this action creator and include the message in the returned action.

//Then create a reducer called messageReducer() that handles the state for the messages. The initial state should equal an empty array. This reducer should add a message to the array of messages held in state, or return the current state. Finally, create your Redux store and pass it the reducer.

// Define ADD, addMessage(), messageReducer(), and store here:

const ADD = 'ADD';

const addMessage = (message) => {
    return {
      type: ADD,
      message
    }
}

const messageReducer = (state = [], action) => {
  switch(action.type){
    case ADD:
    return [...state, action.message];
    default:
    return state;
  }
}

const store = Redux.createStore(messageReducer);