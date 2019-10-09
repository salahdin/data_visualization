from django.shortcuts import render,render_to_response
from bokeh.plotting import *
from bokeh.embed import components
from numpy import pi


import pandas as pd

def homepage(request):
    plot = figure(title='line graph', x_axis_label="idk", y_axis_label="sdf", plot_width=400, plot_height=400)
    plot.line([1,2,3,4,5,8], [1,2,3,4,5,-1], line_width=2)
    script, div = components(plot)
    df = pd.read_csv("researchdata.csv")
    df1 = df[['Sex:',"Age:"]]

    return render_to_response('base.html', {'script': script, 'div': div})

def displayTable(request):
    path = r"C:\Users\salahdin\Desktop\data_visualization\ub_data_visualization\dashboard\researchdata.csv"
    df = pd.read_csv(path)
    bins = [0, 2, 4, 13, 20, 110]
    labels = ['Infant', 'Toddler', 'Kid', 'Teen', 'Adult']
    df1 = df[['Sex:', 'Age:']]
    df1['AgeGroup'] = pd.cut(df['Age:'], bins=bins, labels=labels, right=False)
    df1 = df1.applymap(str)
    p = figure(x_range=labels, plot_height=250, title="study age range")
    p.vbar(x=df1['AgeGroup'], top=[1, 9], width=0.9)
    script, div = components(p)
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

