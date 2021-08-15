---
title: "Project: UQ Course Chooser"
path: "/project-uq-course-chooser"
tags: ["Course Chooser"]
featuredImage: "../assets/images/fixing-photos-metadata-with-exiftool.png"
excerpt: A project I’m currently working on in my spare time is a Python script/database/web app to help UQ students choose their subjects for the next semester.
created: 2017-01-15
updated: 2017-01-15
---

A project I’m currently working on in my spare time is a Python script/database/web app to help UQ students choose their subjects for the next semester.

This is the first in a series of blog posts almost in a diary format, so I can document the progression of the project and the challenges I faced. I’m intending these posts to be almost reflective in nature, rather than very technical, though I will lightly justify some technical choices also. Once I feel that I can move the project out of a prototype stage, I’ll put up a more formal page documenting the technology and some overall reflections.

Rationale
---------

The idea stemmed from my own frustrations with choosing subjects for my Graduate Certificate in Information Technology. We have a list of courses (at UQ, a subject is a referred to as a “course”, I’ll use them interchangeably) we can choose from for a particular Program (qualification). This list of subjects unfortunately just divides the subjects into categories related to the program such as “Part A – Compulsory”, “Part B – Introductory Electives”. So when I was choosing my own subjects, I would just open up each course in the list in a new browser tab and then remove the subjects (close the browser tab) that are only offered in a different semester or that I don’t have the prerequisites for.

I devised three main “stages” and components for my project – a Python script to scrape UQ’s course websites, a database to store the course and program information from the scrape, and a web app which is the actual interface and UI to show the course information (I envisage a page where the user can select their program of study, the semester, and enter any other subjects they’ve studied. Then the app can show a list of subjects available, highlighting the ones that meet criteria.).

Stage one – Scraping script
---------------------------

The first course of action was to determine if it was even possible to programmatically determine the course information (semester, prerequisites, course title etc). A quick look over the to look at the HTML source of the course websites proved that it was. I pleasantly discovered that the web pages were nicely formatted in a consistent way with HTML elements given sensible ids and classes such as `<h1 id="course-title">Introduction to Software Engineering (CSSE7030)</h1>` for the course title or  
`<p id="course-incompatible">COMP1502 or CSSE1001</p>` for the courses that another course is incompatible with. (You wouldn’t get credit for this course if you have passed those other courses.) I also found a list of all programs offered by the university. These facts proved that it would be possible (maybe even not-to-difficult) to scrape UQ’s course and program websites to build up a database of subjects and programs.

Finally, I was able to get back to the project after the semester had finished so I set about finishing the Python script.

My script is made up of three main components so far:

*   A Course() class (object) to store various attributes about each course using appropriate data types (though Python is loosely typed).
*   A `find_links(url)` which searches through a web page and returns a `list` of all the courses llisted based on URLs in UQ’s course-URL format.
*   A database\_access.py module which contains some helper methods for database querying and writing and also the main course writer method which receives a Course object and writes its attributes to the database.

In my main script, I loop over the result of `find_links()` on a given URL, using the result of each iteration to create a new Course() object from that URL, appending each new Course object into a list. Then I loop over that list passing each Course object to the database\_access.course\_create(course) method.

```
courses = []
for each_course in find_links(url_to_run):
     courses.append(Course("http://www.uq.edu.au" +
                           course_page_url + each_course))
 
print(courses)
 
for each_course in courses:
    database_access.create_course(each_course)
 
database_access.connection.close()
```

Once I got enough working that I could scrape individual course data, I peeled away from this and set about creating the database to actually store the scraped information. I’ll discuss my experiences with mySQL and Python in a later post.