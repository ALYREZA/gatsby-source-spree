# gatsby-source-spree

This source plugin for Gatsby will make products from [Spree](https://spreecommerce.org) available in GraphQL queries.

## Installation

```sh
# Install the plugin
yarn add gatsby-source-spree
```

In `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-spree',
      options: {
        host: 'http://localhost:3000'
      }
    }
  ]
};
```

## Querying Spree Products

Once the plugin is configured, the query is available in GraphQL: `allSpreeProducts` 

Here’s an example query to load 10 images:

```gql
{
  allSpreeProducts{
    edges {
      node {
        attributes{
          name
          price
          purchasable
        }
      }
    }
  }
}
```
