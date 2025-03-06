# Email Writer Assistant

AI-powered email reply generator for Gmail.

## Features
- Adds an "AI Reply" button to Gmail's compose window.
- Automatically generates professional email replies.
- Seamlessly integrates with Gmail.

## Installation

### 1. Download the Extension Files
- Go to the GitHub repository: [AI Email Writer Extension](https://github.com/JohnUfo/ai-email-writer-extension.git)
- Click the green `Code` button and select `Download ZIP`.
- Extract the ZIP file to a folder on your computer.

### 2. Load the Extension into Chrome
- Open Google Chrome and go to `chrome://extensions`.
- Enable `Developer mode` (toggle in the top-right corner).
- Click `Load unpacked` and select the extracted folder.

### 3. Pin the Extension
- Click the `Extensions` menu (puzzle icon) in Chrome.
- Find `Email Writer Assistant` and click the pin icon.

## Usage
1. Open Gmail in your browser.
2. Start composing or replying to an email.
3. Click the `AI Reply` button in the compose toolbar.
4. The extension will generate an AI-powered reply automatically.

## Development Setup
### Prerequisites
- Node.js (optional for backend API development)

### Running the Backend API
If using a local API:
1. Ensure you have a backend server running at `http://localhost:8080/api/email/generate`.
2. Modify `content.js` to point to the correct API endpoint if needed.

### Modifications
- Update `manifest.json` for permissions or additional features.
- Modify `content.js` to adjust the AI reply behavior.

## Troubleshooting
- **AI Reply button not appearing?** Try refreshing Gmail or restarting Chrome.
- **API not responding?** Ensure your backend is running and accessible.
- **Errors in console?** Open Developer Tools (`F12` -> Console) to check logs.

---

## Related Projects
- [Backend Repository](https://github.com/JohnUfo/ai-email-writer.git) (Required to run the extension)
- [Chrome Extension](https://github.com/JohnUfo/ai-email-writer-front.git) (frontend for the AI-powered Email Reply Generator)
### Contributions
Feel free to fork and submit pull requests to improve the extension!

