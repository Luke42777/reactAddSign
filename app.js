class App extends React.Component {
    state = {
        text: ""
    }
    handleClick = () => {
        const nr = Math.floor(Math.random() * 10);
        this.setState((prevState) => (
            {
                text: prevState.text + nr
            })
        )
    }
    render() {
        return (
            <>
                <button onClick={this.handleClick}>Add number</button>
                <Display text={this.state.text}>bbbb</Display>
            </>
        )
    }
}

const Display = (props) => {
    return (
    < h1 > { props.text }</h1 >)
    
}

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("root"));
