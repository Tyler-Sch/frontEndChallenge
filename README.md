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
## To Run:
spin up the fake_api and run
```
    docker run -p 49567:49567 uniteus/fake_api
    npm start
```

run test
```
    npm test
```

## General Layout

App.js calls a FormContainer from the form folder.

In form folder:

File | Description
-----|------------
formContainer.js | contains code for get and post calls to the api
formDataControl.js | keeps track of the state of form inputs and validates request information before passing data to formContainer for api call
success.js | returns html when a successful request is made and writes basic info to localStorage to prevent duplicate requests
