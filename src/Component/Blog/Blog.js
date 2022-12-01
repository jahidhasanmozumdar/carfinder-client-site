import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col justify-center items-center w-80 mx-auto">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
        What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <p> local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
        How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
        What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <p>Let's start with the definition: Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
        React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content">
          <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
