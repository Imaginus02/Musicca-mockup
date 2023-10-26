## Submission procedure

The assignment is to be submitted for the 18/12/2023 at midnight.


You can either send me your assignment via gitlab : 

- Make a new gitlab project on your favorite gitlab instance
- If you are git-savvy enough, replace the remote of the repository
with your own remote
- Otherwise, remove the `.git` folder, and initialize a new git repository
in the assignment directory, then put it online like you would do with a new
project
- Make sure I have access to your online gitlab repository (the best is to make it public)
- Send me the link, I take the last commit before the deadline date, or a specific
commit if you tell me which one.


Or you can send it to me via email :
- ZIP your project directory
- Send it to qrichaud.pro@gmail.com


# Assignment

In the `integration` directory, you have a working implementation of 
the desktop mockup for the Musicca "about" webpage.

There are 2 mockups that represent how the website should 
look on a mobile webpage (screen size <= 480px).

Modify the existing integration, in order to make the 
webpage reponsive. The desktop version should not change, however, when
displaying on a screen size smaller than 480px, 
the webpage should look the same as the mockups.

You will need to use javascipt to create a menu button that toggles the mobile menu visibility.

## SCSS

Just like the assignment for HTML and CSS : you will use the SCSS stylesheet preprocessor language. Write your stylesheet in the file `style.scss`, do not directly edit or commit to git
the file `output.css`.

In order to compile your SCSS to CSS, run the script `./compile_css.sh` 
located in this directory. This script will watch for changes in the file `style.scss`
and recompile it automatically any time it changes.

## Running a local server for your webpage

You can run the `run.sh` script at the root of this repository. It will launch a small
HTTP server, allowing you to access the webpage you are working on at the address
<http://localhost:8000/assignment/integration/about.html>
