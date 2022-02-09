# gql-to-ast
Transforms graphql document to graphql abstract syntax tree.

The service runs by default on port 3333 and at the root.  The body should be a json document with a query property.  It does no schema validation on the GraphQL document.

## Prerequisites 
* nodejs (test with v17.4.0 but should work on much older versions)
* docker (if you want to build a local docker image)

## Running locally
```bash
node index.js
```

## Testing with CuRL
```bash
curl localhost:3333 -H 'content-type:application/json' -d '{"query": "{hero {name}}"}'
``` 

## Building docker image
```bash
docker build -t gql-to-ast .
```

## Running docker image
```bash
docker run -d -p3333:3333 gql-to-ast
```
