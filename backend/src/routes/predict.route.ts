import express from 'express';

const router = express.Router();

// AI Prediction Stub
router.post('/', async (req, res) => {
  const { title, location, description } = req.body;

  // 🚧 Replace this with real ML model later
  const highRiskKeywords = ['fire', 'gun', 'theft', 'explosion', 'armed'];
  const isHighRisk = highRiskKeywords.some((word) =>
    `${title} ${description}`.toLowerCase().includes(word)
  );

  const prediction = {
    riskLevel: isHighRisk ? 'high' : 'low',
    confidence: isHighRisk ? 0.91 : 0.4,
    recommendedAction: isHighRisk ? 'Notify authorities immediately' : 'Monitor',
  };

  res.json({ prediction });
});

export default router;

