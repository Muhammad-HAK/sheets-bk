const express = require('express')
const router = express.Router()
const { SheetsController } = require('../controllers');

router.get('/get', protect, SheetsController.getSheets)
router.get('/get-by-id', protect, SheetsController.getSheet)
router.post('/create', protect, SheetsController.createSheet)
router.put('/update', protect, SheetsController.updateSheet)
router.put('/update-header', protect, SheetsController.updateSheetHeader)
router.put('/update-data', protect, SheetsController.updateSheetData)
router.put('/update-name', protect, SheetsController.updateSheetName)
router.delete('/delete', protect, SheetsController.deleteSheet)

module.exports = {
    router
}