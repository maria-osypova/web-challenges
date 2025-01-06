# List of current movies

## Value Proposition

**As a** `<User>` <br>
**I want to** `<view a list of movies>` <br>
**so that** `<I can choose what movie to watch next>` <br>

## Description

![wireframe](./assets/scribble-movie-list.png)

## Acceptance Criteria

- "Movie App" is the heading and is located at the top center. It remains fixed in the same position on every page
- List scrolls vertically
- Displays a list of movie cards
- Each movie card contains the movie name, IMDB rating, and movie picture
- Movie rating is located inside the card at the top-right corner
- Movie name is located below the card at the bottom
- When user press on movie card it open new page with error and with text "Sorry, we couldn't retrieve the latest movie data
  at the moment. Please try again later."

## Tasks

- create a feature branch
- implement global styles
- find API with all movies (should contain name, realease date, description, rating, picture )
- handle error scenario
- fetch data from API to App component
- impliment movie data props and locate them in App component
- create card component which dislaes movie name, rating, and movie picture (pass down props from App component)
- utilize mapping over movie data to generate list of movie cards
- render card component for each movie
- use flexbox to display list vertically and displays two movie cards per row
