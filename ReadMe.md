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
luhn.test.ts
index.ts


## API Endpoint

### POST /api/validate-card
http://localhost:8080/api/validate-card
Request Body
```json
{
  "cardNumber": "4539578763621486"
};

//Response
{
  "status": "True",
  "data": {
    "cardNumber": "4539578763621486",
    "valid": true
  }
}; 

//Error Handling Test
{
  "status": "False",
  "message": "CardNumber should be between 12 and 19 digits"
};

How to run the project
-Install dependencies
 npm install 

-Run the server
npm run dev
 Then server run on:
 http://localhost:8080

-Run test
 npm test

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

