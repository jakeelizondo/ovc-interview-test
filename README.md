# OVC Interview Test - User Explorer

https://github.com/jakeelizondo/ovc-interview-test

Table of Contents:\
\
[Summary](#summary)\
[Core User Stories](#core-user-stories)\
[Additional Features](#additional-features)\
[Technologies Used](#technologies-used)\
[What I Learned](#what-i-learned)\
[Core Decisions](#core-decisions-for-discussion)\
[Areas For Improvement](#areas-for-improvement)

## Summary

This application was developed as part of a coding challenge to solve the following problem: https://github.com/OneviewCommerce/typescript-react-redux-test, as well as for practice utilizing TypeScript, Redux, Jest, and React.

## Core User Stories

- A user can view a table of user data with columns Name, Email, City, and Company
- A user can search based on name to view only rows with users who's first name includes their search term
- A user can click on a user data row to see the posts for that user

## Additional Features

- Loading messages are displayed while fetching Users and Posts
- On large screens, when hovering over a user row it expands and lifts off page to indicate it can be clicked
- If no users are returned for a name search, a message is displayed to inform the user that no users were found for their query
- If there is an error fetching users, an error message is displayed
- If there is an error fetching posts, an error message is displayed
- Unit tests for each component
- Added tests for both synchronous and asynchronous Redux actions

## Technologies Used

- TypeScript - Superset of JavaScript which adds static types and type protection
- Create-React-App - boilerplate setup for React, initiated for this application with npx create-react-app --template typescript
- React Hooks - this project is built using React Hooks and functional components
- React-Redux - handles state management - supports bindings between redux and react.
- Redux-Thunk - middleware that allows action creators that return a function instead of an action. This is used to allow for actions which include asynchronous calls, since normally actions must be synchronous
- Redux Devtools - Chrome extension which allows tracking of state changes
- Axios - library to execute HTTP requests
- Jest/Enzyme - testing library for react unit testing

## What I Learned

This project was my first application fully utilizing Redux in an application; my other projects have leveraged the Context API for global state management. While I had begun learning Typescript already, this was my first React app built completely with Typescript and my first time combining Redux and Typescript in an application. This presented some interesting challenges at the beginning of the project, but with the use of online documentation and video resources I was able to get everything working properly, while leveraging the newer Redux hooks rather than mapStateToProps and mapDispatchToProps as I had previously. I learned a huge amount about both technologies, and, as I suspected I would, I now prefer React with Typescript because I enjoy the type security, specifically on component props and state.

## Core decisions for discussion

1. For this application I chose to structure the User table and Post table within the same component. While reading the challenge description, I saw that in the examples for Users and Posts, both were structured in a tabular format. Therefore, in my implementation I chose to display Users and Posts as different 'views' in the same table component, controlled by the parent view, in this case App. Alternatively, I considered constructing two separate tables or views, but chose to keep them in the same container UserTable based on the presentation in the project instructions. If preferred, posts could be structured like blog posts in a separate view/route, etc.

2. I considered presenting the User table and Post table views on separate deep links, using react-router. However, since this library was not under the list of technologies to use, I chose to instead present the single route/view. However, if the desire was to have the separate views available on different urls (users/ and users/posts/:userId for example) I could accomplish this with react-router, for example using dynamic route props to pass the userId to the posts table container component, which would then make the async call to the server and populate the table with that users posts.

3. The UserRow and PostRow are currently split into two components. This was done to create essentially a sort of clickable row component vs a dummy row component that just presented data. This also allowed for more specific typing on the type of Array being passed as data. However, if required for the application, or preferred by the team, in this type of situation these two components could potentially be refactored to one TableRow component, similar to how the TableHeader is currently structured, taking the data and an optional callback function as its props.

## Areas for improvement

#### Redux folder and file structure/naming conventions.

- I modularized my actions and reducers, but this file and folder structure is based on those that I saw while learning the library. Therefore, I would love to discuss best practices regarding Redux application structure and learn more about how things are organized at OneView. I am happy to adapt my structure to the team convention.

#### Test coverage

- I included a good number of unit tests, testing each component, but again depending on the convention/standards of the team, I am happy to provide even more granular coverage, or practice TDD on the front end if desired.

#### Redux types

- As this was my first project combining Redux and Typescript, I am sure there are ways to optimize my use of custom types. I always try to eliminate the use of 'any' as a type, and be more specific with my type declaration in my applications. Therefore, if there are any areas for type coverage improvement in this application, related to Redux or otherwise, I would love to discuss how I could make more improvements.
