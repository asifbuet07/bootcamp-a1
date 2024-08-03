# JavaScript and CSS Concepts

## 1. What is ES6 and what are the new features introduced in ES6?

**ES6 (ECMAScript 2015)**, also known as ECMAScript 6 or ECMAScript 2015, is a major update to JavaScript that introduced several new features to make the language more powerful and easier to use.

Key features introduced in ES6 include:

- **Classes**: A new way to create objects and handle inheritance.
- **let and const**: Block-scoped variables.
- **Arrow Functions**: Shorter syntax for writing functions.
- **Template Literals**: Enhanced string literals with embedded expressions.
- **Destructuring**: A way to unpack values from arrays or properties from objects into distinct variables.
- **Default Parameters**: Setting default values for function parameters.
- **Rest and Spread Operators**: For handling function parameters and array manipulation.
- **Promises**: For handling asynchronous operations.
- **Enhanced Object Literals**: More concise syntax for defining object properties and methods.
- **Modules**: Import and export statements to manage code modularity.

## 2. What is Event Bubble and Event Delegation in JS?

- **Event Bubbling**: This is a method of event propagation in the HTML DOM API. When an event occurs in an element inside another element, the event first triggers on the innermost element and then bubbles up to the outer elements. For example, if you click on a button inside a div, the click event first triggers on the button and then on the div.

- **Event Delegation**: This is a technique of handling events efficiently by leveraging the event bubbling. Instead of adding an event listener to every child element, an event listener is added to a common parent element. When an event occurs, the listener on the parent element can check the event target and handle events for multiple child elements. This reduces memory usage and improves performance.

## 3. What is the difference between localStorage, sessionStorage, and cookies?

- **localStorage**:

  - Stores data with no expiration date.
  - Accessible within the same origin (protocol, host, and port).
  - Data is persistent and will remain even after the browser is closed and reopened.
  - Storage limit is around 5-10MB.

- **sessionStorage**:

  - Stores data for the duration of the page session.
  - Accessible within the same origin and same session.
  - Data is cleared when the page session ends (i.e., when the browser or tab is closed).
  - Storage limit is around 5-10MB.

- **Cookies**:
  - Stores data that can be sent to the server with each HTTP request.
  - Data size limit is around 4KB per cookie.
  - Can have an expiration date, making them persistent or session-based.
  - Used mainly for tracking, authentication, and session management.

## 4. In CSS, what is the difference between `display: inline`, `display: inline-block`, and `display: block`?

- **display: inline**:

  - Elements do not start on a new line and only take up as much width as necessary.
  - Width and height properties are ignored.
  - Margin and padding are only respected horizontally.

- **display: inline-block**:

  - Elements are formatted like inline elements but can accept width and height values.
  - They do not start on a new line and respect all margin and padding values.

- **display: block**:
  - Elements start on a new line and take up the full width available by default.
  - Width and height properties are respected.
  - Margin and padding are applied to all four sides.

## 5. What are the new features in CSS3?

Few features included in CSS3:

- **Flexible Box Layout (Flexbox)**: A layout model for creating responsive layouts.
- **Media Queries**: For responsive design, allowing different styles for different devices.
- **Grid Layout**: A powerful layout system for creating complex grid-based designs.
- **Animations**: For creating keyframe animations directly in CSS.
- **New Selectors**: Such as `:nth-child`, `:not()`, and attribute selectors for more precise styling.
- **Transitions**: For smooth transitions between different states of an element.
- **Transformations**: For rotating, scaling, skewing, and translating elements.
- **Box Shadow and Text Shadow**: For adding shadows to elements and text.
- **Border Radius**: For creating rounded corners on elements.
- **Gradients**: For creating linear and radial gradient backgrounds.
- **Custom Fonts (Web Fonts)**: Using `@font-face` to include custom fonts in designs.
- **New Color Models**: Including RGBA and HSLA for specifying colors with transparency.
