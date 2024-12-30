# B2B On-Campus Platform

This repository contains the codebase for a comprehensive B2B platform connecting colleges, students, and companies for modern job placements and skill development. The platform is built using Django for the backend, Flutter for mobile applications, and React.js for the web frontend.

## Features

- **Company and College Collaboration:** Streamlined interaction between companies and colleges for job placements.
- **Student Development:** Skill assessment, courses, and training modules to prepare students for corporate demands.
- **Job Placements:** Seamless job posting, application tracking, and placement processes.
- **Admin Dashboard:** Comprehensive dashboard for managing users, jobs, and analytics.
- **Cross-Platform Support:** Accessible via web and mobile applications.

## Tech Stack

- **Backend:** Django, Django REST Framework
- **Frontend (Web):** React.js
- **Frontend (Mobile):** Flutter
- **Database:** PostgreSQL
- **Authentication:** JWT-based authentication for secure access

## Requirements

- Python 3.8 or later
- Node.js 14.0 or later
- Flutter 3.0 or later
- PostgreSQL 12.0 or later

## Installation

### Backend (Django)

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/b2b-platform.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd b2b-platform/backend
   ```
3. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate # On Windows: venv\Scripts\activate
   ```
4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. Set up the database:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
6. Run the development server:
   ```bash
   python manage.py runserver
   ```

### Frontend (React.js)

1. Navigate to the frontend directory:
   ```bash
   cd b2b-platform/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Mobile (Flutter)

1. Navigate to the mobile directory:
   ```bash
   cd b2b-platform/mobile
   ```
2. Install dependencies:
   ```bash
   flutter pub get
   ```
3. Run the application:
   ```bash
   flutter run
   ```

## Configuration

- **Backend Configuration:** Update environment variables in the `.env` file for database connection, secret keys, etc.
- **Frontend Configuration:** Set the API endpoints in the `src/config.js` file.
- **Mobile Configuration:** Update API endpoints in the `lib/constants/api.dart` file.

## Contributing

We welcome contributions from the community! To contribute:

1. Fork this repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request detailing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to the Django, React.js, and Flutter communities for their excellent tools and resources.
- Special thanks to all contributors who have helped improve this project.

---

For any issues or suggestions, feel free to open an issue in this repository. Your feedback is greatly appreciated!
