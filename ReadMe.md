# Card Validation API

## Description
This is a backend API built with Node.js, Express, and TypeScript that validates credit/debit card numbers using the Luhn algorithm.

The API accepts a card number, sanitizes it, validates it, and returns whether it is valid or not.

## Features
- Card number validation using Luhn algorithm
- Input sanitization (removes non-digit characters)
- Length validation (12–19 digits)
- Proper error handling
- Modular architecture (Controller, Service, Utils)
- Unit testing with Jest

## Tech Stack
- Node.js
- Express.js
- TypeScript
- Jest

## 📁 Project Structure
src/
 controllers/
   card.controller.ts
services/
   card.service.ts
utils/
   luhn.ts
routes/
   card.route.ts
tests/
l  uhn.test.ts
index.ts

How to run the project
-clone my repo https://github.com/Afolabismart8/card-number-validation-api.git 
 git clone then you add the provided url
-Make sure you install dependencies
-Also add dotenv for PORT
-npm install 

-Run the server
-npm run dev
 Then server run on:
 http://localhost:8080

-Run test
 npm test

 ## Testing
This project uses **Jest** for unit testing.
### Run Tests
```bash
npm test
Result:
 PASS  src/test/luhn.test.ts
  Luhn Algorithm test
    √ should return true for a valid card number (3 ms)
    √ should return false for an invalid card number (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.958 s, estimated 4 s
Ran all test suites.

## API Endpoint Using PostMan
### POST /api/validate-card
http://localhost:8080/api/validate-card
Request Body
```json
 Request:
{
    "cardNumber": ""
};


 Response:
{
    "status": "false",
    "message": "CardNumber is required"
};
 Request:
{
    "cardNumber": null
};
 Response:
 {
    "status": "false",
    "message": "CardNumber is required"
};

 Request:
{
  "cardNumber": "4539578763621486"
};

 Response:
{
  "status": "True",
  "data": {
    "cardNumber": "4539578763621486",
    "valid": true
  }
}; 

//Error Handling Test
 Request:
{
    "cardNumber": null
}
 Response:
{
    "status": "false",
    "message": "CardNumber is required"
}
 Request:
{
    "cardNumber":"45395787636214864539578763621486"
};
 Response:
{
  "status": "False",
  "message": "CardNumber should be between 12 and 19 digits"
}

  Request:
{
    "cardNumber":4539578763621486
}

 Response:
 {
    "status": "false",
    "message": "CardNumber must be a string"
}
  Request:
{
    "cardNumber":"45395 7876 3621 486"
}

Response: Clean Data response
{
    "status": "true",
    "data": {
        "cardNumber": "4539578763621486",
        "Valid": true
    }
};
 Request: Contain symbols
{
    "cardNumber":"45395$*78763621&48)()6"
}
 Response: Return Clean response
{
    "status": "true",
    "data": {
        "cardNumber": "4539578763621486",
        "Valid": true
    }
}

-How this project works
1. The API receives a card number from the client
2. The input is validated (type, presence, length)
3. The number is cleaned (removes spaces and symbols)
4. The Luhn algorithm is applied
5. The result is returned as valid or invalid

-Edge Cases Handled
- Null or undefined input
- Empty strings
- Non-string inputs (numbers, objects)
- Card numbers shorter than 12 or longer than 19 digits
- Strings containing spaces or special characters

-Real Flow
Input:
"4539 5787 6362 1486"

After cleaning:
"4539578763621486"

Validation:
Luhn Algorithm → Valid

Response:
valid: true

-Possible Improvements
 Add database logging for validation history
 Rate limiting for API protection
 Swagger documentation for API testing
 Docker containerization
 More extensive test coverage


 AUTHOR
 Yusuf Afolabi
 Backend Developer

