import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

    // ID 36I
class Shelf extends Component {
    constructor() {
        super();
        //36C
        this.state = {
            bin: {}
        }
    }




        //36F
    render () {
        return (
            <div>
                <header>

                </header>

                <section>
                    <div>+ Add inventory to bin</div>
                    <div>+ Add inventory to bin</div>
                    <div>+ Add inventory to bin</div>
                    <div>+ Add inventory to bin</div>
                    <div>+ Add inventory to bin</div>
                    </section>
            </div>
        )
    }
}

export default Shelf;