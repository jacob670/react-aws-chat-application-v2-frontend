# Name(TDB) Front End
This is the client side application for the project  which used the framework React.
The server side can be found here (https://github.com/jacob670/java-aws-chat-application-v2).

## QuickChats Features
When authenticated, the user will be able to do countless things on the application
- View the top trending movies in the world today, whether that be new releases or the classics

### 'View Trending Movies'
- This feature of the application is called on a lambda function with api gateway
- The lambda function calls on The Movie Database API and returns the respsone
- The route is protected by making sure there is an authorization token in the storage
- For this simple api, no authorization token is needed to complete the api request with gateway