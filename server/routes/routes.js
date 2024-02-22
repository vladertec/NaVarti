import express from "express"
import { check } from "express-validator"
import authenticMiddleware from "../middlewares/authenticMiddleware.js"
import roleMiddleware from "../middlewares/roleMiddleware.js"
import AuthenticController from "../controllers/authentic.js"
import CurrentFeeController from "../controllers/currentFee.js"
import CurrentReportController from "../controllers/currentReport.js"
import DonationDetailController from "../controllers/donationDetails.js"
import GalleryController from "../controllers/gallery.js"
import MakeRequestController from "../controllers/makeRequest.js"
import OurTeamController from "../controllers/ourTeam.js"
import QuestionController from "../controllers/question.js"
import TransferredThingController from "../controllers/transferredThings.js"

const router = express.Router()

router.post(
  "/registration",
  [
    check("username", "Name can`t be empty").notEmpty(),
    // check("username", "Name can`t be short").isLength({ min: 4, max: 10 }),
  ],
  AuthenticController.registration
)

router.post("/login", AuthenticController.login)

router.post("/logout", AuthenticController.logout)

//currentFee Component
router.get(
  "/currentFees",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  CurrentFeeController.getAll
)

router.post(
  "/currentFee",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  CurrentFeeController.addOne
)

router.delete(
  "/currentFee/:currentFeeId",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  CurrentFeeController.deleteOne
)

//currentReport Component
router.get(
  "/currentReports",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  CurrentReportController.getAll
)

router.post(
  "/currentReport",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  CurrentReportController.addOne
)

router.delete(
  "/currentFee/:currentReportId",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  CurrentReportController.deleteOne
)

//donationDetail Component
router.get(
  "/donationDetails",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  DonationDetailController.getAll
)

router.post(
  "/donationDetail",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  DonationDetailController.addOne
)

router.delete(
  "/donationDetail/:donationDetailId",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  DonationDetailController.deleteOne
)

//gallery Component
router.get(
  "/galleries",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  GalleryController.getAll
)

router.post(
  "/gallery",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  GalleryController.addOne
)

router.delete(
  "/gallery/:galleryId",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  GalleryController.deleteOne
)

//makeRequest Component
router.get(
  "/makeRequests",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  MakeRequestController.getAll
)

router.post(
  "/makeRequest",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  MakeRequestController.addOne
)

router.delete(
  "/makeRequest/:makeRequestId",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  MakeRequestController.deleteOne
)

//ourTeam Component
router.get(
  "/ourTeams",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  OurTeamController.getAll
)

router.post(
  "/ourTeam",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  OurTeamController.addOne
)

router.delete(
  "/ourTeam/:ourTeamId",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  OurTeamController.deleteOne
)

//question Component
router.get(
  "/questions",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  QuestionController.getAll
)

router.post(
  "/question",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  QuestionController.addOne
)

router.delete(
  "/question/:questionId",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  QuestionController.deleteOne
)

//transferredThings Component
router.get(
  "/transferredThings",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  TransferredThingController.getAll
)

router.post(
  "/transferredThing",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  TransferredThingController.addOne
)

router.delete(
  "/transferredThing/:transferredThingId",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  TransferredThingController.deleteOne
)

export default router
