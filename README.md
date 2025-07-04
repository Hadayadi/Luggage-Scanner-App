# Luggage QR Scanner

A web-based luggage scanner that reads QR codes and fetches data from Google Sheets using Google Apps Script.

## How It Works

- Scan a QR code using your camera or upload an image.
- The code is sent to a deployed Apps Script.
- The script looks up luggage data from a Google Sheet and returns it.

## Deployment

1. **Google Sheet Setup**
   - Add luggage data in a Sheet.
   - First column must be the luggage `code`.

2. **Apps Script**
   - Create a new Apps Script project.
   - Paste code from `apps-script/Code.gs`.
   - Deploy it as a Web App (Deploy > Web App).
   - Set access to **Anyone**.

3. **Frontend**
   - Open `index.html` in any browser or host it (e.g., GitHub Pages).
   - Replace `backendUrl` with your deployed Apps Script link.

## License
MIT
