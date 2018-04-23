import express from 'express';
import { createConversation } from '../lib/conversation';

let router = express.Router();

router.post('/create', (req, res) => {
    let data = req.body;
    console.log(data);
});
module.exports = router;