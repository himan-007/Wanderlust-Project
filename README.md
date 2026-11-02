# Wanderlust 🧭

A full-stack Airbnb-style web application where users can browse, create and review travel stays. Built with Node.js, Express, MongoDB and EJS, with secure authentication, cloud image uploads and location-based listings.

**Live demo:** [https://wanderlust-project-w075.onrender.com](https://wanderlust-project-w075.onrender.com)

> The app is hosted on Render's free plan, so the first load after a period of inactivity can take up to a minute.
> 
**Features**
- **Listings (full CRUD):** create, view, edit and delete property listings with title, description, price, location and country.
- **Authentication and sessions:** sign up, log in and log out using Passport.js (local strategy), with sessions stored in MongoDB.
- **Authorization:** only the owner of a listing can edit or delete it, and only a review's author can delete that review.
- **Reviews and ratings:** logged-in users can leave reviews on listings.
- **Image uploads:** listing images are uploaded to Cloudinary.
- **Geocoding:** the location entered for a listing is converted to coordinates using the Mapbox Geocoding API and stored as GeoJSON.
- **Server-side validation:** request data is validated before it is saved.
- **Flash messages:** success and error feedback after actions such as creating a listing or logging in.
- **Responsive UI:** category filter bar, "Display total after taxes" toggle and a clean card layout.
- **Error handling:** custom error class and a global error page for invalid routes and failures.

**Tech Stack**

| Area | Technologies |
| --- | --- |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Templating / Frontend | EJS, ejs-mate, HTML, CSS, JavaScript |
| Authentication | Passport.js, passport-local, passport-local-mongoose, express-session, connect-mongo |
| File storage | Cloudinary, Multer |
| Maps | Mapbox Geocoding API |
| Other | connect-flash, method-override, dotenv |
| Deployment | Render (web service), MongoDB Atlas (cloud database) |

** Project Structure**

```
MAJOR_PROJECT/
├── app.js              # App entry point, middleware and route setup
├── cloudConfig.js      # Cloudinary configuration
├── middleware.js       # Login, ownership and validation middleware
├── schema.js           # Server-side validation schemas
├── controllers/        # Route handler logic (listings, reviews, users)
├── models/             # Mongoose models (Listing, Review, User)
├── routes/             # Express routers
├── views/              # EJS templates, layouts and partials
├── public/             # Static files (CSS, JS, images)
├── utils/              # Helpers (wrapAsync, ExpressError)
└── init/               # Script to load sample data into the database
```

 **Deployment**

The app is deployed on **Render** as a Web Service connected to this GitHub repository:

- **Build command:** `npm install`
- **Start command:** `node app.js`
- **Environment variables:** the same keys as the `.env` file above, plus `NODE_ENV=production`
- **Database:** MongoDB Atlas, with network access configured so Render can connect

Every push to the `main` branch triggers an automatic redeploy.

## What I Learned

- Building a full-stack app with the MVC pattern in Express
- Designing MongoDB schemas and relationships (listings, reviews, users)
- Implementing authentication, sessions and authorization
- Integrating third-party services (Cloudinary, Mapbox)
- Deploying a Node.js app with a cloud database and managing environment variables

## Author

**Himanshu**
GitHub: [@himan-007](https://github.com/himan-007)

## Acknowledgements

Built as a major project while following the Delta course by Apna College.
