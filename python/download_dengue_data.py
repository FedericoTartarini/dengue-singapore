# you need to install the following libraries
# pip install beautifulsoup4
# pip install lxml

import json
from bs4 import BeautifulSoup as Soup
import requests
import zipfile
import io
import os

data_gov = "https://data.gov.sg/dataset/dengue-clusters"

html_text = requests.get(data_gov).text
soup = Soup(html_text, 'html.parser')

data_id = soup.find('a', {"class": "ga-dataset-download"}).get("href")

url_data = f"https://data.gov.sg{data_id}"

r = requests.get(url_data, stream=True)
z = zipfile.ZipFile(io.BytesIO(r.content))
file = z.open("dengue-clusters-kml.kml")

soup = Soup(file.read(), 'lxml')  # Parse as XML

place_marks = soup.find_all('placemark')

dict_to_export = {}

for place_mark in place_marks:

    location_name = \
    place_mark.find('td').string.split("(")[0].split("[")[0].split(",")[0].split("/")[
        0].strip()
    number_cases = int(place_mark.find('simpledata', {"name": "CASE_SIZE"}).string)

    coordinates = place_mark.find('coordinates')

    elements = coordinates.string.split(',0.0')

    polyline = []
    for e in elements[:-1]:
        lon, lat = e.split(',')
        polyline.append([float(lat), float(lon)])

    if number_cases < 5:
        color = "#ffba08"
    elif number_cases < 10:
        color = "#f48c06"
    elif number_cases < 25:
        color = "#e85d04"
    elif number_cases < 50:
        color = "#dc2f02"
    elif number_cases < 100:
        color = "#d00000"
    elif number_cases < 200:
        color = "#850000"
    elif number_cases >= 200:
        color = "#000"

    dict_to_export[location_name] = {"cases": number_cases,
                                     "coordinates": polyline,
                                     "color": color}

# save_dir = os.path.join(os.path.dirname(os.getcwd()), "src", "Data", "dengue_data.json")
save_dir = os.path.join(os.getcwd(), "src", "Data", "dengue_data.json")

with open(save_dir, 'w') as fp:
    json.dump(dict_to_export, fp)

print("data correctly downloaded")
