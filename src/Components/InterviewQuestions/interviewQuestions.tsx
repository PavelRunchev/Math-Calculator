import React, { useState } from 'react';

import globalContainerStyle from '../../SASS-Modules/container.module.scss';
import globalStyle from '../../SASS-Modules/element.module.scss';

import { MDBBtn, MDBCollapse } from 'mdb-react-ui-kit';

import PreTag from 'Components/PreTag/preTag';
import ImageModel from '../Image/image.model';
import prototypeChainingImage from '../../public/images/prototype-chaining.png';

import { 
    JuniorQuestion2, 
    JuniorQuestion3, 
    JuniorQuestion4, 
    JuniorQuestion5, 
    JuniorQuestion6, 
    JuniorQuestion7,
    JuniorQuestion8,
    JuniorQuestion12,
    JuniorQuestion16,
    JuniorQuestion21,
    JuniorQuestion23,
    JuniorQuestion31,
    JuniorQuestion33Set,
    JuniorQuestion33filter,
    JuniorQuestion33forEach,
    JSPromiseJuniorQuestion, 
    JSPromiseJuniorResult, 
    JSPromiseSeniorQuestion, 
    JSPromiseSeniorResult 
} from '../../Services/codeData';

function InterviewQuestions(): JSX.Element {
    const [collapseOne, setCollapseOne] = useState<boolean>(false);
    const [collapseTwo, setCollapseTwo] = useState<boolean>(false);

    //load img with lazy load component (The component include inner imgUrl path, see component ImageModel).
    const imgPrototypeChaining = { 'imgUrl': prototypeChainingImage};
   
    return (
        <section className={globalContainerStyle.globalContainer}>
            <div className={`p-4 ${globalContainerStyle.globalMainContainer}`}>
                <div className={globalContainerStyle.globalTitleContainer}>
                    <div className={globalStyle.globalTitle}>
                        <h2 className={globalStyle.h2}>Interviw Questions</h2>
                    </div>
                </div>

                <h3 className='text-center mt-5'><b className={globalStyle.globalColorElement}>JavaScript</b> Junior Level Interview Questions</h3>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>1.</b> What is JavaScript, and what are its key features?</h5>
                <p>He is a programming language used primarily for creating dynamic web content and user interfaces. It is a popular language among web developers due to its ability to enhance the interactivity of web pages.</p>
                <p>Some key features of JavaScript include:</p>
                <p> &#x2022; Object-oriented: This means that it uses objects and classes to organize and structure code, making it more efficient and easier to read.</p>
                <p> &#x2022; Lightweight: JavaScript is a lightweight language that doesn't require much processing power to run.</p>
                <p> &#x2022; Versatile: JavaScript can run on both the client side (in a web browser) and the server side (on a web server).</p>
                <p> &#x2022; Interactivity: JavaScript is designed to make web pages more interactive and dynamic.</p>
                <p> &#x2022; Cross-platform compatibility: JavaScript is compatible with all major web browsers.</p>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>2.</b> What is the difference between "let" and "const"?</h5>
                <p>The main difference between <b>"let"</b> and <b>"const"</b> is that <b>"let"</b> allows the variable to be reassigned, while <b>"const"</b> creates a read-only reference to a value that cannot be reassigned.</p>
                <p className='fw-bold'>Example: </p>
                <PreTag content={JuniorQuestion2} platform={'JS'}/>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>3.</b> What is the difference between "==" and "===" in JavaScript?</h5>
                <p><b>==</b> (called loose equal) is used to compare two variables regardless of the variable's data type.</p>
                <p><b>===</b> (called strict equal) is used to compare two variables, but this will check strict type, which means it will check the data type and compare two values.</p>
                <p className='fw-bold'>Example: </p>
                <PreTag content={JuniorQuestion3} platform={'JS'}/>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>4.</b> What is an object in JavaScript?</h5>
                <p>An <b>object</b> in JavaScript is a collection of properties containing primitive data types, such as strings, numbers, booleans, and functions. An object can also have other objects as its values. Objects are used to model real-world entities and help organize code into reusable components.</p>
                <p>They are defined using curly braces <b className={globalStyle.globalColorElement}>"&#123; &#125;"</b> and properties are defined as key-value pairs separated by a colon <b className={globalStyle.globalColorElement}>":"</b>.</p>
                <p className='fw-bold'>Example: </p>
                <PreTag content={JuniorQuestion4} platform={'JS'}/>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>5.</b> What is an array in JavaScript?</h5>
                <p>An <b>array</b> in JavaScript is an ordered list of elements containing any data type, including primitive types such as strings and numbers, objects, and other arrays. Arrays are used to store collections of data and can be iterated over using loops like forEach().</p>
                <p>They are defined using square brackets "[]" and elements are separated by commas ",".</p>
                <p className='fw-bold'>Example: </p>
                <PreTag content={JuniorQuestion5} platform={'JS'}/>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>6.</b> What is a function in JavaScript?</h5>
                <p>A <b>function</b> in JavaScript is a reusable piece of code that can be used to perform a specific task. Functions are defined using the keyword <b>"function"</b> followed by a name and parentheses <b>"( )"</b>. The code inside the parentheses is the body of the function, which contains instructions for how it should behave.</p>
                <p className='fw-bold'>Example: </p>
                <PreTag content={JuniorQuestion6} platform={'JS'}/>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>7.</b> What is an event in JavaScript?</h5>
                <p>An event is an action or occurrence that happens as a result of user interaction, such as clicking a button, hovering over an element, or pressing a key on the keyboard. Events can also be triggered programmatically using JavaScript code.</p>
                <p className='fw-bold'>Example: </p>
                <PreTag content={JuniorQuestion7} platform={'JS'}/>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>8.</b> What is a callback function in JavaScript?</h5>
                <p>A callback function is a function that is passed as an argument to another function and is executed after the parent function has been completed. Callback functions are often used in asynchronous programming to ensure that certain tasks are completed before proceeding to the next step.</p>
                <p className='fw-bold'>Example: </p>
                <PreTag content={JuniorQuestion8} platform={'JS'}/>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>9.</b> What is a closure in JavaScript?</h5>
                <p>A closure is a function that has access to variables in its parent scope even after the parent function has returned. Closures are commonly used in JavaScript for encapsulating data and abstracting details of implementation.</p>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>10.</b> What is the purpose of "strict mode" in JavaScript?</h5>
                <p>Strict mode is a feature of JavaScript that enables developers to write code in a <b>"strict"</b> manner, which adds additional checks and controls to the language. It helps prevent errors by offering warnings when certain features of the language are used incorrectly. Strict mode also makes certain optimizations possible, improving performance and security.</p>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>11.</b> What is prototypal inheritance in JavaScript?</h5>
                <p>Prototypal inheritance is a feature of JavaScript that allows objects to inherit directly from other objects. Every object in JavaScript has a prototype object, which is a reference to another object. When a property or method is accessed on an object, JavaScript first looks for that property or method on the object itself. If the property or method is not found on the object, JavaScript then looks for it on the object's prototype object. If the property or method is still not found, JavaScript continues up the prototype chain until it reaches the top-level Object.prototype object.</p>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>12.</b> What is a module in JavaScript and how do you create one?</h5>
                <p>In JavaScript, a module is a self-contained unit of code that encapsulates related functionality and provides an interface for other code to interact with. Modules can help to keep code organized, reduce namespace collisions, and improve code reusability.</p>
                <p className='fw-bold'>Example: </p>
                <PreTag content={JuniorQuestion12} platform={'JS'}/>
                <p>In this example, we use the export keyword to export the add and subtract functions from the math.js module. To use this module in another file, we can import it using the import keyword.</p>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>13.</b> What is a higher-order function in JavaScript?</h5>
                <p>A higher-order function is a function that takes one or more functions as parameters and/or returns a function. Higher-order functions are often used to create more abstract and reusable pieces of code that can be used in different contexts.</p>
                <p>Examples of higher-order functions include <b>map()</b>, <b>filter()</b>, and <b>reduce()</b>.</p>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>14.</b> What is the difference between synchronous and asynchronous code in JavaScript?</h5>
                <p><b className={globalStyle.globalColorElement}>Synchronous code</b> is executed in the order that it appears in the source code, while asynchronous code is executed at a later time or on a different thread.</p>
                <p><b className={globalStyle.globalColorElement}>Asynchronous code</b> can be used to improve performance by allowing certain tasks to happen concurrently and without blocking the execution of other code.</p>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>15.</b> What is the difference between a Promise and a Callback in JavaScript?</h5>
                <p>Promises and callbacks are both mechanisms for dealing with asynchronous code in JavaScript. The primary difference is that promises offer a better way to handle errors, as well as provide an easier-to-read syntax compared to callbacks.</p>
                <p>Promises also allow for chaining multiple asynchronous operations together which makes handling complex sequences of operations much easier.</p>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>16.</b> What is the difference between "null" and "undefined" in JavaScript?</h5>
                <p>In JavaScript, null and undefined are two distinct values that represent the absence of a value.</p>
                <p>The main difference between the two is that null is an assignment value, while undefined indicates that a variable has not been assigned a value. Additionally, null can be explicitly used to indicate the absence of a value, while undefined cannot.</p>
                <p className='fw-bold'>Example: </p>
                <PreTag content={JuniorQuestion16} platform={'JS'}/>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>17.</b> What is event bubbling in JavaScript?</h5>
                <p>Event bubbling is a feature of the <b className={globalStyle.globalColorElement}>DOM</b> (Document Object Model) that allows events to propagate up through the DOM tree. This can be useful in cases where you want an event on a parent element to trigger actions on its child elements.</p>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>18.</b> What is the difference between "document" and "window" in JavaScript?</h5>
                <p>The document is the actual web page being displayed in a browser, while the window object represents an instance of a browser. The document object provides access to the content of a web page, while the window object allows you to interact with the user's browser and control how it behaves.</p>
               
                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>19.</b> What is the purpose of the "use strict" directive in JavaScript?</h5>
                <p>The <b className={globalStyle.globalColorElement}>"use strict"</b> directive is used to enforce stricter parsing and error handling in JavaScript. This helps to avoid errors that can occur due to syntax issues, as well as improve overall code quality. Additionally, this directive also enables certain language features that are not available in regular JavaScript.</p>
               
                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>20.</b> What is hoisting in JavaScript?</h5>
                <p><b className={globalStyle.globalColorElement}>Hoisting</b> is the JavaScript default behavior of moving all the declarations of functions, variables, or classes to the top of the current scope before code execution.</p>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>21.</b> What are first-order functions?</h5>
                <p>A programming language is said to have <b className={globalStyle.globalColorElement}> First-class functions</b> when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.</p>
                <p className='fw-bold'>Example: </p>
                <PreTag content={JuniorQuestion21} platform={'JS'}/>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>22.</b> What is DOM?</h5>
                <p><b className={globalStyle.globalColorElement}>DOM</b> (Document Object Model) is a programming interface for web documents. It is used to manipulate HTML files (the content, structure, and style of a document).</p>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>23.</b> Explain WeakMap in JavaScript?</h5>
                <p>A <b className={globalStyle.globalColorElement}>weak map</b> is a compilation of key-value pairs where the keys are poorly referred to. These keys must be objects with values of any arbitrary JavaScript type with weak references to its keys.</p>
                <p className='fw-bold'>Example: </p>
                <PreTag content={JuniorQuestion23} platform={'JS'}/>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>24.</b> How types of JavaScript errors?</h5>
                <p><b className={globalStyle.globalColorElement}>Syntax Error:</b> A fault in the syntax of the program that is incorrect.</p>
                <p><b className={globalStyle.globalColorElement}>Runtime Error:</b> A software or hardware error that takes place during program runtime after it's interpreted by the compiler.</p>
                <p><b className={globalStyle.globalColorElement}>Logical Error:</b> A difficult error to identify where the syntax is correct but the logic is wrong.</p>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>25.</b> What are async and defer?</h5>
                <p>Both the async and defer load JavaScript asynchronously in absence of render-blocking.</p>
                <p>Async executes the script as soon as possible while parsing the HTML. Whereas, defer runs in sequence and executes the script only after parsing the HTML</p>
                <p className='fw-bold'>Example: </p>
                <PreTag content={JuniorQuestion23} platform={'JS'}/>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>26.</b> Define Prototype Chaining.</h5>
                <p>When the prototype of an object accesses the same property from the constructor function, the object inclines to extract the property from the constructor function.</p>
                <p>This type of linking to another is called Prototype chaining or Prototype chain in JavaScript.</p>
                <div className='my-4'><ImageModel img={imgPrototypeChaining}/></div>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>27.</b> What is BOM?</h5>
                <p><b className={globalStyle.globalColorElement}>BOM</b> (Browser Object Model) is the core of Javascript on the web that helps to interact with the browser. It means that objects are exposed by the web browser for modifying properties and objects referenced to them.</p>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>28.</b> Explain event delegation in JavaScript?</h5>
                <p>Event delegation is a technique where a single event listener is added to a parent element to manage events for its child elements. This is efficient as it reduces the number of event listeners and utilizes event bubbling.</p>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>29.</b> What are promises in JavaScript?</h5>
                <p>Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise can be in one of three states: pending, fulfilled, or rejected.</p>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>30.</b> What is the event loop in JavaScript?</h5>
                <p>The <b className={globalStyle.globalColorElement}>event loop</b> is a mechanism that allows JavaScript to perform non-blocking I/O operations, despite being single-threaded. It continuously checks the call stack and the task queue to execute code, collect events, and execute queued tasks.</p>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>31.</b> Where do you mostly use the rest operator?</h5>
                <p>The <b className={globalStyle.globalColorElement}>rest operator (…)</b> in JavaScript is used to handle function arguments, array elements, and object properties.</p>
                <p className='fw-bold'>Example: </p>
                <PreTag content={JuniorQuestion31} platform={'JS'}/>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>32.</b> What are shallow copy and deep copy?</h5>
                <p>In JavaScript, the concepts of shallow copy and deep copy refer to the ways in which objects or arrays are duplicated. The key difference lies in how these copies handle nested objects or arrays.</p>
                <p><b className={globalStyle.globalColorElement}>Shallow Copy: </b> A shallow copy of an object or array is a new object or array that has copies of the references to the original object or array&#39;s elements. If the original object contains other objects or arrays as its properties, the shallow copy will have references to those same objects or arrays, not duplicates.</p>
                <p className='fw-bold'>Example: </p>
                <p>Spread syntax (...), Array.prototype.concat(), Array.prototype.slice(), Array.from(), and Object.assign().</p>
                <p><b className={globalStyle.globalColorElement}>Deep Copy: </b> A deep copy of an object or array is a new object or array that is an entirely independent copy of the original. This means that all levels of nested objects or arrays are also copied, resulting in a completely separate object or array that shares no references with the original.</p>
                <p className='fw-bold'>Example: </p>
                <p>JSON.stringify(), JSON.parse()</p>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>33.</b> How can you remove duplicates from an array in JavaScript?</h5>
                <p>One way to remove duplicates from an array is by using the Set object or by using the filter() method with the indexOf() method or with forEach() method.</p>
                <p className='fw-bold'>Example: set() Method</p>
                <PreTag content={JuniorQuestion33Set} platform={'JS'}/>
                <p className='fw-bold'>Example: filter() Method</p>
                <PreTag content={JuniorQuestion33filter} platform={'JS'}/>
                <p className='fw-bold'>Example: forEach() Method</p>
                <PreTag content={JuniorQuestion33forEach} platform={'JS'}/>


                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>1.</b> Can you answer this <b className={globalStyle.globalColorElement}> Junior Level </b> JavaScript Promise Interview Questions?</h5>
                <p>Most interviewees failed on it.</p>
                <PreTag content={JSPromiseJuniorQuestion} platform={'JS'}/>
                <p>What is the output of the following code?</p>
                <MDBBtn tag='a' onClick={() => setCollapseOne(!collapseOne)} className={`mb-2 ${globalStyle.mainBtn}`}>Show Answer</MDBBtn>
                <MDBCollapse open={collapseOne}>
                    <PreTag content={JSPromiseJuniorResult} platform={'JS'}/>
                </MDBCollapse>


                <hr className='mt-3 mb-2'/>

                <h3 className='text-center mt-5'><b className={globalStyle.globalColorElement}>JavaScript</b> Senior Level Interview Questions</h3>

                <h5 className='fw-bold'><b className={globalStyle.globalColorElement}>1.</b> Can you answer this <b className={globalStyle.globalColorElement}> Senior Level </b> JavaScript Promise Interview Questions?</h5>
                <p>Most interviewees failed on it.</p>
                <PreTag content={JSPromiseSeniorQuestion} platform={'JS'}/>
                <p>What is the output of the following code?</p>
                <MDBBtn tag='a' onClick={() => setCollapseTwo(!collapseTwo)} className={`mb-2 ${globalStyle.mainBtn}`}>Show Answer</MDBBtn>
                <MDBCollapse open={collapseTwo}>
                    <PreTag content={JSPromiseSeniorResult} platform={'JS'}/>
                </MDBCollapse>

                <hr className='mt-3 mb-2'/>
            </div>
        </section>
    )
}

export default InterviewQuestions;