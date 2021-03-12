<center>
  <img src="./client/public/logo.png" alt="drawing" height="100" width="100" />
  <h2 style="text-shadow: 2px 2px #505050;" fontFamily='Roboto' fontSize='22px' x="0" y="15" fill="black">scarebnb</h2>
</center>

# Review Module for Scarebnb

Scarebnb review module microservice developed along with 3 other microservices [Carousel Module](https://github.com/hrr50-airbnb-clone/ash-air-bnb-clone), [Lodging and Info Module](https://github.com/hrr50-airbnb-clone/ren-air-bnb-clone) and [More Places to Stay Module](https://github.com/hrr50-airbnb-clone/joshua-air-bnb-clone). Developed with a _MERN_ stack (MySQL, Express, React, Node). All feed through a [proxy](https://github.com/hrr50-airbnb-clone/ren-proxy-server) to render the booking page for Scarebnb.

## Requirements

- [Node](https://nodejs.org/en/download/)
- [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

## Quick Start

1. Clone the Repo
2. Run `npm install` to install the required dependencies

```
npm install
```

3. Set up database configuration

```
npm run config
```

> <span style="color:red">WARNING:</span>

> &nbsp;if you have an existing **_*reviews database*_** it will be dropped and replaced

> consider modifying `server/schema.sql` and `server/db/index.js`

4. Seed the database

```
npm run seed
```

5. start the server

- For development running with nodemon

```
npm run server:dev
```

- For deployment

```
npm run server
```

6. Build client bundle

- For development webpack build with watch flag

```
npm run bundle:dev
```

- For deployment

```
npm run bundle
```

---

## Testing

**Server side testing**

1. run test suite

```
npm run test
```
