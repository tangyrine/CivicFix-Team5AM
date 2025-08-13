# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

# In-memory data stores
users = []
issues = {}
comments = {}
votes = {}

user_counter = 1
issue_counter = 1
comment_counter = 1
vote_counter = 1

# Utility function
def parse_body(request):
    try:
        return json.loads(request.body)
    except:
        return {}

# 1. User Registration
@csrf_exempt
def register_user(request):
    global user_counter
    if request.method == 'POST':
        data = parse_body(request)
        new_user = {
            "id": user_counter,
            "username": data.get("username"),
            "email": data.get("email"),
            "full_name": data.get("full_name"),
        }
        users.append(new_user)
        user_counter += 1
        return JsonResponse({"message": "User registered successfully", "user": new_user}, status=201)
    return JsonResponse({"error": "Method not allowed"}, status=405)

# 2. User Login (simplified, no password check)
@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        data = parse_body(request)
        for u in users:
            if u["email"] == data.get("email"):
                return JsonResponse({"message": "Login successful", "user": u, "token": "fake-jwt-token"})
        return JsonResponse({"error": "Authentication failed", "message": "Invalid email or password"}, status=401)
    return JsonResponse({"error": "Method not allowed"}, status=405)

# 3. Create Issue
@csrf_exempt
def create_issue(request):
    global issue_counter
    if request.method == 'POST':
        data = parse_body(request)
        new_issue = {
            "id": issue_counter,
            "title": data.get("title"),
            "description": data.get("description"),
            "status": "open",
            "priority": data.get("priority"),
            "vote_count": 0,
        }
        issues[issue_counter] = new_issue
        issue_counter += 1
        return JsonResponse({"message": "Issue created successfully", "issue": new_issue}, status=201)
    return JsonResponse({"error": "Method not allowed"}, status=405)

# 4. Get All Issues
@csrf_exempt
def get_issues(request):
    if request.method == 'GET':
        return JsonResponse({"issues": list(issues.values())})
    return JsonResponse({"error": "Method not allowed"}, status=405)

# 5. Get Single Issue
@csrf_exempt
def get_issue(request, id):
    if request.method == 'GET':
        issue = issues.get(id)
        if issue:
            return JsonResponse({"issue": issue})
        return JsonResponse({"error": "Issue not found"}, status=404)
    return JsonResponse({"error": "Method not allowed"}, status=405)

# 6. Update Issue Status
@csrf_exempt
def update_issue_status(request, id):
    if request.method == 'PUT':
        data = parse_body(request)
        issue = issues.get(id)
        if issue:
            issue["status"] = data.get("status", issue["status"])
            return JsonResponse({"message": "Issue status updated successfully", "issue": issue})
        return JsonResponse({"error": "Issue not found"}, status=404)
    return JsonResponse({"error": "Method not allowed"}, status=405)

# 7. Vote on Issue
@csrf_exempt
def vote_issue(request, id):
    global vote_counter
    if request.method == 'POST':
        if id in issues:
            issues[id]["vote_count"] += 1
            votes[vote_counter] = {"id": vote_counter, "issue_id": id}
            vote_counter += 1
            return JsonResponse({"message": "Vote added successfully", "vote_count": issues[id]["vote_count"]})
        return JsonResponse({"error": "Issue not found"}, status=404)
    return JsonResponse({"error": "Method not allowed"}, status=405)

# 8. Remove Vote
@csrf_exempt
def remove_vote(request, id):
    if request.method == 'DELETE':
        if id in issues and issues[id]["vote_count"] > 0:
            issues[id]["vote_count"] -= 1
            return JsonResponse({"message": "Vote removed successfully", "vote_count": issues[id]["vote_count"]})
        return JsonResponse({"error": "Vote not found"}, status=404)
    return JsonResponse({"error": "Method not allowed"}, status=405)

# 9. Add Comment to Issue
@csrf_exempt
def add_comment(request, id):
    global comment_counter
    if request.method == 'POST':
        if id in issues:
            data = parse_body(request)
            new_comment = {"id": comment_counter, "issue_id": id, "content": data.get("content")}
            comments[comment_counter] = new_comment
            comment_counter += 1
            return JsonResponse({"message": "Comment added successfully", "comment": new_comment}, status=201)
        return JsonResponse({"error": "Issue not found"}, status=404)
    return JsonResponse({"error": "Method not allowed"}, status=405)

# 10. Get Comments for Issue
@csrf_exempt
def get_comments(request, id):
    if request.method == 'GET':
        issue_comments = [c for c in comments.values() if c["issue_id"] == id]
        return JsonResponse({"comments": issue_comments})
    return JsonResponse({"error": "Method not allowed"}, status=405)

# 11. Get User Profile
@csrf_exempt
def get_user_profile(request, id):
    if request.method == 'GET':
        for u in users:
            if u["id"] == id:
                return JsonResponse({"user": u})
        return JsonResponse({"error": "User not found"}, status=404)
    return JsonResponse({"error": "Method not allowed"}, status=405)

# 12. Update User Profile
@csrf_exempt
def update_user_profile(request):
    if request.method == 'PUT':
        data = parse_body(request)
        if users:
            user = users[0]  # first user as logged-in mock
            user.update({
                "full_name": data.get("full_name", user["full_name"]),
                "phone": data.get("phone"),
                "address": data.get("address")
            })
            return JsonResponse({"message": "Profile updated successfully", "user": user})
        return JsonResponse({"error": "No user found"}, status=404)
    return JsonResponse({"error": "Method not allowed"}, status=405)

# 13. Search Issues
@csrf_exempt
def search_issues(request):
    if request.method == 'GET':
        q = request.GET.get('q', '').lower()
        filtered = [i for i in issues.values() if q in i["title"].lower() or q in i["description"].lower()]
        return JsonResponse({"results": filtered, "total_results": len(filtered)})
    return JsonResponse({"error": "Method not allowed"}, status=405)

