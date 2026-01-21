const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const accounts = {
    // Account 1: The Original
    "DolpGrace001": { 
        pin: "Ibrahim789", 
        name: "Dolp Grace",
        balance: 11075000.00, 
        txHistory: [
            { id: 1, amount: 525000, desc: 'Billionaire Pledge Injection' },
            { id: 2, amount: 550000, desc: 'Corporate Equity Matching' },
            { id: 1, amount: 1250000, desc: 'Sovereign Equity Reallocation' },
            { id: 2, amount: 950000, desc: 'Legacy Endowment Amortization' },
            { id: 3, amount: 750000, desc: 'Global Social Equity Dividend' },
            { id: 4, amount: 650000, desc: 'Venture Philanthropy Capital Call' },
            { id: 5, amount: 550000, desc: 'Cross-Border Humanitarian Flux' },
            { id: 6, amount: 450000, desc: 'Radical Innovation Seed Grant' },
            { id: 7, amount: 400000, desc: 'Climate Resilience Asset Transfer' }
        ]
    },
    // Account 2: The New Member
    "ShefcikJJ1": { 
        pin: "AmelialoveJJ", 
        name: "Shefcik John", 
        balance: 5000000.00, 
        txHistory: [
            { id: 1, amount: 525000, desc: 'Billionaire Pledge Injection' },
            { id: 2, amount: 550000, desc: 'Corporate Equity Matching' },
            { id: 3, amount: 925000, desc: 'Global Venture Liquidity Sync' },
            { id: 4, amount: 1250000, desc: 'Private Equity Reallocation' },
            { id: 5, amount: 750000, desc: 'Institutional Grant Funding' },
            { id: 6, amount: 650000, desc: 'Sovereign Wealth Distribution' },
            { id: 7, amount: 350000, desc: 'Legacy Endowment Credit' }
        ]
    }
};

app.post('/api/verify', (req, res) => {
    const { id, pin } = req.body;
    const user = accounts[id];

    if (user && user.pin === pin) {
        res.json({ 
            status: "success", 
            name: user.name, 
            balance: user.balance, 
            txHistory: user.txHistory 
        });
    } else {
        res.status(401).json({ status: "error", message: "Unauthorized" });
    }
});

app.listen(5000, () => console.log('EAK SECURE SERVER RUNNING ON PORT 5000'));