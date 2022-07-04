const { SheetsDb } = require('../db')

const createSheet = async (content) => {
  try {
    return await SheetsDb.createSheet(content)
  } catch(e) {
    throw new Error(e.message)
  }
}
const updateSheet = async (id, content) => {
  try {
    return await SheetsDb.updateSheet(id, content)
  } catch(e) {
    throw new Error(e.message)
  }
}
const updateSheetHeader = async (id, content) => {
  try {
    return await SheetsDb.updateSheetHeader(id, content)
  } catch(e) {
    throw new Error(e.message)
  }
}
const updateSheetData = async (id, content) => {
  try {
    return await SheetsDb.updateSheetData(id, content)
  } catch(e) {
    throw new Error(e.message)
  }
}
const updateSheetName = async (id, content) => {
  try {
    return await SheetsDb.updateSheetName(id, content)
  } catch(e) {
    throw new Error(e.message)
  }
}
const deleteSheet = async (sheetId) => {
  try {
    return await SheetsDb.deleteSheet(sheetId)
  } catch(e) {
    throw new Error(e.message)
  }
}
const getSheet = async (sheetId) => {
  try {
    return await SheetsDb.getSheet(sheetId)
  } catch(e) {
    throw new Error(e.message)
  }
}
const getSheets = async () => {
  try {
    return await SheetsDb.getSheets()
  } catch(e) {
    throw new Error(e.message)
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