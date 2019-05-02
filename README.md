# Frontend Challenge

A web form for sending data to an api.

## Requirements
* npm
* server running from uniteus/fake_api

## Installation

download code from github and server from docker
```
    git clone https://github.com/wintermutestoothache/frontEndChallenge.git
    docker pull uniteus/fake_api
```

install with npm
```
    npm install --save
```

spin up the fake_api and run
```
    docker run -p 49567:49567 uniteus/fake_api
    npm start
```

run test
```
    npm test
```
