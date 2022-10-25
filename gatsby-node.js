exports.onCreateWebpackConfig = ({ actions, stage }) => {
    if (stage === "build-javascript") {
        // turn off source-maps
        actions.setWebpackConfig({
            devtool: false,
        });
    }
};
const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage, createRedirect } = actions;
    const result = await graphql(`
        query MyQuerytwo {
            allStrapiBlog {
                nodes {
                    Slug
                    Content
                    Title
                    id
                    Image {
                        url
                    }
                    createdAt
                    check {
                        data {
                            check
                        }
                    }
                }
            }
        }
    `);
    let blogs = result.data.allStrapiBlog.nodes;

    blogs.forEach((blog) => {
        const { Slug } = blog;
        createPage({
            path: `blog/${Slug}/`,
            component: path.resolve(`src/templates/blog-inner.js`),
            context: { Slug },
        });
    });
};
