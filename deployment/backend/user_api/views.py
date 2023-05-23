

from django.http import JsonResponse,FileResponse,HttpResponse

import os,json



def getCoordinates(request):
    # return JsonResponse({"key": "value"})
    # Get the directory of this file
    dir_path = os.path.dirname(os.path.realpath(__file__))

    # Construct the full path to the JSON file
    json_file_path = os.path.join(dir_path, 'data/coordinates.json')
    with open(json_file_path) as f:
        data = json.load(f)
    # data1 = json.dumps(data)
    # return HttpResponse("coordinates")
    return JsonResponse(data,safe=False)

def getAFL(request):
    dir_path = os.path.dirname(os.path.realpath(__file__))
    json_file_path = os.path.join(dir_path, 'data/AFL.json')
    with open(json_file_path) as f:
        data = json.load(f)
    return JsonResponse(data,safe=False)

def getBarChartData(request):
    dir_path = os.path.dirname(os.path.realpath(__file__))
    json_file_path = os.path.join(dir_path, 'data/barChartData.json')
    with open(json_file_path) as f:
        data = json.load(f)
    return JsonResponse(data,safe=False)

def getSentiment(request):
    dir_path = os.path.dirname(os.path.realpath(__file__))
    json_file_path = os.path.join(dir_path, 'data/sentiment.json')
    with open(json_file_path) as f:
        data = json.load(f)
    return JsonResponse(data,safe=False)

def getSubjective(request):
    dir_path = os.path.dirname(os.path.realpath(__file__))
    json_file_path = os.path.join(dir_path, 'data/subjective.json')
    with open(json_file_path) as f:
        data = json.load(f)
    return JsonResponse(data,safe=False)

