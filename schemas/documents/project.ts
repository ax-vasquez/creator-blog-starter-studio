export default {
    name: `project`,
    title: `Project`,
    type: `document`,
    fields: [
      {
        name: `title`,
        title: `Title`,
        type: `string`,
        required: true,
      },
      {
        name: `slug`,
        title: `Slug`,
        type: `slug`,
        options: {
          source: `title`,
          slugify: (input: string) => input
                           .toLowerCase()
                           .replace(/\s+/g, '-')
                           .slice(0, 200)
        },
      },
      {
        title: 'Repo URL',
        name: 'repoUrl',
        type: 'url'
      },
      {
        title: 'NPM URL',
        name: 'npmUrl',
        type: 'url'
      },
      {
        title: 'Steam URL',
        name: 'steamUrl',
        type: 'url'
      },
      {
        name: `description`,
        required: true,
        title: `Description`,
        type: `array`,
        of: [
          {
            title: `Block`,
            type: `block`,
            styles: [{ title: `Normal`, value: `normal` }],
            lists: [],
          },
        ],
      },
      {
        name: `version`,
        title: `Version`,
        type: `string`,
        required: true,
      },
    ],
  }