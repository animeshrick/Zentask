1. Core Auth Packages

Runtime & Framework
> npm install express

Password Security
> npm install bcrypt

Token Handling (JWT)
> npm install jsonwebtoken

Database Layer
> npm install prisma
> npx prisma init

Environment & Secrets
> npm install dotenv


2. Auth Support Packages

Request Validation
> npm install zod

Security Middleware
> npm install helmet

Rate Limiting (Login Protection)
> npm install express-rate-limit

Cookie Handling (for refresh tokens if needed)
> npm install cookie-parser


3. Email / Token Flows (Verification & Reset)

Email
> npm install nodemailer

Token Generation (for reset & invite)
> npm install uuid


4. Logging & Auditing (Auth Needs Memory)

Logging
> npm install pino


5. Development & Quality

> npm install --save-dev nodemon
> npm install --save-dev eslint
> npm install --save-dev prettier


6. Full Install Command

> npm install express bcrypt jsonwebtoken prisma dotenv zod helmet express-rate-limit cookie-parser nodemailer uuid pino

> npm install --save-dev nodemon eslint prettier


