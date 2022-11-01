//manage state loacally

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      ...this.state,
      input: event.target.value,
    });
  }
  submitMessage() {
    this.setState({
      input: "",
      messages: [...this.state.messages, this.state.input],
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        message{" "}
        <input
          type="text"
          onChange={this.handleChange.bind(this)}
          value={this.state.input}
        />
        <button onClick={this.submitMessage.bind(this)}>submit</button>
        <ul>
          {this.state.messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        {/* Change code above this line */}
      </div>
    );
  }
}
