# 🧳 Luggage Code Scanner

A lightweight web application that scans QR codes on luggage and fetches passenger and flight details from a connected Google Sheet via Google Apps Script.

![Luggage Scanner Preview](sgs.png)

---

## 🚀 Features
- 📸 **Live QR Code Scanning** (uses device camera)
- 📁 **Upload Image Support** for QR scanning
- 🌐 **Language Toggle**: English ↔️ Arabic
- 🌙 **Dark Mode** support
- 🔗 **Google Sheets Integration** via Apps Script
- 🧾 Displays:
  - Destination
  - Owner
  - Arrival Time

---

## 🔧 Tech Stack
- HTML + CSS + JavaScript
- [html5-qrcode](https://github.com/mebjas/html5-qrcode)
- Google Apps Script + Google Sheets
- GitHub Pages for hosting

---

## 📦 Installation & Usage

1. **Deploy Google Apps Script Web App**  
   - Copy the `Code.gs` script to your Google Sheet
   - Deploy it as a Web App with:
     - Execute as: **Me**
     - Access: **Anyone**
   - Copy the Web App URL and paste it in `index.html` (`apiUrl`)

2. **Host the Web App**
   - Upload `index.html` and `sgs.png` to GitHub
   - Enable GitHub Pages in repo settings
   - Visit your GitHub Pages URL

---

## 📂 Folder Structure

