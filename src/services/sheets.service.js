const { SheetsDb } = require('../db')
const Utils = require('../utils')

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
const assignSheet = async (sheetId, assigneeId) => {
  try {
    const sheet = await SheetsDb.getSheet(sheetId)
    const members = sheet.members || [];
    members.push(Utils.stringToMongoObj(assigneeId));
    sheet.members = members;
    return await SheetsDb.updateSheet(sheetId, sheet)
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
const getSheetsByUser = async (userId) => {
  try {
    return await SheetsDb.getSheetsByUser(userId)
  } catch(e) {
    throw new Error(e.message)
  }
}
const getSheetsSharedToUser = async (userId) => {
  try {
    return await SheetsDb.getSheetsSharedToUser(userId)
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
  getSheetsByUser,
  getSheetsSharedToUser,
  assignSheet,
}