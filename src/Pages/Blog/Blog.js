import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css'

const Blog = () => {
    let title = "Squid Food -Blog";
    document.title = title;
    return (
        <div className='blog-container'>
            <div className="overlay-blog">
            <Accordion className='' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is difference between SQL and NoSQL?</Accordion.Header>
                    <Accordion.Body>
                    <p>SQL databases are relational, NoSQL databases are non-relational.</p>
                    <p>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</p>
                    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
                    <p>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>
                    <p>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is JWT, and how does it work?</Accordion.Header>
                    <Accordion.Body>
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.</p>
                    <p>It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</p>
                    <p>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
                    <p>User sign-in using username and password or google/facebook.
                    Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                    User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                    Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the difference between javascript and NodeJS?</Accordion.Header>
                    <Accordion.Body>
                    <p>JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.</p>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>
                    <p>JavaScript new release of the ECMA script that works on the C++-based V8 engine.</p>
                    <p>NodeJS are C++, C, and JavaScript are used.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How does Node JS handle multiple requests at the same time?</Accordion.Header>
                    <Accordion.Body>
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    <p>How does NodeJS handle concurrency?
                    Node js uses an event loop to maintain concurrency and perform non-blocking I/O operations. As soon as Node js starts, it initializes an event loop. The event loop works on a queue (which is called an event queue) and performs tasks in FIFO(First In First Out) order.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
        </div>
    );
};

export default Blog;