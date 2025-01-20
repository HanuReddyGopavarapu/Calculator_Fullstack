const express = require('express');
const router = express.Router();
const Calculation = require('../models/calculations');

// Save a calculation
router.post('/', async (req, res) => {
    const { expression, result } = req.body;
    try {
        const newCalculation = new Calculation({ expression, result });
        await newCalculation.save();
        res.status(201).json(newCalculation);
    } catch (error) {
        res.status(500).json({ error: 'Failed to save calculation' });
    }
});

// Get all calculations
router.get('/', async (req, res) => {
    try {
        const calculations = await Calculation.find().sort({ createdAt: -1 });
        res.status(200).json(calculations);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch calculations' });
    }
});

module.exports = router;
