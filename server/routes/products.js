const express = require('express')
const router = express.Router()

// MongoDBから接続できなかったため、固定のJSONを返却
router.get('', function(req, res) {
 res.json(products)
})

// MongoDBから接続できなかったため、固定のJSONを返却
router.get('/:productId', function(req, res) {
    const productId = req.params.productId
    console.log('productId=' + productId)
    var product = products.filter(function (_product) {
        return _product.id === productId;
    })
    res.json(product)
})

module.exports = router

const products = [
    {
      id: '101',
      coverImage: './assets/img/phone-cover.jpg',
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      heding1: 'サンプルテキスト１',
      heding2: 'サンプルテキスト２',
      heding3: 'サンプルテキスト３',
      headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　',
      headingtext2: 'テキスト文章　テキスト文章　テキスト文章　テキスト文章　',
      headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
    },
    {
        id: '102',
        coverImage: './assets/img/phone-cover.jpg',
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      heding1: 'サンプルテキスト１',
      heding2: 'サンプルテキスト２',
      heding3: 'サンプルテキスト３',
      headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　',
      headingtext2: 'テキスト文章　テキスト文章　テキスト文章　テキスト文章　',
      headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
    },
    {
        id: '103',
        coverImage: './assets/img/phone-cover.jpg',
      name: 'Phone Standard',
      price: 299,
      description: '',
      heding1: 'サンプルテキスト１',
      heding2: 'サンプルテキスト２',
      heding3: 'サンプルテキスト３',
      headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　',
      headingtext2: 'テキスト文章　テキスト文章　テキスト文章　テキスト文章　',
      headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
    },
    {
        id: '104',
        coverImage: './assets/img/phone-cover.jpg',
      name: 'Phone Special',
      price: 299,
      description: 'xxx',
      heding1: 'サンプルテキスト１',
      heding2: 'サンプルテキスト２',
      heding3: 'サンプルテキスト３',
      headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　',
      headingtext2: 'テキスト文章　テキスト文章　テキスト文章　テキスト文章　',
      headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
    }
  ];
  