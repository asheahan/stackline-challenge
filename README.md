# Stackline Product Page

This project creates a dummy product app that shows information for a product using a mocked network call. This information includes sales data displayed in both graph and table formats.

## Getting Started

### Setup for Local Development

```bash
# Install dependencies
npm install

# Start the local server
npm start
```

### Running Tests

```bash
npm test
```

### Deployment

The app is currently deployed to Github Pages and can be viewed at [https://asheahan.github.io/stackline-challenge](https://asheahan.github.io/stackline-challenge)

```bash
npm run deploy
```

## Assumptions

1. The product page was designed to work as part of a wider scoped app. Currently, the app loads to a single product page at the path "/products/B007TIE0GQ" but would be able to handle any product that can be loaded from the API using the parameter in the path. A separate product list page would then link to these product pages. The app also handles non-existent products.
2. The graph data currently only shows "Retail Sales" data per the mock, but additional metrics could be switched out with minimal updates. The mock shows 2 different lines, but it wasn't clear what the other line would indicate (either past Retail Sales data per the title or perhaps a different metric).

## Future Considerations

In the interest of time, a few improvements were skipped that would otherwise be implemented. These include:

1. Error handling
  1. Handling errors from the API call and showing the correct message to the user on the product page.
  2. An error boundary should be added to handle thrown errors within React. The error handler should handle messaging to the user as well as emitting the error metrics to monitoring systems for debugging.
2. Responsiveness
  1. The app should be updated to ensure it works well on a broad range of screen sizes including mobile screens.
3. Styling
  1. A dedicated theme configuration should be added to ensure proper UI styles are applied and consistent throughout the app.
  2. Font styles should be updated to reflect the UX design and brand.
4. Testing
  1. Unit tests should be added to ensure the data is fetched on app load as well as the proper finalized renderings are expected.
  2. E2E tests for full integration testing.