import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-2 gap-6 my-10'>
            <div className="card w-5/6 mx-auto bg-primary shadow-xl">
                <div className="card-body text-base-100">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>Application state can be defined as “data that can persist through the render cycles of a component and contributes to the rendering of a component or page”. <br />The ways to manage a state are: <br />

                        <ol>
                            <li>1. Global state: <br /> It is a way of managing state where your data is available to your whole application. Data in the global state will persist across various pages and components, and will cause all components and that have access to that data re-render when that data changes.</li>
                            <li>2. useState: <br /> It allows you to persist data across renders within a component, and will automatically re-render the component when its value changes. </li>
                            <li>3. useRef: <br /> useRef is great for storing values that you want to have persist through page renders, but that you donot want to cause the page to re-render for.</li>
                            <li>4. useReducer: <br /> It gives you a simple interface with predefined ways that your state can be managed.</li>
                        </ol></p>
                </div>
            </div>
            <div className="card w-5/6 mx-auto bg-primary shadow-xl">
                <div className="card-body text-base-100">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p> JavaScript is not a class-based language. While there is a class keyword in JavaScript since 2015, its only syntactic sugar. Under the hood, JavaScript has its own mechanism for defining and resolving inheritance relationships. <br />
                        This mechanism is known as the prototype chain. There are two key things to know about the JavaScript prototype chain.</p>
                    <p>
                        <ol>
                            <li>1. Prototypes are objects themselves: <br />
                                In class-based languages, the classes act as blueprints. No object of that class actually exists until you instantiate it in your program. So, you define the class, then you create an instance of that class. <br />
                                In JavaScript, prototypes are objects themselves. In fact, every function in JavaScript has a __proto__ attribute and a special property called `prototype` that allows you to access the __proto__ attributes.</li>
                            <li>2. JavaScript inheritance relationships are created/resolved on-the-fly at the time of interpretation <br />
                                JavaScript is designed to run inside browsers, so it is not compiled and it needs to be simple to interpret and resolve at runtime. <br />
                                The prototype chain keeps things simple by making everything a first-class object. Instead of class blueprints that can inherit once they are instantiated as real objects, JavaScript just chains objects together to form inheritance relationships.</li>
                        </ol></p>
                </div>
            </div>
            <div className="card w-5/6 mx-auto bg-primary shadow-xl">
                <div className="card-body text-base-100">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                    <p>Unit testing is defined as a quality assurance technique where application code is broken down into component building blocks along with each block or units associated data, usage processes, and functions to ensure that each block works as expected.  <br />Unit testing is a crucial part of software development. Failure to conduct unit tests or doing it with half-hearted measures is likely to create execution problems down the line, costing more time, money, and human resources to fix the problem. The objectives of unit testing include:
                        <ul>
                            <li>1. To verify the accuracy of a section of code</li>
                            <li>2. To have separate independent sections of a code </li>
                            <li>3. To locate and address bugs early in software development</li>
                            <li>4. To Increase the programmer’s understanding of the code base </li>
                            <li>5. To be able to effect changes easily</li>
                            <li>6. To make code reusability more feasible</li>
                        </ul></p>
                </div>
            </div>
            <div className="card w-5/6 mx-auto bg-primary shadow-xl">
                <div className="card-body text-base-100">
                    <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                    <p>When it comes to choosing a JavaScript framework, there is no clear winner. Each of the three frameworks has its own strengths and weaknesses. <br />It's important to choose the right framework for your project, based on the factors listed below: </p>
                    <p>
                        <ol>
                            <li>1. Pricing: <br /> React and Vue are both free and open source. Angular is free for use, but it is not open source. With that said, check for their license before using them commercially.</li>
                            <li>2. Performance: <br /> React and Vue are both very fast, thanks to their use of a virtual DOM. Angular is also fast, but it doesn't use a virtual DOM. </li>
                            <li>3. Learning Curve: <br /> React and Vue are both relatively easy to learn, thanks to their simple syntax and clear documentation. Angular is more difficult to learn, due to its size and complexity.</li>
                            <li>4. Resources: <br /> React, Angular, and Vue all have large and active communities to help ease your learning curve. So you will have help at your disposal no matter which framework you choose.</li>
                        </ol></p>
                </div>
            </div>

        </div>
    );
};

export default Blog;