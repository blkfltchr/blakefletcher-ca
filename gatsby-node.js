const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if(node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({
            node,
            getNode,
            basePath: 'posts'
        });
        createNodeField({
            node,
            name: 'slug',
            value: `${slug}`
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve) => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                date
                                path
                                title
                                description
                              }
                        }
                    }
                }
            }
        `).then(result => {

          const posts = result.data.allMarkdownRemark.edges

          posts.forEach(({ node }) => {

                createPage({
                    path: node.fields.slug,
                    component: path.resolve('./src/templates/PostPage.js'),
                    context: {
                        slug: node.fields.slug
                    }
                })
            })
        })
        resolve();
    })
}