// There is no reason for the name here except as an
// example of how to set something for the POST
let name = [];

const hostIndex = (req, res) => {
  return res.render('index', {
    title: 'home',
    pageName: 'home page',
    username: name,
  });
};

const hostPage1 = (req, res) => {
  return res.render('page1', {
    title: 'page 1',
    names: ['1', '2', 'three'],
  });
};

const hostPage2 = (req, res) => {
  return res.render('page2');
};

const getName = (req, res) => {
  return res.json({name});
};

const setName = (req, res) => {
  if(!req.body.firstname || !req.body.lastname) {
    return res.status(400).json({
      error: 'firstname and last name are both required',
      id: 'setNameMissingParams',
    });
  }

  name = `${req.body.firstname} ${req.body.lastname}`;
  return res.status(200).json({name});
};

const notFound = (req, res) => {
  return res.render('notFound', {
    page: req.url,
  })
};

module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  getName,
  setName,
  notFound,
};
