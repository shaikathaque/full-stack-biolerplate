# Full Stack Boilerplate

React, Node, Express, and MongoDB boilerplate to get started with projects.

This boilerplate has taken inspiration from https://github.com/StephenGrider/FullstackReactCode and uses create-react-app to set up the client project.

The client side set up consists of React, Redux, and React Router.

The server side set up consists of Node.js, Express and Mongoose as an ODM for MongoDB.

## How to run

The app assumes you have MongoDB running locally on port 27017. If not, you can include the uri to your MongoDB instance in server/config/dev.js.

### For development

1. cd into the server directory
2. run npm install
3. run npm run dev
4. navigate to the client directory
5. run npm install
6. run npm start
7. open http://localhost:3000 in your browser

### For production build

1. navigate to the client directory
2. run npm install
3. run npm run build
4. navigate to the server directory
5. run npm install
6. run npm start
7. open http://localhost:8080 in your browser
