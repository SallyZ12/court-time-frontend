This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project:
This web app was created for my final Project at The Flatiron School Online Software Engineering Program for the Full Stack Web Development Experience.

The Project is CourtTime.  It is a simple web app that allows a user to book a tennis court at a particular tennis club for a specific day and time.

## How To Get Started:
There is a backend that is designed with Ruby on Rails and is in one github repository, while the frontend is designed with React and Redux and is in a different github repository.

Once you clone the backend, remember to run "bundle install" and then start the rails server "rails s".

Once you clone the frontend, run "npm install" and then start the server with "npm start".

Always remember to "cd" to the correct directory.

 My set up has the backend server running on localhost/3000 while the frontend server is running on localhost/3001.

# Now For the Fun Part:
Once you have your backend and frontend running, you need to create the first user who is also the admin.  The web app is delivered with no existing Tennis Clubs and therefore, no available courts to book.  This is where the admin comes in.  Also, you are restricted to having only 1 admin per Project.

When the admin is registered, they can create a Tennis Club by selecting from the dropdown ADMIN menu - "New Club".  Once the Club is created, the admin can select that Club via the link and navigate to the Club page. From the Club page the admin has the option to:

1. Create a New Court
2. Edit Club information
3. Delete a club (only if no reservations are associated with that Club)
4. Edit a Court, or
5. Delete a Court (only if no reservations are associated with that Court)

In addition, only the admin can view all users Reservations, but can not delete any of those Reservations.

Only the admin has access to these features.

For the non-admin user, they need to register to be able to book a tennis court reservation.  They select a link to a Tennis Club, review the courts, select a date and time to book a reservation for that particular court, select "Reserve" and they are taken to their own Reservation page where the entire history of their reservations by Tennis Club, date and time, and Confirm number are displayed.  Only a user can delete/cancel their own Reservation.

Finally, it is not necessary to login to see what courts are reserved.  You can navigate to a Tennis Club and then see under each Court the reservations for that particular day and time or later.  Reservations prior to the current date are no longer displayed.




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
