const express = require('express');

const Hubs = require('./hubs-model.js');

const router = express.Router();


//any url that begins with /api/hubs

//same as /api/hubs
router.get('/', (req, res) => {
    Hubs.find(req.query)
        .then(hubs => {
            res.status(200).json(hubs);
            console.log(hubs);
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                message: 'Error retrieving the hubs',
            });
        });
});
//same as /api/hubs/:id
router.get('/:id', (req, res) => {
    Hubs.findById(req.params.id)
        .then(hub => {
            if (hub) {
                res.status(200).json(hub);
            } else {
                res.status(404).json({ message: 'Hub not found' });
            }
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                message: 'Error retrieving the hub',
            });
        });
});
//same as /api/hubs
router.post('/', (req, res) => {
    Hubs.add(req.body)
        .then(hub => {
            res.status(201).json(hub);
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                message: 'Error adding the hub',
            });
        });
});
//same as /api/hubs/:id
router.delete('/:id', (req, res) => {
    Hubs.remove(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: 'The hub has been nuked' });
            } else {
                res.status(404).json({ message: 'The hub could not be found' });
            }
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                message: 'Error removing the hub',
            });
        });
});
//same as /api/hubs/:id
router.put('/:id', (req, res) => {
    const changes = req.body;
    Hubs.update(req.params.id, changes)
        .then(hub => {
            if (hub) {
                res.status(200).json(hub);
            } else {
                res.status(404).json({ message: 'The hub could not be found' });
            }
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                message: 'Error updating the hub',
            });
        });
});

//add an endpoint that returns all the message for a hub
router.get('/:id/messages', (req, res) => {
    Hubs.findHubMessages(req.params.id).then(messages => {
        res.status(200).json(messages);
    }).catch(err => {
        res.status(500).json({ message: 'error getting messages' });
    });
});

//export default router
module.exports = router;