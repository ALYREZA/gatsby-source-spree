# gatsby-source-spree

This source plugin for Gatsby will make products from [Spree](https://spreecommerce.org) available in GraphQL queries.

## Installation

```sh
# Install the plugin with yarn
yarn add gatsby-source-spree

# or with npm
npm install gatsby-source-spree --save
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
