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

#### In form folder:

File | Description
-----|------------
formContainer.js | contains code for get and post calls to the api
formDataControl.js | keeps track of the state of form inputs and validates request information before passing data to formContainer for api call
success.js | returns html when a successful request is made and writes basic info to localStorage to prevent duplicate requests
formComponent folder | contains generic input components for constructing a form

#### In the formComponents folder:

There are several generic input components including components for text input, checkbox, select input, and a text area input. These components should be easy to reuse in a larger application.

#### Data Integrity:

To prevent data from being sent multiple times, I've opted to use localStorage to retain  records of previous successful attempts. In the real world, if someone were making such requests, it seems logical that they may request different services. For this case, we keep an object with emails as keys to check if for requested service types. Of course this wouldn't prevent someone who has restarted the browser from making the same request, so you would need validation server side.
