chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "generateAIReply") {
        fetch('http://ai-email--writer-env.eba-mw62anzm.eu-north-1.elasticbeanstalk.com/api/email/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ emailContent: request.emailContent, tone: 'professional' })
        })
            .then(response => {
                if (!response.ok) throw new Error(`API Request Failed: ${response.statusText}`);
                return response.text();
            })
            .then(reply => {
                sendResponse({ reply: reply });
            })
            .catch(error => {
                console.error('Error in background script:', error);
                sendResponse({ error: error.message });
            });
        return true;
    }
});