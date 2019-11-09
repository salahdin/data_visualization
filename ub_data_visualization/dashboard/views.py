from django.shortcuts import render,render_to_response
from bokeh.plotting import *
from bokeh.embed import components
from numpy import pi
from .graphs import *
from django.views.decorators.csrf import csrf_protect
import pandas as pd
from .graphs import *
import csv
from .models import *
from django.views.generic import ListView

def homepage(request):
    script, div = genderbarchart()
    return render_to_response('base.html', {'script': script, 'div': div})

def displayHypertention(request):
    script, div = Hypertensionbarchart()
    return render_to_response('base.html', {'script': script, 'div': div})

def displayChart(request):
    # define starts/ends for wedges from percentages of a circle
    percents = [0, 0.3, 0.4, 0.6, 0.9, 1]
    starts = [p * 2 * pi for p in percents[:-1]]
    ends = [p * 2 * pi for p in percents[1:]]
    # a color for each pie piece
    colors = ["red", "green", "blue", "orange", "yellow"]
    p = figure(x_range=(-1, 1), y_range=(-1, 1))
    p.wedge(x=0, y=0, radius=1, start_angle=starts, end_angle=ends, color=colors)
    script, div = components(p)
    return render_to_response('base.html', {'script': script, 'div': div})

@csrf_protect
def searchColmn(request):
    if request.method == 'GET':
        # get reason from post data
        df = pd.read_csv(path)
        data = request.GET['searchBar']
        matching = [s for s in list(df.columns) if data in s]
        if len(matching) > 0:
            script, div = searchCol(matching[0])
            return render_to_response('base.html', {'script': script, 'div': div})
        elif len(matching) == 0:
            return render_to_response('base.html', {'message': "no data", "list":matching})
    return render(request, 'base.html')


def read_and_create_request(request):
    path = r"C:\Users\salahdin\Desktop\data_visualization\ub_data_visualization\dashboard\researchdata.csv"
    with open(path) as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            participants = participant.objects.create(
                gender = row['Sex:'],
                age = row['Age:'],
                location = row['Study Location:'],
                smoker = row['5. Do you smoke?'],
                obese = row['Obesity'],
                hearattack = row['Heart diseases'],
            )



class ParticipantListView(ListView):

    model = participant
    context_object_name = 'participants'
    template_name = 'dashboard/table.html'
    paginate_by = 5