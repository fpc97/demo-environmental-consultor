const path = require('path');

exports.createPages = ({actions: {createPage}, graphql}) => {
    createPage({
        path: '/identity-mails/invite/',
        component: path.resolve(
            `src/templates/identity-email.js`
        )
    });
}