# Mini Twitter

Mini Twitter is a mini social media service that allows users to read people's thoughts and follow interesting pages. The application has two main routes, the homepage, and the tweets page. If a user tries to access a route that doesn't exist, they will be redirected to the homepage.

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## About Application

### Homepage

The homepage of Mini Twitter welcomes users and provides them with information about the service. Users can find a brief description of the application and how it works. Additionally, the homepage contains a button that allows users to navigate to the tweets page.

### Tweets Page

The tweets page displays a list of tweets from different users. As users scroll down, more tweets are loaded dynamically, allowing them to explore a wide variety of thoughts from various individuals. At the top of the page, there is a "Load More" button, which, when clicked, fetches and displays additional tweets from the server.

Users can also find a "Back" button at the top of the tweets page. Clicking on this button redirects the user back to the homepage.

### UserCard Modal

When a user clicks on a user's photo within a tweet, a UserCard modal window appears. The UserCard provides additional information about the selected user, such as the total number of tweets and followers. Users can also follow or unfollow the selected user by clicking on the "Follow" button in the UserCard modal.

## Technologies Used

Mini Twitter is built using the following technologies:

- React - A popular JavaScript library for building user interfaces.
- Redux - A state management library for managing application state.
- React Router - A declarative routing library for handling navigation within the application.
- Axios - A promise-based HTTP client used for making API requests.
- SCSS - A CSS preprocessor used for styling the components.
