# Icebreaker

This is the repository for the Icebreaker front end code.  [See the back end code.](https://github.com/SuzeShardlow/icebreaker_backend)

[See my other coding projects!](https://suze.dev/coding_projects)


## Introduction

**After learning JavaScript and Ruby for a couple of months, I created an AngularJS on Rails app in just seven days.**

Networking can be a very useful tool.  Many people dread going to events on their own and talking to strangers so I hit upon the idea of creating an app which allows users to browse events and create a pre-meet with other attendees.


## Tasks/Competencies/Skills

In this app I demonstrate my capability to:

* Build and use an internal **Rails API**.
* Use **AngularJS** on the front end.
* Incorporate at least three **RESTful resources**, one of which represents a user.
* Have at least one **1:1** relationship and one **1:many** relationship.
* **Include data from an external API.**

I love a challenge.  I love real-time information and I love APIs even more.  So I was really keen to pull live data from the Meetup.com API into my app.

I was comfortable with RESTful resources, the CRUD actions and user authentication so I knew I would be able to complete these functions early in the week, freeing up valuable time to focus on pulling in and manipulating the API data.


## The app

The purpose of this app is to allow users to pull data directly from the Meetup.com API relating to tech meetups.  They can create a pre-meet ("gathering") for a specific meetup.  This is then open to other members to join.  Users can suggest a venue for the gathering and leave comments.  The idea is that anyone who is scared of networking can meet up with someone beforehand so that they can either attend the main event together, or will at least see a friendly face when they get there.


## Planning

Before programming anything, I wrote some pseudocode describing what I needed to happen.  This helped me to break everything down into a set of small problems.  For example:

* The user needs to be able to register an account by giving their e-mail address and a password.
* Once logged in, they should be able to view meetups.
* The app will take this information and make a request to the Meetup.com API to gather the event data.
* The app will display this data to the user, who can then decide which meetup(s) they wish to create a pre-meet ("gathering") for.
* The user can see a list of all their gatherings and have a Cancel Attendance button next to each one.


## Build and Development

This app uses Rails for the internal API, which contains details of all the RESTful resources, along with an AngularJS front end.

The User model has a POST route for new members to create an account.  Once they have done that, they can log into the site - a process which is fully authenticated using bcrypt and JWT.

I decided that I wanted the appearance of the navbar to depend on whether or not a user was logged in.  Therefore I created a partial for the navbar and, within it, created an if... else statement to determine whether or not there was a user logged in.  If there was, then the navbar would greet them and, if not, it would invite them to register or log in.

The only things users can see if they are not logged into the app are the registration view and login view.  All the other views (events, gatherings, user shows etc) are locked down to logged-in users.

To list out the meetups, I made a call to the API - the endpoint depends on which group the user selects from the dropdown.

I placed a button under each meetup so that the user can create a pre-meet ("gathering") for it, or attend a gathering if someone has already created one.

The gatherings resource is populated using the data from the Meetup API response.

Users can add comments, and these are pushed into an array and displayed in a list.  Users can delete their own comments but not other people's.


## Challenges

Many groups on Meetup are dormant, with their most recent event having taken place some years ago.  Therefore, pulling broad endpoints to gather, say, all the technology meetups is not useful for the user.

Instead, I did some research to establish which meetups are active and busy, and seeded these into my database.  I used these seeds to populate a dropdown menu on the front end, which in turn fed into the call to the API.  Therefore when a user selects a group from the dropdown, the app makes a call to the API for all the forthcoming meetups belonging to that group.

The Meetup API does not accept AJAX requests, however this was not immediately apparent so a lot of time was spent working on this issue.  I remedied it by making HTTParty requests from the backend.


## Future Developments

I would like to incorporate the Google Maps API into this app to show the location of the meetup and associated gathering.  I would also like to plot each user's location on a map so that members can see who works near them.

Additionally, I would like to allow users to suggest a gathering which other members can then upvote or downvote.

Private messaging between users is also a function I would like to include.
