class App extends React.Component {
    state = {
        text: ""
    }
    handleClick = () => {
       //this.state.text += "b";
       this.setState({
           text: this.state.text + "b"
       })
    }
    render() {
        return (
            <>
                <button onClick={this.handleClick}>Add "b"</button>
                <h1>{this.state.text}</h1>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
