const { Inventor } = require('../models')

const create = async (req, res) => {
  try {
    const inventor = await Inventor.create(req.body)
    res.status(200).json(inventor)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
}
