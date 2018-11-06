import React, { Component } from 'react';
import './App.css';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {num1: 1, num2: 0, op: ''};
    }

    calcFunc(props) {
        switch(props.currentTarget.id){
            case "clear":{
                this.setState({
                    num1: 0,
                    num2: 0,
                    op: ''
                });
                break;
            }
            default:{
                break;
            }
        }
        this.render();
    }

    render() {
        return React.createElement("div", { class: 'App' },
            React.createElement("header", { class: "App-header" },
                React.createElement("p", {}, this.state.num1),
            ),
            React.createElement("div", {},
                React.createElement("div", {}, 
                    React.createElement("button", {id:"clear", class: "btn largebtn", onClick: this.calcFunc}, "CLEAR"),
                    React.createElement("button", {class: "btn otherbtn orangebtn"}, "/")
                ),
                React.createElement("div", {}, 
                    React.createElement("button", {class: "btn otherbtn"}, "7"),
                    React.createElement("button", {class: "btn otherbtn"}, "8"),
                    React.createElement("button", {class: "btn otherbtn"}, "9"),
                    React.createElement("button", {class: "btn otherbtn orangebtn"}, "*")
                ),
                React.createElement("div", {}, 
                    React.createElement("button", {class: "btn otherbtn"}, "4"),
                    React.createElement("button", {class: "btn otherbtn"}, "5"),
                    React.createElement("button", {class: "btn otherbtn"}, "6"),
                    React.createElement("button", {class: "btn otherbtn orangebtn"}, "-")
                ),
                React.createElement("div", {}, 
                    React.createElement("button", {class: "btn otherbtn"}, "1"),
                    React.createElement("button", {class: "btn otherbtn"}, "2"),
                    React.createElement("button", {class: "btn otherbtn"}, "3"),
                    React.createElement("button", {class: "btn otherbtn orangebtn"}, "+")
                ),
                React.createElement("div", {}, 
                    React.createElement("button", {class: "btn largebtn"}, "0"),
                    React.createElement("button", {class: "btn otherbtn orangebtn"}, "=")
                )
            )
        );
    }
}

export default App;
