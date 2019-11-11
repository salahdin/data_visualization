from bokeh.models import HoverTool
from bokeh.plotting import *
from bokeh.embed import components
import pandas as pd
import itertools

path = r"C:\Users\salahdin\Desktop\data_visualization\ub_data_visualization\dashboard\researchdata.csv"
df = pd.read_csv(path)

def genderbarchart():
    labels = ['19-25','26-32','33-39','40-46','47 and above']
    p = figure(x_range=labels, plot_height=400, plot_width=700, title="study age and gender distribution")
    p.vbar(x=labels, top=[3,1,1,3,2], width=0.6)
    p.vbar(x=labels, top=[1, 1, 3, 0, 0], width=0.6,color="pink")
    p.add_tools(HoverTool(tooltips=[("Male", "12"), ("Female", "19")]))
    p.legend.location = "top_left"
    script, div = components(p)
    return script, div

# yes or no
def Hypertensionbarchart():
    labels = ['No', 'Yes']
    dfH = df[['Hypertension']]
    p = figure(x_range=labels, plot_height=400, plot_width=700, title="hypertension")
    p.vbar(x=dfH['Hypertension'], top=returnTop('Hypertension'), width=0.4)
    script, div = components(p)
    return script, div

def searchCol(col):
    labels = ['Yes', 'No', 'No Idea']
    dfH = df[[col]]
    p = figure(x_range=labels, plot_height=400, plot_width=700, title=col)
    p.vbar(x=labels, top=returnTop(col), width=0.4)
    print(returnTop(col))
    p.add_tools(HoverTool(tooltips=[("Yes", str(returnTop(col)[0])),
                                    ("No", str(returnTop(col)[1])),
                                    ("No idea", str(returnTop(col)[2])),
                                    ("Total", str(sum(returnTop(col))))
                                    ]))
    script, div = components(p)
    return script, div

def checkrepeating(colmnName):
    df = pd.read_csv(path)
    df1 = df[[colmnName]]
    dflist = df1.values.tolist()
    return (list(itertools.chain.from_iterable(dflist)))


def getcount(mylist):
    answerlist = [0, 0, 0]
    for answer in mylist:
        if answer == "Yes":
            answerlist[0] += 1
        elif answer == "No":
            answerlist[1] += 1
        else:
            answerlist[2] += 1
    return answerlist

def returnTop(colmnName):
    return getcount(checkrepeating(colmnName))
