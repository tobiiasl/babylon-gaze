# babylon-gaze

Bablyon-gaze is a small angular app which connects to a pair of Tobii Pro Glasses 3 (eye tracking wearables) and shows a pair of eyes looking in the same direction as the person wearing the glasses.

This hack is the result of a short hackathlon event where I and [@fredrikj](https://github.com/fredrikj) added retrieving gaze to our previous hack (https://github.com/tobiiasl/babylon-gaze) using the Glasses 3 API.

Focus was to get something working quickly and thus code quality had to suffer.

**Steps to run the app**

- Clone this repo
- Download and install npm - Node package manager: https://www.npmjs.com/
- Run "npm install"
- Run "ng serve" to compile the typescript code and start the Angular web server
- Make sure you have your Tobii Pro Glasses 3 glasses connected to your network.
- Navigate to the web app and specify in the url which unit to connect to, e.g.
  - `http://localhost:4200/tg03b-080200100361.local` OR
  - `http://localhost:4200/192.175.75.51`
- Put on the Tobii Pro Glasses 3 and start looking around. The eyes will look in the same direction as you do.

**Screenshot**

![image](https://user-images.githubusercontent.com/7059915/117458642-ca376200-af4a-11eb-8a59-4552dc2f2b99.png)

