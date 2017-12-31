# University of Minnesota PhD Student Information System

## How to run on Mac

Make sure you have `yarn` installed:

```
which yarn
```

If there's no return value, install [Homebrew](https://brew.sh), then:
```
brew install yarn
```

Then just run:
```
yarn start
```

The website should be running at your http://localhost:3000.

## How to publish to Github Pages

Update `homepage` field in `package.json` to your designated URL, then:

```
yarn run deploy
```

## How to make changes to student data

Export CSV from your Google Sheet / Excel Worksheet to `./src/data/student_list.csv`. Then:

```
yarn run parse-csv  # turn the CSV in JSON
yarn start  # run the website in dev mode to make sure nothing is broken
yarn build  # create production build
```
