# MVC-Tech-Blog
---
## Technologies Used
![GitHub top language](https://img.shields.io/github/languages/top/eSTee3/E-Commerce-Back-End?color=green&logo=github&logoColor=green)
![GitHub language count](https://img.shields.io/github/languages/count/eSTee3/E-Commerce-Back-End?color=green&logo=github&logoColor=green)

## Coding Badges
![alt text](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![alt text](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![alt text](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![alt text](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![alt text](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)

![alt text](https://img.shields.io/badge/bcrypt-package-red)
![alt text](https://img.shields.io/badge/dotenv-package-red)
![alt text](https://img.shields.io/badge/Connect_Session_Sequelize-package-red)

---

### Table of Contents
- [Technologies Used](#technologies-used)
- [Coding Badges](#coding-badges)
- [Description](#description)
- [Installation](#installation)
- [Demo Video](#application-demo-video)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [License](#license)
- [How to Contribute](#how-to-contribute)

---
# Description
A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

[Back to Top](#table-of-contents)

---
# Installation
1. Download or clone this repo to your local machine
2. Create a `.env` file in the root of the directory (within your IDE of choice)
 - Copy/paste the following code into the .env file you created, changing the password to be your MySQL root password:
 ```
  DB_NAME = 'tech_blog_db'
  DB_USER = 'root'
  DB_PW = 'password'
 ```
3. Update the `'password'` within that file, to be your MySQL root password
4. Launch a terminal from the root of the same folder
5. Log into MySQL by entering `mysql -u root -p`, followed by entering your password
6. Enter `source db/schema.sql` to source the Database to your MySQL instance
7. Enter `use tech_blog_db` to change the in-use Database to "ecommerce_db"
8. Enter `exit` to go back to the standard terminal prompt
9. Enter `npm install` to install all required packages and wait for them to complete
10. If you'd like to seed the DB tables with example data, enter `npm run seed`, followed by `npm start`, Otherwise just enter `npm start` to initialize and launch the server with a clean slate!
11. Navigate to [http://localhost:3001](http://localhost:3001) in your internet browser of choice and enjoy!

[Back to Top](#table-of-contents)

## Application Demo Video
[![Demonstration Video](https://img.youtube.com/vi/CRUn9n0FdZI/0.jpg)](https://www.youtube.com/watch?v=CRUn9n0FdZI)

## User Story
**AS A** developer who writes about tech...  **I WANT** a CMS-style blog site...  **SO THAT** I can publish articles, blog posts, and my thoughts and opinions

[Back to Top](#table-of-contents)


## Acceptance Criteria
- **GIVEN a a CMS Style Blog Site**
```
WHEN I visit the site for the first time
┗►THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

WHEN I click on the homepage option
┗►THEN I am taken to the homepage

WHEN I click on any other links in the navigation
┗►THEN I am prompted to either sign up or sign in

WHEN I choose to sign up
┗►THEN I am prompted to create a username and password

WHEN I click on the sign-up button
┗►THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in
┗►THEN I am prompted to enter my username and password

WHEN I am signed in to the site
┗►THEN I see navigation links for the homepage, the dashboard, and the option to log out

WHEN I click on the homepage option in the navigation
┗►THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN I click on an existing blog post
┗►THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in
┗►THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation
┗►THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post
┗►THEN I am prompted to enter both a title and contents for my blog post

WHEN I click on the button to create a new blog post
┗►THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard
┗►THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation
┗►THEN I am signed out of the site

WHEN I am idle on the site for more than a set time
┗►THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

[Back to Top](#table-of-contents)

---

# License

MIT License

Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back to Top](#table-of-contents)

---

## How to Contribute

[Contributor Covenant](https://www.contributor-covenant.org/)

[Back to Top](#table-of-contents)
