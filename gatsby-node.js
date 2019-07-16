/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreatePage = ({page, actions}) => {
  const {deletePage, createPage} = actions;

  return new Promise((resolve) => {
    // if the page component is the index page component
    if (`${page.componentPath}`.includes(`/src/pages/index/index.ts`)) {
      deletePage(page);

      // create a new page but with '/' as path
      createPage({
        ...page,
        path: '/',
      });
    }

    resolve();
  });
};

// const postTemplate = path.resolve(`./src/templates/post.js`);

// _.each(result.data.allWordpressPost.edges, (edge) => {
//   createPage({
//     // will be the url for the page
//     path: edge.node.slug,
//     // specify the component template of your choice
//     component: slash(postTemplate),
//     // In the ^template's GraphQL query, 'id' will be available
//     // as a GraphQL variable to query for this posts's data.
//     context: {
//       id: edge.node.id,
//     },
//   });
// });
