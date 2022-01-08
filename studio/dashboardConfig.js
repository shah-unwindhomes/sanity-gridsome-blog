export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61d944d274e734f2d44651a0',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-4irixtwd',
                  apiId: '409b5ffd-0c82-43e0-b0a1-81468beb3c2f'
                },
                {
                  buildHookId: '61d944d2e432d7e6fd1fd0db',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-97tczyyx',
                  apiId: '290155d4-3fac-4cba-984c-f7ae8a9742c4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shah-unwindhomes/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-97tczyyx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
