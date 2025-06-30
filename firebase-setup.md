# Firebase Configuration Guide

To enable cloud synchronization with Firebase, follow these steps:

## 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name: `jungian-assessment`
4. Enable Google Analytics (optional)
5. Create project

## 2. Set up Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location for your database
5. Click "Done"

## 3. Get Configuration
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Web" icon to add a web app
4. Register app name: "Jungian Assessment Desktop"
5. Copy the configuration object

## 4. Update Application
Edit `src/main.js` and replace the firebaseConfig object:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

## 5. Security Rules (Optional)
For production, update Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /assessments/{document} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
    }
  }
}
```

## 6. Test Connection
1. Rebuild the application: `npm run build`
2. Start the app: `npm start`
3. Try saving results to cloud
4. Check Firebase Console for data

## Features Enabled
- Automatic cloud backup of assessment results
- Cross-device synchronization
- Assessment history in the cloud
- Secure anonymous authentication
- Real-time cloud status indicator
