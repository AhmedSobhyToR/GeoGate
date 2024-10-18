# GeoGate: License Request Management System

GeoGate is a web application designed to simplify the process of submitting and managing excavation license requests. The platform enables companies to easily submit their requests, while admins can review and process them efficiently.

- **Authentication and Authorization**
    Authentication: The system validates the user credentials (username and password) to ensure that only authorized users can access the platform.
    Authorization: Based on the role of the logged-in user (admin or regular user), the system grants different permissions. Admins have full control over reviewing, approving, or rejecting license requests, while users can submit and track their own requests.
- **Project Selection:**
   Users can choose the relevant project for their excavation request.
- **Excavation Details:**
   Users provide essential information about the excavation, including:
  - Method of excavation
  - Type of excavation
  - Duration of the excavation
  - Location of the excavation
  - Description of the excavation
- **Form Validation:**
    Excavation Duration Validation: The system enforces a rule that excavation durations cannot exceed 100 days. This ensures that all requests fall within a reasonable timeframe and adhere to predefined limits.
- **GIS Mapping:**   Users can draw lines on the GIS map to specify the excavation location.
- **Invoice and Payment:**   After submitting the request, an invoice is generated, and the user can proceed with payment.
- **Request Management:** Users can view all their submitted license requests and track the status of each.
- **Admin Actions:** Admins can view all submitted requests from all users and perform actions such as accepting or rejecting the requests.

<div align="center">
  <p>Technologies Used: Angular 18, TypeScript</p>
  <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" height="62"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" height="50"/>
</div>

Test Accounts:

User 1:

    Username: user1
    Password: user1
User 2:

    Username: user2
    Password: user2
User 3:

    Username: user3
    Password: user3
    
Admin:

    Username: admin
    Password: admin

![Screen Shot 2024-10-18 at 10 32 02](https://github.com/user-attachments/assets/2f366b80-e5c0-4dc0-9181-ba4465cfa561)
![Screen Shot 2024-10-18 at 10 34 29](https://github.com/user-attachments/assets/1c7c574c-de9b-4264-b585-6e8b9e52492b)
![Screen Shot 2024-10-18 at 10 34 43](https://github.com/user-attachments/assets/e2d497a8-027a-4f56-a2b5-984b4287fdc3)
![Screen Shot 2024-10-18 at 10 39 08](https://github.com/user-attachments/assets/40a6c28e-9c28-40a9-b3ab-99617cdcab22)
![Screen Shot 2024-10-18 at 10 39 22](https://github.com/user-attachments/assets/7e3add0b-a3c0-43bf-ba46-c7874922bcdb)
