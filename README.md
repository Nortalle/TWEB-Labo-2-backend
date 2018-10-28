# git-battle
Github Analytics server

## Running the app

### 1. Clone this repo

```sh
$ git clone https://github.com/Nortalle/TWEB-Labo-2-backend.git
```

### 2. Add Environment Variables
Copy the `.env.default` file and rename it to `.env`.
```sh
$ cp .env.default .env
```

then edit the `OAUTH_TOKEN` environment variable. You can use your github personal access token which you can find in [Github developer settings](https://github.com/settings/tokens)

### 3. Install project dependencies
```sh
$ npm install
```
### 4. Run the app

You can start the server by running
```$
$ npm start
```

and access the REST API in https://http://localhost:3000