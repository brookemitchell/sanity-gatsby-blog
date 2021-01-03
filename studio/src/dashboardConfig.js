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
                  buildHookId: '5ff1201a3b32cddf0682de05',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-f7r7w53g',
                  apiId: '34334b8e-811d-4fa7-b809-e069b1ccf89e'
                },
                {
                  buildHookId: '5ff1201a80da58e2449fa5c2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3fm64d2b',
                  apiId: 'd3ad7c0e-29f6-4b2b-b258-349d4a9bb202'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brookemitchell/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3fm64d2b.netlify.app', category: 'apps' }
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
