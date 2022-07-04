const { SheetsService } = require('../services')

const getSheets = async (req, res, next) => {
  try {
    const response = await SheetsService.getSheets()
    res.json(response)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

const getSheet = async (req, res, next) => {
    const id = req.query.id;
  try {
    const response = await SheetsService.getSheet(id)
    res.json(response)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

const createSheet = async (req, res, next) => {
  const content = req.body
  try {
    const response = await SheetsService.createSheet(content)
    res.json(response)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

const updateSheet = async (req, res, next) => {
  const id = req.query.id;
  const content = req.body;
  try {
    const response = await SheetsService.updateSheet(id, content)
    res.json(response)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

const updateSheetHeader = async (req, res, next) => {
  const id = req.query.id;
  const content = req.body;
  try {
    const response = await SheetsService.updateSheetHeader(id, content)
    res.json(response)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

const updateSheetData = async (req, res, next) => {
  const id = req.query.id;
  const content = req.body;
  try {
    const response = await SheetsService.updateSheetData(id, content)
    res.json(response)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

const updateSheetName = async (req, res, next) => {
  const id = req.query.id;
  const content = req.body.name;
  try {
    const response = await SheetsService.updateSheetName(id, content)
    res.json(response)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

const deleteSheet = async (req, res, next) => {
    const id = req.query.id;
  try {
    const response = await SheetsService.deleteSheet(id)
    res.json(response)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

module.exports = {
  getSheets,
  getSheet,
  createSheet,
  updateSheet,
  updateSheetHeader,
  updateSheetData,
  updateSheetName,
  deleteSheet,
}