export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ed84cf25d406892cebbee57',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5fk2z5b5',
                  apiId: '7a7bab27-dd61-4b03-845c-486832063734'
                },
                {
                  buildHookId: '5ed84cf299c621930eecb46a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-poz1qb8z',
                  apiId: 'd5984091-a271-4faf-915b-64f82b4dbc7e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cluk3/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-poz1qb8z.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
