from django.shortcuts import render
import json
from django.http import JsonResponse,FileResponse,HttpResponse
from django.views import View
import os



def kepler(request):
    # return render(request, 'kepler/kepler.gl.html')
    dir_path = os.path.dirname(os.path.realpath(__file__))
    filepath = os.path.join(dir_path, 'data/kepler.gl.html')
    return FileResponse(open(filepath, 'rb'), content_type='text/html')


# def getCoordinates(request):
#     # return JsonResponse({"key": "value"})
#     # Get the directory of this file
#     dir_path = os.path.dirname(os.path.realpath(__file__))

#     # Construct the full path to the JSON file
#     json_file_path = os.path.join(dir_path, 'data/coordinates.json')

#     with open(json_file_path) as f:
#         data = json.load(f)

#     # data1 = json.dumps(data)
#     return JsonResponse(data,safe=False)



