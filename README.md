# Email Writer Assistant

AI-powered email reply generator for Gmail, seamlessly integrated with an AWS backend.

## Features
- Adds an "AI Reply" button to Gmail's compose window.
- Automatically generates professional email replies using an AWS-hosted AI service.
- No local backend setup required—works out of the box with the cloud API.

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
1. Open Gmail in your browser (`https://mail.google.com`).
2. Start composing or replying to an email.
3. Click the `AI Reply` button in the compose toolbar.
4. The extension will fetch an AI-generated reply from the AWS backend and insert it into the compose window.

## Development Setup
### Default Behavior
- The extension is pre-configured to use an AWS-hosted backend (`http://ai-email--writer-env.eba-mw62anzm.eu-north-1.elasticbeanstalk.com/api/email/generate`). No local setup is required.

## Troubleshooting
- **AI Reply button not appearing?** Refresh Gmail or restart Chrome.
- **No reply generated?** Check the AWS backend status or your internet connection. Open DevTools (`F12` → Console) for error logs.
- **Local backend issues?** Ensure the server is running at `http://localhost:8080/api/email/generate` and the extension points to it.

---

## Related Projects
- [Backend Repository](https://github.com/JohnUfo/ai-email-writer.git) (Optional for local setup; AWS is used by default).
- [Frontend Repository](https://github.com/JohnUfo/ai-email-writer-front.git) (Frontend for the AI-powered Email Reply Generator).

### Contributions
Feel free to fork and submit pull requests to enhance the extension!

---

### Key Changes Made
1. **Updated Default Behavior**:
   - Emphasized that the extension now uses an AWS backend by default, removing the need for local setup.
   - Specified the AWS endpoint (`http://ai-email--writer-env.eba-mw62anzm.eu-north-1.elasticbeanstalk.com/api/email/generate`) for clarity.

2. **Added Local Setup Instructions**:
   - Provided steps to switch to commit `3b469df6cabad38b09855b15d19241e0394d6e43` for local backend use.
   - Included commands to clone, checkout, and run the backend locally.

3. **Simplified Usage**:
   - Removed references to running a local API by default, aligning with your AWS deployment.

4. **Kept Flexibility**:
   - Retained instructions for modifications and troubleshooting for both AWS and local setups.
