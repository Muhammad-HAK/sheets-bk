const { SheetsModel } = require('../models')
const Utils = require('../utils');

const createSheet = async (content) => {
    const res = await SheetsModel.create(content);
    return res;
}

const updateSheet = async (sheetId, content) => {
    const isValid = Utils.isObjectId(sheetId);
    const targetId = isValid ? sheetId : Utils.stringToMongoObj(sheetId);
    return await SheetsModel.findByIdAndUpdate(targetId, content);
}

const updateSheetHeader = async (sheetId, content) => {
    const isValid = Utils.isObjectId(sheetId);
    const targetId = isValid ? sheetId : Utils.stringToMongoObj(sheetId);
    return await SheetsModel.findByIdAndUpdate({ _id : targetId }, {$set : { header: content }}, {new: true});
}

const updateSheetData = async (sheetId, content) => {
    const isValid = Utils.isObjectId(sheetId);
    const targetId = isValid ? sheetId : Utils.stringToMongoObj(sheetId);
    return await SheetsModel.findByIdAndUpdate({ _id : targetId }, {$set : { data: content }}, {new: true});
}

const updateSheetName = async (sheetId, content) => {
    const isValid = Utils.isObjectId(sheetId);
    const targetId = isValid ? sheetId : Utils.stringToMongoObj(sheetId);
    return await SheetsModel.findByIdAndUpdate({ _id : targetId }, {$set : { name: content }}, {new: true});
}

const deleteSheet = async (sheetId) => {
    const isValid = Utils.isObjectId(sheetId);
    const targetId = isValid ? sheetId : Utils.stringToMongoObj(sheetId);
    return await SheetsModel.findByIdAndDelete(targetId);
}

const getSheets = async () => {
    return await SheetsModel.find({});
}

const getSheet = async (sheetId) => {
    const isValid = Utils.isObjectId(sheetId);
    const targetId = isValid ? sheetId : Utils.stringToMongoObj(sheetId);
    return await SheetsModel.findById(targetId);
}
  
  module.exports = {
    createSheet,
    updateSheet,
    updateSheetHeader,
    updateSheetData,
    updateSheetName,
    deleteSheet,
    getSheets,
    getSheet,
  }