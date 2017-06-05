# Node Assessment

### Setup

1. Run ```npm install``` to install dependencies.
2. Create a file called ```server.js```. All of your server code and endpoints will be in this file.
3. look at the file called ```mainCtrl.js```.  In this file you will write all of the functions for your endpoints.
4. Look at the ```userData.json``` file to get familiar with the data you will be using.    

### Import Postman tests

  **A file named ```node_assessment.postman_collection.json``` is inside the ```postman_testing``` folder. We will import this file in postman.**

1. Open Postman.
2. In the top left corner, click on the ```Import``` button.

    ![Import button](images/import_btn.png?raw=true "Import button")

3. Make sure that ```Import File``` is selected / underlined, then click on ```Choose Files```.

    - You will need to select the ```node_assessment.postman_collection.json``` file (located in the ```postman_testing``` folder of this repo).

### Running individual tests

1. As you create each endpoint, you can (and should) test the endpoint.
    - Click on ```Collections``` on the left panel.
    - Expand the collection of tests by clicking on the ```node_assessment``` collection.

    NOTE: Each test name has a number after it that corresponds to a specific endpoint, which are numbered in the instructions. Most of the endpoints have multiple corresponding tests.

    - Click on the test you want to run. Click on the blue ```Send``` button. The tests will automatically run when you send the request.
    - Select ```Tests``` to see what tests passed/failed.

      ![Tests tab](images/tests_tab.png?raw=true "Tests tab")

    **NOTE:** You need to be running ```nodemon``` in order to successfully run the Postman tests.

    **IMPORTANT:** The Postman tests manipulate some of the user data. Before you run the Postman tests, you should restart nodemon. You can do this in the terminal while nodemon is running by typing ```rs``` and then pressing ```enter```.


### Endpoints

**Reminder:** You *must* use port **3000** for this assessment.

Write your endpoints in ```index.js```.

1. **```'GET' /api/users```**

    Respond with the entire users array, with status 200.

2. **```'GET' /api/users``` by Favorite**

This endpoint can be called with one of these queries, which you should be prepared to address:

    - favorites: Return all users who have this favorite in their *array* of favorites.

3. **```'GET' /api/users/``` + userId**

The tests will send a GET request with the userId as a parameter to this endpoint. Remember, request params will come as strings. If the user is found, respond with status 200 and send that user's object.

If no user was found, respond with a status of ```404``` and ```null```.

**NOTE:** You will need to use ```.json()``` instead of ```.send()``` when sending just ```null```.

4. **```'PUT' /api/users/``` + userId**

    A user's information will be sent in the request body. It will contain the same type of user information container in the other user objects. You should update the user object that has an ID matching the ```userId``` parameter.

    Return with status 200, and the entire array of user objects *after* you have updated the correct user object.


6. **```'DELETE' /api/users/``` + userId**

You should remove the user with an ID matching the ```userId``` parameter. Return status 200 and the array of user objects *after* the correct user object has been removed from the array.

7. **```'POST' /api/users```**

A user's information will be sent in the request body. It will contain the same type of user information contained in the other user objects, except for the ID. *You will need to add an ID to this user object before adding it to the users array.*

The user IDs are sequential. If the last user object had an ID of 100, the new user object should have an ID of 101 and the next user object added should have an ID of 102, etc. *The Postman tests will add multiple user objects and check the IDs.*

You should return status 200 along with the entire array of user objects *after* the new user object has been added.
