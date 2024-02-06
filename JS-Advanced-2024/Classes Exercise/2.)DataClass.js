//Task: Write a class Request that holds data about an HTTP request. It has the following properties:

// · method (String)

// · uri (String)

// · version (String)

// · message (String)

// · response (String)

// · fulfilled (Boolean)

// The first four properties (method, uri, version, message) are set through the constructor, in the listed order. The response property is initialized to undefined and the fulfilled property is initially set to false.


//Solution:




let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);