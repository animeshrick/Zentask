# Pure Authentication API


## Features
- User registration and login
- Password reset and update
- User profile update and details


## Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd pure_authentication
   ```
2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
3. **Apply migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
4. **Create a superuser (optional, for admin):**
   ```bash
   python manage.py createsuperuser
   ```
5. **Run the development server:**
   ```bash
   python manage.py runserver
   ```

## API Endpoints

| URL                | Method | Name                  | Description                        |
|--------------------|--------|-----------------------|------------------------------------|
| `/register`        | POST   | Register              | Register a new user                |
| `/login`           | POST   | Login                 | User login                         |
| `/user_details`    | GET    | User Details          | Get user details                   |
| `/forgot_password` | POST   | Forgot Password       | Reset user password                |
| `/update_password` | POST   | Change-User-Password  | Update user password               |
| `/update_profile`  | POST   | Update-User-profile   | Update user profile                |

> **Note:** All endpoints expect and return JSON. Refer to the code for required request fields.

## Admin Username & Password

Username: aaa
 Password: aaaaa