export default {
  name: 'products',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'productName',
      title: 'productName',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
    },
    {
      title: 'Sort',
      name: 'sort',
      type: 'string',
    },
    {
      title: 'Logo',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Gender',
      name: 'gender',
      type: 'string',
    },

    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
  ],
}
