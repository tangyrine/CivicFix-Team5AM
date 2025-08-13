from django.urls import path
from . import views  # import from api/views.py

urlpatterns = [
    path('api/auth/register', views.register_user),
    path('api/auth/login', views.login_user),
    path('api/issues', views.create_issue),
    path('api/issues/all', views.get_issues),
    path('api/issues/<int:id>', views.get_issue),
    path('api/issues/<int:id>/status', views.update_issue_status),
    path('api/issues/<int:id>/vote', views.vote_issue),
    path('api/issues/<int:id>/vote/remove', views.remove_vote),
    path('api/issues/<int:id>/comments', views.add_comment),
    path('api/issues/<int:id>/comments/all', views.get_comments),
    path('api/users/<int:id>', views.get_user_profile),
    path('api/users/profile', views.update_user_profile),
    path('api/issues/search', views.search_issues),
]
