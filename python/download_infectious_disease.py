import json
from bs4 import BeautifulSoup as Soup
import pandas as pd
import requests
import zipfile
import io
import os
import numpy as np


class NpEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.integer):
            return int(obj)
        elif isinstance(obj, np.floating):
            return float(obj)
        elif isinstance(obj, np.ndarray):
            return obj.tolist()
        else:
            return super(NpEncoder, self).default(obj)


data_gov = "https://data.gov.sg/dataset/weekly-infectious-disease-bulletin-cases"
data_gov = "https://data.gov.sg/api/action/datastore_search?resource_id=ef7e44f1-9b14-4680-a60a-37d2c9dda390&q=dengue"

html_text = requests.get(data_gov).text
soup = Soup(html_text, 'html.parser')

data_id = soup.find('a', {"class": "ga-dataset-download"}).get("href")

url_data = f"https://data.gov.sg{data_id}"

r = requests.get(url_data, stream=True)
z = zipfile.ZipFile(io.BytesIO(r.content))
file = z.open("weekly-infectious-disease-bulletin-cases.csv")

df = pd.read_csv(file)

df_dengue = df[df.disease.isin(['Dengue Fever'])].copy()

df_dengue[["year", "week"]] = df_dengue["epi_week"].str.split("-", expand=True)

dict_to_export = {}

color = ["#2ca02c", "#1f77b4", "#fcc105", "#ff7f0e", "#d62728", "#9467bd", "#800000",
         "#2ca02c", "#1f77b4", "#fcc105", "#ff7f0e", "#d62728", "#9467bd"]

for ix, year in enumerate(df_dengue["year"].unique()):

    # if int(year) > 2016:

        dict_to_export[year] = {}
        dict_to_export[year]['cases'] = list(
            df_dengue[df_dengue['year'] == year]['no._of_cases'].values)
        dict_to_export[year]['color'] = color[ix]

        # df_year = df_dengue[df_dengue['year'] == year]['no._of_cases'].values
        #
        # for week in df_dengue["week"].unique():
        #
        #     df_week = df_dengue[df_dengue['week'] == week]
        #     dict_to_export[year][week] = df_week[["disease", "no._of_cases"]].set_index(
        #         "disease").to_dict()

save_dir = os.path.join(os.path.dirname(os.getcwd()), "src", "Data",
    "infectious_disease.json")

save_dir = os.path.join('C:\\Users\\sbbfti\\Desktop\\github-projects\\dengue-singapore', "src", "Data", "infectious_disease.json")

with open(save_dir, 'w') as fp:
    json.dump(dict_to_export, fp, cls=NpEncoder)

print("data correctly downloaded")
