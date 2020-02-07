# static-files-server

## Configure it:

- From your Google Cloud account:
  - create a bucket
  - get a service account

- Install it
```
npm ci
```

- Create the parameters file
```
cp ./config/parameters.json.example ./config/parameters.json
```

- Add your bucket name in the parameters file
```
vim ./config/parameters.json
```

- Add your service account json file
```
vim ./config/gc.json
```

## Run

- In development mode (logs and auto refresh)
```
npm run dev
```

- In clean mode
```
npm run pro
```

## Tests

```
npm test
```

```
npm run dev-test
```
