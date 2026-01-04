from django.shortcuts import render

def api_list_view(request):
    api_endpoints = [
        {"url": "/register", "method": "POST", "name": "Register", "description": "Register a new user"},
        {"url": "/login", "method": "POST", "name": "Login", "description": "User login"},
        {"url": "/user_details", "method": "GET", "name": "User Details", "description": "Get user details"},
        {"url": "/forgot_password", "method": "POST", "name": "Forgot Password", "description": "Reset user password"},
        {"url": "/update_password", "method": "POST", "name": "Change-User-Password", "description": "Update user password"},
        {"url": "/update_profile", "method": "POST", "name": "Update-User-profile", "description": "Update user profile"}
    ]
    return render(request, "apilist.html", {"api_endpoints": api_endpoints}) 