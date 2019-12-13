1. What problem does the context API help solve?
It solves the problem of prop drilling so when you need to access state from the top of your react tree to the bottom you will not need to pass props to components you do not necessarily need them.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are plain Javascript object that contains information. Has a type field that tells what kind of action to perform.
Reducers are pure functions that can take the current state and action and return the new state and tell the store what to do.
The store is the object which holds the state of the application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global, component state is local. Redux uses store to hold application state so any component can access it. Component state lives within that specific component. It can only be updated within that component and passed down via props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk is middleware that allows you to return functions, rather than just actions, withink Redux. This allows for delayed actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
I enjoy redux because it allows for a straightforward state management system. It does have a steep learning curve and it involves a lot of file/folder set up, but overall I found it fun to use.
