// For get all contacts
// Route get/api/contacts
const contact = require("../models/contactModels")
const expressAsyncHandler = require("express-async-handler");

const getContacts = expressAsyncHandler(async(req,res)=>{
    console.log("Shivani");
    const contacts = await contact.find();
    console.log("ji", contacts);
    res.status(200).send(contacts);
});

const createContact =expressAsyncHandler( async(req, res) => {
    const { name, id, email, address } = req.body;
    console.log(req.body);
    if(!name || !id || !email){
        res.status(400);
        throw new Error("All fields are not filled");
    }
    console.log("name, id, email, address", name, id, email, address)
    const contacts = await contact.create({
        name,
        email,
        id,
        address,
    })
    console.log(">>>>>", contacts)
    res.status(201).json(contacts);
});

const deleteContact = expressAsyncHandler(async (req, res) => {
    console.log(`Incoming ID: ${req.params.id}`);
    
    const customId = Number(req.params.id); // ✅ Convert to number
    console.log("Custom ID as number:", customId);
    
    const deleted = await contact.findOneAndDelete({ id: customId }); // ✅ Object with field name
    console.log("Deleted contact:", deleted);
    
    if (!deleted) {
        res.status(404);
        throw new Error("Contact not found");
    }

    res.status(200).json({ // ✅ Fixed typo
        message: "Contact deleted successfully",
        deletedContact: deleted
    });
});

const updateContact = expressAsyncHandler(async(req,res)=>{
    customId = Number(req.params.id);
    const updateTo = await contact.findOneAndUpdate({id:customId},req.body,{new: true, runValidators: true});
    res.status(200).send(updateTo);
    return getContacts(req,res);
})
const getContact = expressAsyncHandler(async(req,res)=>{
    const customId = Number(req.params.id);
    const singleContact = await contact.findOne({id:customId});
    res.status(200).send(singleContact);
})

module.exports = {getContacts, createContact, deleteContact, updateContact, getContact};