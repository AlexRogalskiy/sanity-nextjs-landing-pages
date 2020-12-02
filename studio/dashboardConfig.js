export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fc6f72b6c3c56c51710f3ad',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9qztajns',
                  apiId: 'd18f1ea9-5768-486f-9b03-a62c153d119b'
                },
                {
                  buildHookId: '5fc6f72bddfbcdb827908d81',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wvwpddpg',
                  apiId: '9b0eaf7f-de67-4948-9d68-9817fc4a1890'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AlexRogalskiy/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wvwpddpg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
