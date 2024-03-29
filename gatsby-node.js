/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const slash = require(`slash`);

exports.onCreatePage = ({page, actions}) => {
  const {deletePage, createPage} = actions;

  return new Promise((resolve) => {
    // if the page component is the index page component
    if (`${page.componentPath}`.includes(`/src/pages/home/index.ts`)) {
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

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
            status
            template
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            wordpress_id
            path
            status
            template
            format
            slug
          }
        }
      }
      allWordpressWpProject {
        edges {
          node {
            id
            wordpress_id
            path
            status
            template
            format
            slug
          }
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  // Access query results via object destructuring
  const {
    allWordpressPage,
    allWordpressPost,
    allWordpressWpProject,
  } = result.data;

  //   // Create Page pages.
  //   const pageTemplate = path.resolve(`./src/templates/page.js`);
  //   // We want to create a detailed page for each page node.
  //   // The path field contains the relative original WordPress link
  //   // and we use it for the slug to preserve url structure.
  //   // The Page ID is prefixed with 'PAGE_'
  //   allWordpressPage.edges.forEach((edge) => {
  //     // Gatsby uses Redux to manage its internal state.
  //     // Plugins and sites can use functions like "createPage"
  //     // to interact with Gatsby.
  //     createPage({
  //       // Each page is required to have a `path` as well
  //       // as a template component. The `context` is
  //       // optional but is often necessary so the template
  //       // can query data specific to each page.
  //       path: edge.node.path,
  //       component: slash(pageTemplate),
  //       context: {
  //         id: edge.node.id,
  //       },
  //     });
  //   });

  const postTemplate = path.resolve(`./src/templates/post.tsx`);
  // We want to create a detailed page for each post node.
  // The path field stems from the original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: slash(postTemplate),
      context: {
        wordpress_id: edge.node.wordpress_id,
      },
    });
  });

  const project = path.resolve(`./src/templates/project.tsx`);
  allWordpressWpProject.edges.forEach((edge) => {
    createPage({
      path: `/work/${edge.node.slug}`,
      component: slash(project),
      context: {
        wordpress_id: edge.node.wordpress_id,
      },
    });
  });
};
