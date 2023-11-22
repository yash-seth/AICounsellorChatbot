from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from pprint import pprint
import time
import json

browser = webdriver.Chrome()

browser.get('https://collegedunia.com/engineering-colleges')

items = []

last_height = browser.execute_script("return document.body.scrollHeight")

itemTargetCount = 500

subElems = []

while itemTargetCount > len(items):
    browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    time.sleep(0.5)

    new_height = browser.execute_script("return document.body.scrollHeight")

    if new_height == last_height:
        break

    last_height = new_height

    items = browser.find_elements(By.CLASS_NAME, "table-row")

    print(len(items))

collegeInfo = []

ct = 0

for el in items:
    print(ct)
    rowData = el.find_elements(By.TAG_NAME, "td")

    clgInfo = {}

    if (len(rowData[0].text) != 0):
        clgInfo['Id'] = int(rowData[0].text.split('#')[1])
    else:
        continue

    clgInfo['Name'] = rowData[1].find_element(By.TAG_NAME, "h3").text

    clgInfo["Location"] = rowData[1].text.split("\n")[1].split("|")[0].strip()

    clgInfo['SiteLink'] = rowData[1].find_element(
        By.TAG_NAME, "a").get_attribute('href')

    idx = len(rowData) - 4

    try:
        clgInfo['Fees'] = int(rowData[idx].find_element(By.TAG_NAME, "a").find_element(
            By.TAG_NAME, "span").text.replace("₹", "").replace(" ", "").replace(",", ""))
    except:
        clgInfo['Fees'] = 400000

    try:
        # need a logic as the package given is not the average package...
        # Hence it should be divided by 4 if it is greater than 30lpa
        clgInfo['Package'] = int(rowData[idx+1].find_element(By.TAG_NAME, "a").find_element(
            By.TAG_NAME, "span").text.replace("₹", "").replace(" ", "").replace(",", ""))
    except:
        clgInfo['Package'] = 1000000

    try:
        clgInfo['Rating'] = float(rowData[idx+2].find_element(
            By.TAG_NAME, "a").find_element(By.TAG_NAME, "span").text.split("/")[0])
    except:
        clgInfo['Rating'] = 7.0

    try:
        clgInfo["Review"] = rowData[idx +
                                    2].find_element(By.CLASS_NAME, "placement-reviews-back").text
    except:
        clgInfo["Review"] = "N/A"

    clgInfo['ROI'] = clgInfo["Package"] / (clgInfo["Fees"] * 4)

    clgInfo["ProgramType"] = "Btech"

    collegeInfo.append(clgInfo)
    ct += 1

print(len(collegeInfo))
print("*" * 30)

with open('btech.json', 'w') as f:
    json.dump(collegeInfo, f)
