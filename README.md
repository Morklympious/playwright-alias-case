# Welcome!

Hello! Welcome to the tiny test repro for Playwright. This is a default vite project that has minimal configuration. 

## The Problem

My problem is currently that I'd like to be able to reference an alias path when I'm pulling in information into test. 

Currently:

- I have a folder, `src/test` that I use as an alias target
- I have an alias, `test` that maps to `src/test`
- In my `jsconfig` file, I also have a `"test"` key that maps to a wildcard match of the folder containing the test data I'd like to use
- In `./test/sample.test.js` I make a reference to `./src/test/data.js` by way of `import message from "test/data.js`

My problem is that playwright complains that `test` is a module, and not an alias, and immediately horks it seems without reading the rest of the path?

```bash
PS C:\Users\Morklympious\Desktop\test\nested> npm run test

> test@0.0.0 test
> playwright test

(node:25664) ExperimentalWarning: Custom ESM Loaders is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

Running 0 tests using 0 workers

Error: Cannot find package 'test' imported from C:\Users\Morklympious\Desktop\test\nested\test\sample.test.js


=================
 no tests found.
=================
```

## What I would like

I'd like to be able to simply leverage vite (or based on what I've read, `jsconfig` paths) to import nicer URLs into my test files. Some of my test files require the use of known enums that are buried deep in component code folders and I'd really love to not go through path-hell to get those imported nicely!