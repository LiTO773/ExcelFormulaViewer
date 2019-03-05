# Excel Formula Viewer
## What is this project?
This is a small react app that transforms mathematical Excel expressions into 
AsciiMath (which is displayed as regular math). The conversion process has a few 
flaws but it works pretty well for most formulas.

## What's the point of this project?
I'm currently taking a class called MATCP (Computational Mathematics \[EN\]/
Matemática Computacional \[PT\]) in college which requires the use of Excel for 
Mathematical Formulas. However, it is an absolute pain typing long formulas in 
Excel, and, worse yet, it's pretty hard to find an error if the formula was 
typed incorrectly. So this little react app aims to help with that.

## What needs to be done?
Here is a list of side goals for the app, since the main one was just the 
conversion:
- [ ] Localization (Excel function names are different in each language, for 
example, `SQRT` in Portuguese is `RAIZQ`)
- [ ] Better parenthesis detection
- [ ] AsciiMath => Excel
- [ ] AsciiMath => Latex (there is already a package that does this)

## Commands
This was created with [Create React App](https://github.com/facebook/create-react-app) 
so you will need yarn (or npm) to install the dependencies needed. After that, 
it's just ES6 and React. Happy coding 🙂
``` bash
# serve with hot reload at localhost:3000
yarn start

# build for production with minification
yarn build
```

## License
Excel Formula Viewer is open source software [licensed as MIT](https://github.com/LiTO773/ExcelFormulaViewer/blob/master/LICENSE).