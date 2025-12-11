// DonMentor Backend - Node.js + Express + Firebase
// Deploy to: Vercel, Render, or AWS Lambda

const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

const db = admin.database();

// Authentication Middleware
const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.userId = decodedToken.uid;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Save conversation
app.post('/api/conversations', authenticateUser, async (req, res) => {
  try {
    const { conversationId, messages, personaSettings, timestamp } = req.body;
    
    await db.ref(`users/${req.userId}/conversations/${conversationId}`).set({
      messages,
      personaSettings,
      timestamp,
      lastModified: Date.now()
    });
    
    res.json({ success: true, conversationId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all conversations
app.get('/api/conversations', authenticateUser, async (req, res) => {
  try {
    const snapshot = await db.ref(`users/${req.userId}/conversations`).once('value');
    const conversations = snapshot.val() || {};
    res.json(conversations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get specific conversation
app.get('/api/conversations/:id', authenticateUser, async (req, res) => {
  try {
    const snapshot = await db.ref(`users/${req.userId}/conversations/${req.params.id}`).once('value');
    res.json(snapshot.val());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Save persona settings
app.post('/api/persona-settings', authenticateUser, async (req, res) => {
  try {
    const { tone, politeness, familyMetaphors, memoryEnabled } = req.body;
    
    await db.ref(`users/${req.userId}/personaSettings`).set({
      tone,
      politeness,
      familyMetaphors,
      memoryEnabled,
      lastModified: Date.now()
    });
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get persona settings
app.get('/api/persona-settings', authenticateUser, async (req, res) => {
  try {
    const snapshot = await db.ref(`users/${req.userId}/personaSettings`).once('value');
    res.json(snapshot.val() || {});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Save file metadata
app.post('/api/files', authenticateUser, async (req, res) => {
  try {
    const { fileId, name, type, size, conversationId } = req.body;
    
    await db.ref(`users/${req.userId}/files/${fileId}`).set({
      name,
      type,
      size,
      conversationId,
      timestamp: Date.now()
    });
    
    res.json({ success: true, fileId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`DonMentor Backend running on port ${PORT}`);
});
