from django.shortcuts import render,render_to_response
from bokeh.plotting import *
from bokeh.embed import components
from numpy import pi
from .graphs import *
from django.views.decorators.csrf import csrf_protect
import pandas as pd
from .graphs import *
from django.http import HttpResponse

def homepage(request):
    plot = figure(title='line graph', x_axis_label="idk", y_axis_label="sdf", plot_width=400, plot_height=400)
    plot.line([1,2,3,4,5,8], [1,2,3,4,5,-1], line_width=2)
    script, div = components(plot)
    df = pd.read_csv("researchdata.csv")
    df1 = df[['Sex:',"Age:"]]

    return render_to_response('base.html', {'script': script, 'div': div})

def displayTable(request):
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


