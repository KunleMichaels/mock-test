# STEP BY STEP IMPLEMENTATION

1. Create empty project directory
2. Initialise git using the command <code>git init</code>
3. Initialise npm using the command <code>npm init</code>
4. Install jest if it doesnt exist globally using the command <code>npm i -g jest</code>
5. Initialise jest using the command <code>jest --init</code>
6. Install babel and it's dependencies using the command <code>npm i --dev babel-jest @babel/core @babel/preset-env</code>
7. Configure babel using a babel.config.js file with the following 
        <code>
            module.exports = {
                presets: [["@babel/preset-env", { targets: { node: "current" } }]],
            };
        </code>
8. Uncomment the configurations for `testPathIgnorePatterns` and `testMatch` in the jest.config.js file
9. Write your functions
10. create a __tests__ folder with your tests or just write a test file that ends with .spec.js or .spec.ts (if it's a           typescript project)

11. Make sure the test script in package.json is equal to jest as shown below
    <code>
        "scripts": {
            "test": "jest"
        },
    </code>
12. run your tests using the command <code>npm test</code> or <code>npm run test</code>