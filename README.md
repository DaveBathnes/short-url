# Short URLs

Service for creating short URLs. A React.JS front end, Express backend, with Docker containers.

## Information

The front end is written in React.JS and uses the [React Router](https://reacttraining.com/react-router/web/guides/quick-start) library.

It provides a simple UI for creating short URLs. A short code is generated and displayed in advance. Once the URL is entered and the make URL button pressed, the short code URL is confirmed.

The backend service is written in [Node.JS](https://nodejs.org/en/). It uses the [Express](https://expressjs.com/) framework. It also uses a PostgreSQL database for storing the URLs.

Interesting details:

* The backend service will accept any short code (unless it is already in use), up to a maximum of 20 characters.
* The front end generates a random short code of 5 characters out of 34 characters. This should give around 45 million possible short codes.
* I took out 0 and O as possible characters because they are too similar.
* The tool is also case insensitive, it will store and generate codes using uppercase.

### Prerequisites

Requirements for the software and other tools to build, test and push 
- [Docker](https://www.docker.com/)
- [Node.JS](https://nodejs.org/en/)

## Running

To run using Docker, simply run the following command:

```
docker-compose up
```

## Testing instructions

After running docker-compose up, you can test the service by the following steps:

1. Navigate to ```http://localhost:3050```
2. Enter a URL in the input field
3. Click the make URL button
4. The saved short code link will be displayed in the output field
5. In the browser, navigate to the short code link
6. The original URL will be displayed

## Deployment

See [Docker notes on deploying your app](https://docs.docker.com/language/java/deploy/) for details of how to deploy. Alternatively this could be run independently on a web server that supports static hosting for the website, and Node.JS for the backend.

## Authors

  - **Dave Rowe** - *Coding* - [DaveBathnes](https://github.com/DaveBathnes)

## License

This project is licensed under the [MIT](LICENSE.md) - see the [LICENSE.md](LICENSE.md) file for
details
