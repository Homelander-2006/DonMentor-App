# API Documentation

## DonMentor Backend API

Base URL: `https://donmentor-backend.onrender.com`

All requests require authentication via Firebase ID token.

---

## Authentication

Include Firebase ID token in request headers:

```bash
Authorization: Bearer {firebase_id_token}
```

Get token from Firebase Auth:
```javascript
const user = firebase.auth().currentUser;
const token = await user.getIdToken();
```

---

## Endpoints

### **Conversations**

#### **POST /api/conversations**
Save a conversation.

**Request:**
```json
{
  "conversationId": "conv_1234567890",
  "messages": [
    {
      "sender": "user",
      "content": "How do I ask for a raise?",
      "timestamp": 1702222000000
    },
    {
      "sender": "don",
      "content": "You ask plainly...",
      "timestamp": 1702222010000
    }
  ],
  "personaSettings": {
    "tone": "balanced",
    "politeness": 50,
    "familyMetaphors": true,
    "memoryEnabled": true
  },
  "timestamp": 1702222000000
}
```

**Response:**
```json
{
  "success": true,
  "conversationId": "conv_1234567890"
}
```

---

#### **GET /api/conversations**
Get all conversations for user.

**Response:**
```json
{
  "conv_1234567890": {
    "messages": [...],
    "personaSettings": {...},
    "timestamp": 1702222000000,
    "lastModified": 1702222010000
  },
  "conv_9876543210": {
    ...
  }
}
```

---

#### **GET /api/conversations/:id**
Get specific conversation.

**Response:**
```json
{
  "messages": [...],
  "personaSettings": {...},
  "timestamp": 1702222000000,
  "lastModified": 1702222010000
}
```

---

### **Persona Settings**

#### **POST /api/persona-settings**
Save persona settings.

**Request:**
```json
{
  "tone": "balanced",
  "politeness": 50,
  "familyMetaphors": true,
  "memoryEnabled": true
}
```

**Response:**
```json
{
  "success": true
}
```

---

#### **GET /api/persona-settings**
Get persona settings.

**Response:**
```json
{
  "tone": "balanced",
  "politeness": 50,
  "familyMetaphors": true,
  "memoryEnabled": true,
  "lastModified": 1702222000000
}
```

---

### **Files**

#### **POST /api/files**
Save file metadata.

**Request:**
```json
{
  "fileId": "file_abc123",
  "name": "resume.pdf",
  "type": "application/pdf",
  "size": 245612,
  "conversationId": "conv_1234567890"
}
```

**Response:**
```json
{
  "success": true,
  "fileId": "file_abc123"
}
```

---

### **Health**

#### **GET /health**
Check API status.

**Response:**
```json
{
  "status": "ok",
  "timestamp": 1702222000000
}
```

---

## Error Handling

### **401 Unauthorized**
```json
{
  "error": "No token"
}
```

**Fix:** Include valid Firebase ID token in `Authorization` header

### **500 Server Error**
```json
{
  "error": "Error message"
}
```

**Fix:** Check Firebase credentials, database connection, and logs

---

## Rate Limiting

- No strict rate limits (adjust as needed)
- Recommended: Max 100 requests/minute per user

---

## CORS

Configured to accept requests from:
- `https://donmentor.vercel.app`
- `http://localhost:3000` (development)

Update `CORS_ORIGIN` in `.env` to add more origins.

---

## Example: Save Conversation

```javascript
const API_URL = 'https://donmentor-backend.onrender.com';

async function saveConversation(conversationData) {
  const user = firebase.auth().currentUser;
  const token = await user.getIdToken();

  const response = await fetch(`${API_URL}/api/conversations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(conversationData)
  });

  const result = await response.json();
  console.log('Saved:', result);
}
```

---

## Example: Get All Conversations

```javascript
async function getConversations() {
  const user = firebase.auth().currentUser;
  const token = await user.getIdToken();

  const response = await fetch(`${API_URL}/api/conversations`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const conversations = await response.json();
  console.log('Conversations:', conversations);
}
```

---

## Database Schema

### **users/{userId}/conversations/{convId}**
```json
{
  "messages": [
    {
      "sender": "user|don",
      "content": "string",
      "timestamp": "number"
    }
  ],
  "personaSettings": {
    "tone": "polite|balanced|stern",
    "politeness": "0-100",
    "familyMetaphors": "boolean",
    "memoryEnabled": "boolean"
  },
  "timestamp": "number",
  "lastModified": "number"
}
```

### **users/{userId}/personaSettings**
```json
{
  "tone": "polite|balanced|stern",
  "politeness": "0-100",
  "familyMetaphors": "boolean",
  "memoryEnabled": "boolean",
  "lastModified": "number"
}
```

### **users/{userId}/files/{fileId}**
```json
{
  "name": "string",
  "type": "string",
  "size": "number",
  "conversationId": "string",
  "timestamp": "number"
}
```

---

## Testing

### **With cURL**

```bash
# Health check
curl https://donmentor-backend.onrender.com/health

# Get conversations (requires token)
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://donmentor-backend.onrender.com/api/conversations

# Save conversation (requires token)
curl -X POST \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"conversationId":"test","messages":[],"personaSettings":{}}' \
  https://donmentor-backend.onrender.com/api/conversations
```

### **With Postman**

1. Import API collection
2. Set `Bearer Token` in Authorization
3. Test endpoints

---

## Support

- 📖 See [DEPLOYMENT.md](DEPLOYMENT.md) for setup
- 🐛 Report issues on GitHub
- 💬 Ask questions in discussions
