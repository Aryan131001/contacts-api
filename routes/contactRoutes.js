const express = require("express")

const router = express.Router();
const {
    getContacts,
    deleteContact,
    createContact,
    updateContact,
    getContact
} = require("../controllers/contactController");

router.route("/").get(getContacts)
// router.route("/show-contact").get(getContact);
router.route("/:id").delete(deleteContact).put(updateContact).get(getContact);
router.route("/create").post(createContact);
router.route("/update/:id").put(updateContact);



module.exports = router; 