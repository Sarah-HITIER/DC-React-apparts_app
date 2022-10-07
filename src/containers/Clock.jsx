// import { Component } from "react";
import React, { useEffect, useState } from "react";

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(() => setDate(new Date()));
        };
    }, []);

    return <h2>Mon heure est : {date.toLocaleTimeString()}</h2>;
}

// class Clock extends Component {
// state = {
//     date: new Date()
// };

// componentDidMount() {
//     this.tick = () => {
//         this.setState({
//             date: new Date()
//         });
//     };
//     setInterval(this.tick, 1000);
// }

// componentWillUnmount() {
//     clearInterval(this.tick);
// }

// render() {
//     return <h2>Mon heure est : {this.state.date.toLocaleTimeString()}</h2>;
// }
// }

export default Clock;
