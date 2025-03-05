from django.shortcuts import render
import requests

def get_programs():
    # Replace with actual API endpoint or database query to retrieve TV and TTN programs
    response = requests.get('https://example.com/api/programs')
    if response.status_code == 200:
        return response.json()
    else:
        return []

def index(request):
    programs = get_programs()
    context = {'programs': programs}
    return render(request, 'index.html', context)