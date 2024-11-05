const express = require('express')
const router = express.Router()

// the route we created is how can i get the route
const shortURL = require('../models/urlSchema')

//router is use so that we dont have to write the render statement everytime 

router.get('/', async (req, res) => {

  //show the data
  const shorturls = await shortURL.find();

  res.render('index', { shorturls: shorturls })
})

//now the post methhod to route the 'Full'
router.post('/shortUrls', async (req, res) => {
  //now we will save this
  const url = req.body.full
  const newShortUrl = new shortURL({
    full: url
  })
  await newShortUrl.save()
  //console.log('ShortId created', newShortUrl);
  res.redirect('/')

})


//click on short link now and get the link of same as full link
router.get('/:shortUrl', async (req, res) => {
  const shortUrl = await shortURL.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) {
    return res.sendStatus(404);
  }
  await shortUrl.clicks++;
  shortUrl.save()
  res.redirect(shortUrl.full);
})

//we will work on delete button

router.get('/delete/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await shortURL.deleteOne({ _id: id })
    //console.log('delete');
    
    res.redirect('/')

  } catch (err) {
    console.log(err);

  }
})

module.exports = router;