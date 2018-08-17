import React, { Component } from "react";
import ".App.css";
import From from "./Form";

class App extends  Component {
    state = {
        fields: {}
    };

    onChange = updatedValue => {
        this.setState({
            fields: {

            }
        });
    };

    render() {
        return (
            <div className="App">
                <Form onChange={fields => this.onChange(fields)} />
                <p>
                    {JSON.stringify(this.state.fields, null, 2)}
                </p>
            </div>
        )
    }

};