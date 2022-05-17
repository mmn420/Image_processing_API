# Image Processing API

## Description

A simple API for resizing images. The user enters the desired filename, width and height into the query parameters i.e `http://localhost:3000/resize?filename=fjord&width=200&height=200`. The API then processes the request and returns the resized image.

## Installation

- Clone the repository
- Install dependencies using `npm i`

## Scripts

- To run the server `npm run start`
- To run tests `npm run test`
- Prettier `npm run prettier`
- Eslint `npm run lint`

## Endpoints

- Root endpoint `http://localhost:3000/`
- Resize endpoint `http://localhost:3000/resize`

## How to use

After setting up the project and running the server enter the query as follows `http://localhost:3000/resize?filename={filename}&width={desired_width}&height={desired_height}`
