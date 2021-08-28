// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'dunno1'
});

// Categories have many Products
Category.belongsTo(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'dunno1'
});

// Products belongToMany Tags (through ProductTag)
// Products belongsTo Category
Product.hasMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Tag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'dunno2'
});


// Tags belongToMany Products (through ProductTag)
// Products belongsTo Category
Tag.hasMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Tag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'dunno2'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag
};

/*
// Products belongsTo Category
Product.belongsToMany(Category, {
  // Define the third table needed to store the foreign keys
  through: {
    model: product,
  },
  // Define an alias for when data is retrieved
  as: 'dunno'
});

// Categories have many Products
Category.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: product,
  },
  // Define an alias for when data is retrieved
  as: 'dunno_again'
});
*/