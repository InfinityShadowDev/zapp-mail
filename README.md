# ⚡ ZappMail

ZappMail is a lightning-fast, developer-focused bulk email sending tool built with **Node.js**, **Express**, and **Nodemailer**. Designed for **controlled, reliable delivery** of individual emails — without using third-party mailing services or bloated CRM platforms.

Perfect for startups, internal tools, or campaigns where **you control the SMTP** and want to send email smartly, one recipient at a time.

---

## 🚀 Project Overview

**ZappMail** allows you to:

- Accept a subject, message, and recipient list via a web form.
- Send **individual** emails to each recipient (no CC/BCC exposure).
- Implement a **rate limit** (e.g., 2 seconds between emails) to avoid triggering spam filters.
- Log each email’s success or failure.
- Retry sending on failure with a defined threshold.
- Easily integrate with any React frontend.

---

## 🛠 Key Features

- ✅ Built with Node.js, Express, and Nodemailer  
- ✉️ Sends personalized, individual emails  
- 🕒 2-second delay between sends (configurable)  
- 🔒 Secure SMTP support (Gmail / SendGrid compatible)  
- 🧠 Retry mechanism on failure  
- 📝 HTML and plain-text email content supported  
- 📊 Logging of each email status (success/failure)  
- 🧪 Simple React-based form included  
- 📦 Lightweight, no dependencies on external email services  
- 🔧 Easily extendable (e.g., CSV upload, templates)

---

## ⚙️ Installation

```bash
git clone https://github.com/InfinityShadowDev/zapp-mail-client.git
cd zappmail
npm install
````

---

## 🧪 How It Works

1. The **frontend form** captures:

   * Subject
   * Message (HTML supported)
   * List of emails (comma or newline-separated)

2. The backend:

   * Parses the email list
   * Sends each email **individually**
   * Waits `RATE_LIMIT_MS` between sends
   * Logs each result
   * Retries failed sends up to `RETRY_LIMIT` times

3. Logs are printed to the console and optionally saved (extendable).

---

## ▶️ Running the App

```bash
npm run start
```

The backend will run at `http://localhost:8080`.

---

## 📦 Future Improvements

* 🧩 CSV upload and parsing
* 👤 Recipient personalization
* 📋 UI dashboard with progress bar
* 📊 MongoDB logging or file-based report generation
* 📧 Attachment support

---

## 🪪 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🧠 Made for Developers Who Want Control

ZappMail was built for those who prefer to handle bulk email **without handing over everything to third-party tools**. With flexibility, speed, and transparency in mind, ZappMail gives you full control over how, when, and to whom your emails are sent — one zapp at a time ⚡.
