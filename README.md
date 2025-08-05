# Node Express EJS

Basic barebone NodeJS app with the default MongoDB database and collection as
development database.

## Requirements

You need a cloud MongoDB database to connect to, because this repo will use the
default databases and collections.

https://cloud.mongodb.com

## Environment variables

Copy the `.env.sample` file to `.env` and fill in the values.

You can find your credentials in the MongoDB dashboard of your cloud
database/account.

## Adapt the database to your needs

In my case, I used the demo database `sample_restaurants` and the collection `restaurants`. It was what mongoDB provided as a demo database, so I used it.

It may be different for you, so you can adapt the database and collection names in the `./database/connection.js` file.  
And of course, in every other place here in this template repo. This will be a good exercise to get familiar with the code structure.

## Start it up

1. `$ npm install`
2. `$ npm start`

Visit `http://localhost:3000` in your browser and/or
`http://localhost:3000/welcome` to see everything in action.

## Ingredients

Plain NodeJS and Express and EJS as templating language.

### Where the magic happens

The app consists of the following parts:

- `./index.js` - the main entry point of the app
- `./routes/` - the routes of the app
- `./views/` - the views of the app
- `./database/` - the database connection and schema

#### Routes

- uses `./routes/root.js` for the main route
- uses `./routes/welcome.js` for the welcome route
- you can add more routes as needed, just follow the pattern

#### Views

- uses `./views/applications.ejs` for the main view/layout

Learn more about [ejs](https://ejs.co).

#### Database

- uses `./database/connection.js` for the database connection
