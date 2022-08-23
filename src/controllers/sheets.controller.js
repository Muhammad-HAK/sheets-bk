const { SheetsService } = require('../services')

const getSheets = async (req, res, next) => {
  try {
    const response = await SheetsService.getSheets()
    res.json(response)
    next()
  } catch(e) {
    console.log(e.message)
    res.status(500).json({error: true, status: 500, message: 'Error while fetching sheets!'})
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
    res.status(500).json({error: true, status: 500, message: 'Error while fetching sheet!'})
  }
}

const getSheetsByUser = async (req, res, next) => {
  const id = req.query.id;
  try {
    const [ ownedSheets, sharedSheets ] = await Promise.all([
      SheetsService.getSheetsByUser(id),
      SheetsService.getSheetsSharedToUser(id)
    ])
    res.json([...ownedSheets, ...sharedSheets])
    next()
  } catch(e) {
    console.log(e.message)
    res.status(500).json({error: true, status: 500, message: 'Error while fetching sheets by user!'})
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
    res.status(500).json({error: true, status: 500, message: 'Error while creating sheet!'})
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
    res.status(500).json({error: true, status: 500, message: 'Error while updating sheet!'})
  }
}

const assignSheet = async (req, res, next) => {
  const sheetId = req.query.sheetId;
  const assigneeId = req.query.assigneeId;
  try {
    const response = await SheetsService.assignSheet(sheetId, assigneeId)
    res.json(response)
    next()
  } catch(e) {
    console.log(e.message)
    res.status(500).json({error: true, status: 500, message: 'Error while assignment!'})
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
    res.status(500).json({error: true, status: 500, message: 'Error while updating headers!'})
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
    res.status(500).json({error: true, status: 500, message: 'Error while updating data!'})
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
    res.status(500).json({error: true, status: 500, message: 'Error while updating sheet name!'})
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
    res.status(500).json({error: true, status: 500, message: 'Error while deleting sheet!'})
  }
}

module.exports = {
  getSheets,
  getSheet,
  createSheet,
  updateSheet,
  assignSheet,
  updateSheetHeader,
  updateSheetData,
  updateSheetName,
  deleteSheet,
  getSheetsByUser,
}