# Inv-noice REST API

A brief example/experiment of a pure Node.js serverless API that can be deployed with Vercel and zero configuration.

An experimental router utility is also included to use more 'express-like' routing in API endpoints.

Routing is file-based and currently you have to check each request for its method.

However, with the **Proto** router module, you can specifiy `POST` and `GET` requests easily inside files.

## Deploy Your Own

Deploy your own Node.js API with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/peterjskaltsis/inv-noice/tree/master/)

_Live Example: https://inv-noice-beta.vercel.app_

### Deploying From Your Terminal

Deploy this repo with a single command from your terminal using [Vercel CLI](https://vercel.com/download):

```shell
vercel
```
