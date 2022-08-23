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

const getSheetsByUser = async (userId) => {
    const isValid = Utils.isObjectId(userId);
    const targetId = isValid ? userId : Utils.stringToMongoObj(userId);
    return await SheetsModel.find({creatorId: targetId});
}

const getSheetsSharedToUser = async (userId) => {
    const isValid = Utils.isObjectId(userId);
    const targetId = isValid ? userId : Utils.stringToMongoObj(userId);
    return await SheetsModel.find({members: targetId});
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
    getSheetsByUser,
    getSheetsSharedToUser
  }