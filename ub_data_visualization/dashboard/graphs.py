from bokeh.plotting import *
from bokeh.embed import components
import pandas as pd
import itertools

path = r"C:\Users\salahdin\Desktop\data_visualization\ub_data_visualization\dashboard\researchdata.csv"
df = pd.read_csv(path)

def genderbarchart():
    # bins = [18, 26, 33, 40, 47, 60]
    labels = ['19-25','26-32','33-39','40-46','47 and above']
    # df1 = df[['Sex:', 'Age:']]
    # df1['AgeGroup'] = pd.cut(df['Age:'], bins=bins, labels=labels, right=False)
    # df1 = df1.applymap(str)
    # plotting
    p = figure(x_range=labels, plot_height=400, plot_width=700, title="study age and gender distribution")
    p.vbar(x=labels, top=[3,1,1,3,2], width=0.6)
    p.vbar(x=labels, top=[1, 1, 3, 0, 0], width=0.6,color="pink")
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
