# Christmas Card Label Printer

A web application for creating and printing address labels for holiday cards with MySQL database integration.

## Live Demo
🔗 [https://verson-tech.github.io/print-labels/](https://verson-tech.github.io/print-labels/)

## Features

- 🎄 **Multi-Holiday Support** - Christmas, Easter, 4th of July, Veteran's Day themes
- 🖨️ **Print Ready Labels** - A4 format with proper spacing for label sheets
- 📝 **CRUD Operations** - Add, edit, and delete recipients through the UI
- 🗄️ **MySQL Database** - Persistent data storage
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🎨 **Theme-Based UI** - Different color schemes for each holiday

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Dependencies**: mysql2, cors, dotenv

## Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd addresses
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up MySQL database**
```bash
mysql -u root -p < database.sql
```

4. **Configure environment variables**
```bash
cp .env.example .env
# Edit .env with your MySQL credentials
```

5. **Start the server**
```bash
npm start
```

6. **Open your browser**
```
http://localhost:3000
```

## Database Structure

The app uses a MySQL database named `christmas_cards` with two main tables:

### Recipients Table
```sql
CREATE TABLE recipients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(10) NOT NULL,
  zip VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Sender Table
```sql
CREATE TABLE sender (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(10) NOT NULL,
  zip VARCHAR(20) NOT NULL,
  label_count INT DEFAULT 20,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Usage

1. Select a holiday theme
2. Add recipients using the "Add Recipient" button
3. Edit or delete existing recipients as needed
4. Print recipient labels or sender labels
5. Labels are formatted for standard A4 label sheets

## API Endpoints

### Recipients
- `GET /api/recipients` - Get all recipients
- `POST /api/recipients` - Add new recipient
- `PUT /api/recipients/:id` - Update recipient
- `DELETE /api/recipients/:id` - Delete recipient

### Senders
- `GET /api/senders` - Get all senders
- `POST /api/senders` - Add new sender
- `PUT /api/senders/:id` - Update sender
- `DELETE /api/senders/:id` - Delete sender

## License

MIT License
