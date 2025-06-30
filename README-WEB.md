# Jungian Cognitive Function Assessment - Web Version

A comprehensive web-based psychological assessment tool based on Carl Jung's cognitive function theory, optimized for research interviews and data collection.

## 🌟 Features

- **Web-based Interface**: Works on any device with a browser
- **Bilingual Support**: English and Chinese (中文)
- **Participant Information Collection**: Optional demographic data collection
- **Real-time Progress Tracking**: Visual progress indicators
- **Automatic Data Collection**: Results saved to Firebase cloud database
- **Anonymous Option**: Participants can remain anonymous
- **Mobile Responsive**: Works on desktop, tablet, and mobile devices
- **Completion Tracking**: Unique completion IDs for each response

## 🚀 Quick Start for Interviews

### Option 1: Direct File Use
1. Send the `web-interview.html` file to participants
2. They can open it directly in any web browser (Chrome, Firefox, Safari, Edge)
3. No internet connection required for taking the assessment
4. Results are automatically saved when internet is available

### Option 2: Host Online
1. Upload `web-interview.html` and `questions.js` to any web hosting service
2. Share the URL with participants
3. Perfect for remote interviews

### Option 3: Local Network (In-person interviews)
```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)  
npx http-server

# Then share: http://your-ip-address:8000/web-interview.html
```

## 📊 Data Collection

- **Automatic Saving**: All responses automatically saved to Firebase
- **Participant Tracking**: Optional participant ID system
- **Completion Metrics**: Tracks completion time and progress
- **Export Options**: Download individual results as JSON
- **Privacy-First**: Anonymous participation supported

## 🔧 Setup for Researchers

### Firebase Configuration (Optional but Recommended)
The assessment is pre-configured with Firebase for data collection. To use your own database:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Update the Firebase config in `web-interview.html` (lines 282-289)
4. Set up Firestore security rules for data collection

### Accessing Collected Data
- View responses in Firebase Console > Firestore Database
- Export data as JSON or CSV
- Each response includes completion ID, timestamps, and full answers

## 📱 Usage Instructions for Participants

1. **Open the Assessment**: Click the provided link or open the HTML file
2. **Choose Language**: Select English or 中文
3. **Participant Info** (Optional): Enter ID, age, education level
4. **Take Assessment**: Answer 80 questions using 1-5 scale
5. **Review Results**: See your cognitive function profile
6. **Download Results**: Optional JSON export

## 🧠 Assessment Details

- **80 Questions**: 10 questions per cognitive function
- **8 Cognitive Functions**: Te, Ti, Fe, Fi, Se, Si, Ne, Ni
- **Time**: Approximately 15-20 minutes
- **Scoring**: 1-5 Likert scale (Strongly Disagree to Strongly Agree)
- **Results**: Percentage scores and dominant function identification

## 📋 File Structure

```
Jung8_software/
├── web-interview.html      # Main assessment application
├── questions.js            # Question database (EN/CN)
├── firebase-setup.md       # Firebase configuration guide
└── README.md              # This file
```

## 🔒 Privacy & Ethics

- **Informed Consent**: Participants know data is being collected
- **Anonymous Option**: No personal information required
- **Secure Storage**: Data encrypted in Firebase
- **Research Use**: Designed for academic/research purposes
- **Completion IDs**: Track responses without personal identifiers

## 💡 Researcher Tips

### For Large-Scale Studies
- Use participant IDs for linking to other data
- Set up Firebase analytics for response tracking
- Consider random question ordering (modify questions.js)
- Implement attention check questions if needed

### For Clinical Use
- Review results with qualified professionals
- Use as supplementary tool, not diagnostic
- Consider cultural factors in interpretation
- Document assessment conditions

## 🛠️ Customization

### Adding Questions
Edit `questions.js` to add/modify questions:
```javascript
{
    id: 81,
    text: "Your question here",
    function: "Te", // or Ti, Fe, Fi, Se, Si, Ne, Ni
    language: "en"
}
```

### Styling
Modify CSS within `web-interview.html` for custom branding

### Languages
Add new language translations in `questions.js`

## 📄 Citation

If using for research, please cite:
```
Jungian Cognitive Function Assessment - Web Version
CAVELAB, 2025
Based on Carl Jung's Cognitive Function Theory
```

## 🤝 Support

For questions about setup, customization, or research use:
- Check `firebase-setup.md` for database configuration
- Review browser console for technical issues
- Ensure questions.js is properly loaded

## 📈 Analytics

The assessment automatically tracks:
- Completion rates
- Time per question
- Drop-off points
- Technical information (browser, screen size)
- Response patterns

---

**Perfect for:** Research studies, personality assessments, psychological interviews, academic research, career counseling, team building exercises.
