import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./singer";
import BookStore from "./BookStore";

function App() {
    const books = [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            description: "The Great Show In Broadly ",
            price: 340,
            available: true,
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            description: "To Kill a Mockingbird",
            price: 340,
            available: false,
        },
        {
            id: 3,
            title: "1984",
            author: "George Orwell",
            description: "1984",
            price: 340,
            available: true,
        },
        {
            id: 4,
            title: "Brave New World",
            author: "Aldous Huxley",
            description: "1984",
            price: 980,
            available: true,
        },
    ];

    const actors = ["Salman", "John", "Wick", "Taylor", "Tom"];

    const singers = [
        { name: "Sumi", age: 26 },
        { name: "Elita", age: 35 },
        { name: "Konal", age: 38 },
        { name: "Taylor", age: 42 },
    ];

    return (
        <>
            <h1>Vite + React</h1>

            <BookStore books={books}></BookStore>

            {singers.map((name) => (
                <Singer singer={name}></Singer>
            ))}

            <Actor name="Shah Rukh Khan" age={45}></Actor>

            {actors.map((name) => (
                <Actor name={name}></Actor>
            ))}

            <Todo task="learn React" isDone={true}></Todo>
            <Todo task="Explore Core Concepts" isDone={false}></Todo>
            <Todo task="Try JSX" isDone={true}></Todo>
            
      <Device name="Laptop" price="45"></Device>
      <Device name="Mobile"></Device>
      <Person></Person>
      <Student grade="7" score="98"></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer>
            <Students></Students>

            <img src={reactLogo} alt="React logo" />
            <img src={viteLogo} alt="Vite logo" />
        </>
    );
}

function Device(props) {
    // console.log(props)
    return <h2>This device: </h2>;
}

function Person() {
    const age = 45;
    const netWorth = "750M";
    return (
        <h3>
            {" "}
            Shah rukh Khan age {age}, netWorth {netWorth}
        </h3>
    );
}

const { grade, score } = { grade: "7", score: "98" };

function Student({ grade = 3, score = 0 }) {
    console.log(grade, score);
    return (
        <div className="student">
            <h2>This is Me</h2>
            <h3>Grade: {grade}</h3>
            <p>Score: {score}</p>
            <p>Profession</p>
        </div>
    );
}

function Developer() {
    const developerStyle = {
        // backgroundColor: 'purple',
        // color: 'black',
        // padding: '10px',
        // borderRadius: '20px',
        // width: '200px',
        // margin: '10px',
        // display: "flex",
        // flexDirection: 'column',
    };
    return (
        <div
            style={{
                backgroundColor: "purple",
                color: "black",
                padding: "10px",
                borderRadius: "20px",
                margin: "10px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <h2>This is a Developer</h2>
            <h3>Name:</h3>
            <p>Age:</p>
            <p>Profession</p>
        </div>
    );
}

// *******************************************************************

function Students() {
    const students = [
        { name: "Shah Rukh Khan", age: 45, netWorth: "750M" },
        { name: "Aamir Khan", age: 42, netWorth: "650M" },
        { name: "Salman Khan", age: 38, netWorth: "600M" },
        { name: "Rahul Khan", age: 36, netWorth: "550M" },
        { name: "Deepak Chopra", age: 33, netWorth: "500M" },
    ];
    return (
        <div>
            <h3>
                its me{" "}
                {students.forEach((element) => {
                    console.log(element.name);
                })}
            </h3>
        </div>
    );
}

export default App;
