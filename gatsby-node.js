const spree = require('@spree/storefront-api-v2-sdk/dist/server')

exports.sourceNodes = async({
    actions: {
        createNode
    },
    createNodeId,
    createContentDigest
}, {host}) => {

    const {makeClient} = spree;
    const client = makeClient({host});
    const productsFetch = await client
        .products
        .list();
    const {success} = productsFetch;
    const products = success();

    const processProducts = product => {
        const nodeId = createNodeId(`spree-product-${product.id}`);
        const nodeContent = JSON.stringify(product);
        const nodeData = Object.assign({}, product, {
            id: nodeId,
            parent: null,
            children: [],
            internal: {
                type: `SpreeProducts`,
                mediaType: `application/javascript`,
                content: nodeContent,
                contentDigest: createContentDigest(product)
            }
        });
        return nodeData
    }

    products
        .data
        .forEach(product => {
            createNode(processProducts(product))
        });

};