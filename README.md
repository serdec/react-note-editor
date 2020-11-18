This is a React note editor that integrates with a [Django backend](https://github.com/serdec/django-restful-note-editor) that implements CRUD operations.

# Description

The note editor allows you to edit your notes and keep them sync with the backend. 

Assuming that you may not want to lose your job it performs an automatic update at most every three seconds.

## Redux

The project has been built using [Redux](https://redux.js.org/). Having an internal state manager allows to centralize the application's state and logic, making it more modular.

## Network Events

Network events are managed using [Redux-Saga](https://redux-saga.js.org/). The sagas allows the network events to be isolated from the application layer making it unware of all the network events and logic. Hence, it is easier to change the data fetching logic without affecting the internal work of the application.

## Run (Dev )

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

```bash
yarn build

yarn start
```


