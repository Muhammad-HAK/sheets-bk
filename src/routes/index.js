const express = require('express')

const { SheetsController } = require('../controllers');

const router = express.Router()

router.get('/get', SheetsController.getSheets)
router.get('/get-by-id', SheetsController.getSheet)
router.post('/create', SheetsController.createSheet)
router.put('/update', SheetsController.updateSheet)
router.put('/update-header', SheetsController.updateSheetHeader)
router.put('/update-data', SheetsController.updateSheetData)
router.put('/update-name', SheetsController.updateSheetName)
router.delete('/delete', SheetsController.deleteSheet)

module.exports = {
    router
}