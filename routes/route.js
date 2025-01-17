const express=require('express')
const { UserCreate, } = require('../controllers/User')
const UserLogin = require('../controllers/UserLogin')
// const viewDetails = require('../controllers/viewDetails')
const deleteDataTostore = require('../controllers/deleteStoreData')
const categoryStore = require('../controllers/categoryStore')
const getCategoryList = require('../controllers/getcategoryList')
const categoryUpdate = require('../controllers/Categoryupadet')
const deleteCategory = require('../controllers/deleteCategory')
const manageStore = require('../controllers/createmanageStore')
const manageStorelist = require('../controllers/getManageStorelist')
const deletemanagestore = require('../controllers/deleteManageStore')
const OrderControllers = require('../controllers/manageorder/createNewOrder')
const getorderList = require('../controllers/manageorder/getOrderlist')
const deleteOrder = require('../controllers/manageorder/deleteOredr')
const AppControllers = require('../controllers/appuser/appUser')
const somestoreController = require('../controllers/someStoreController')
const viewDetailStoreModel = require('../controllers/viewDetailStoreModel')
const getallUserList = require('../controllers/appuser/getallAppUser')
const createdeliveryControllers = require('../controllers/deliveryStaff/createdelivery')
const deliveryList = require('../controllers/deliveryStaff/getDeliverylist')
const deletedelivery = require('../controllers/deliveryStaff/deletedelivery')
const deliveryUpdate = require('../controllers/deliveryStaff/updateDelivery')




const router=express.Router()

router.post('/create',UserCreate)
router.post('/login',UserLogin)


// store model 

router.post('/createstoredata',somestoreController)
router.get('/viewdetails/:_id',viewDetailStoreModel)

router.delete('/deleteStoreData/:_id',deleteDataTostore)
router.post('/createcategory',categoryStore)

router.delete('/deleteCategory/:_id',deleteCategory)
router.get('/getallcategory',getCategoryList)
router.put('/updatedcategory/:_id',categoryUpdate)


router.post('/createManageStote',manageStore)
router.get('/getManageStote',manageStorelist)
router.delete('/deleteManageStote/:_id',deletemanagestore)


router.post('/createOrder',OrderControllers)
router.get('/getOrderlist',getorderList)
router.delete('/deleteorder/:_id',deleteOrder)

router.post('/createAppUser',AppControllers)
router.get('/getallAppUser',getallUserList)


router.post('/createdelivery',createdeliveryControllers)
router.get('/getalldelivery',deliveryList)
router.delete('/deletedelivery',deletedelivery)
router.put('/updatedelivery',deliveryUpdate)







module.exports=router