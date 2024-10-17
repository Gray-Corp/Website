from django.shortcuts import render
from django.core.mail import EmailMessage
from django.http import JsonResponse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser
import traceback

@api_view(['POST'])
@parser_classes([MultiPartParser])  # Ensure file uploads are handled properly
def send_cv(request):
    try:
        position = request.POST.get('position')
        file = request.FILES.get('file')

        if not position or not file:
            return JsonResponse({'error': 'Position and file are required.'}, status=400)

        # Create email message
        email = EmailMessage(
            subject=f'Application for {position}',
            from_email='gcmaillsend@gmail.com',
            to=['info@graycorp.io'],
        )

        # Attach the file
        email.attach(file.name, file.read(), file.content_type)

        # Send the email
        email.send()

        return JsonResponse({'message': f'Email sent for {position} with attachment {file.name}'})

    except Exception as e:
        # Capture the exception and return it in the response
        error_message = str(e)
        error_trace = traceback.format_exc()  # For more detailed trace in development
        return HttpResponse(f"An error occurred: {e}", status=500)
