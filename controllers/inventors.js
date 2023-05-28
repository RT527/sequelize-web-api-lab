const { Inventor } = require('../models')

const create = async (req, res) => {
  try {
    const inventor = await Inventor.create(req.body)
    res.status(200).json(inventor)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const inventors = await Inventor.findAll()
    res.status(200).json(inventors)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const inventor = await Inventor.update(
      req.body,
      { where: { id: req.params.inventorId }, returning: true }
    )
    res.status(200).json(inventor)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
}