import express from 'express';
import { findAllUsers, addRecentConversation } from '../lib/user';


let router = express.Router();

router.get('/listAll', async (req, res) => {
    try {
        const data = await findAllUsers();
        res.json(data);
    } catch (err) {
        res.send('error');
    }
    
});

router.post('/addRecentConversation', async (req, res) => {
    
    let data = req.body;
    console.log(data);
    try {
        const result = await addRecentConversation(data.userId, data.conversation);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.send('error');
    }
    
});
module.exports = router;