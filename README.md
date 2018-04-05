# funky-gen
From some user data, generates a hash and an equation of consistent complexity in asciimath format

# usage

## host

https://funky-gen.istein.ai

## /authenticate (POST)

funky-gen uses winter-simple-auth for authentication.  This means any protected resources will return a 401 if a request is made without a valid token.  To authenticate, make a HTTP POST request to /authenticate with your access key written to the request body in JSON format.

example request: 

`{
  "accessKey": "42u39u8wfkfhsdjh2389hsfdhfskjh3"
}`

If your accessKey is valid, you will receive a token in the response which you should include in all subsequent requests as HTTP header with the key 'x-access-token'.

example response:

`{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiUmVhZGVyIiwiYWNjZXNzS2V5IjoiZTUzNGVlYzQ5OTkyNDI3NWI1NzkzYmQ4NGJkZTJlNzciLCJpYXQiOjE1MjI5MTI5ODEsImV4cCI6MTUyMjk5OTM4MX0.kqTYRRgxJ-fUUEsVzsW6F9ESmWLkkEaXGCnPvfRL_sc"
}`

## /generate (GET)

Is protected by winter-simple-auth - see above for details.

Examples:

`/generate/:inputData`
`/generate/:inputData/:complexity`

| Parameter        | Required           |Notes         |
| ---------------- |:------------------:|:------------:|
| inputData        | yes                |Any http encoded string.  This is used to generate an MD5 hash which is the basis for the generated function |
| complexity       | no                 |value between 1 and 4 (inclusive).  Used to determine the complexity of the generated function.  Default is 2.  |


