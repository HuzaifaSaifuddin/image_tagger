------------------------------------------
INTRO
------------------------------------------
This is the interview task for a developer role at Blimp.db.
The task is to create a simple image tagger.

------------------------------------------
BASIC SETUP
------------------------------------------
Clone/fork this repository into a new one and make your changes there. Send us the link to repo when you are done.

------------------------------------------
TASK DESCRIPTION
------------------------------------------
First view the video of the completed task: (video link will be sent to you via email).

NOTE: there is a circle that appears around points that the mouse clicks in the video, these can be ignored,
i.e. there is no need to code the circle that appears.

1.  Adding markers to the main-image
    1. Clicking on the main-image should add a marker at the point clicked
    4. The marker must be centered around the point clicked

2. Listing and deleting markers
    1. The marker number, as well as its x, y coordinates should be listed below the main-image
    2. A delete button should be shown beside each marker listing
    3. Clicking the delete button should remove that marker from the image

3. The marker positions should remain correct even when the window resizes, as shown in the video

------------------------------------------
GETTING STARTED
------------------------------------------
NOTE: Completing this task requires knowledge of HTML, JavaScript, AngularJS and CSS.

1.  To run the image tagger, double-click on index.html, it should open in your default browser, after doing that,
    you should see the image tagger page.

2.  There are two files that need to be filled in to complete this task:
    2. The AngularJS controller file: /js/controllers/image_tagger.js
    3. The scss style file: /css/image-tagger.css

3.  No other files should be modified or created.
    No other libraries/frameworks should be used other than those already included.

------------------------------------------
IMPORTANT GUIDELINES
------------------------------------------
1.  No specific code guidelines, just remain consistent.

2. Code must be as readable as possible - proper indentation, descriptive variable names, and descriptive function names

3.  As an estimate of how much work needs to be done, the current solution files have the following number of lines of code:
    * /js/controllers/image_tagger.js - 24 lines of code
    * /css/image-tagger.css - 15 lines of code

4.  The lines of code for the solution files are a guideline, so if you find yourself writing a lot more code
    than the above lines of code count, you might want to rethink your solution.

------------------------------------------
SOLUTION STEPS
------------------------------------------
1. View the /index.html file, this shows what AngularJS variables and functions are needed
2. Code out the create_marker(e) and delete_marker(marker) functions in the AngularJS controller at /js/controllers/image_tagger.js
3. After creating these functions the markers list below the image should be working
4. Fill in the styling in /css/image-tagger.css to make the markers display properly on the image