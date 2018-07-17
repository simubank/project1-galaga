from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
import re
import sys

def GetFundInfo():
    req = Request('https://www.tdassetmanagement.com/fundDetails.form?fundId='+sys.argv[1]+'&prodGroupId=1&lang=en&site=TDCT', headers={'User-Agent': 'Mozilla/5.0'})
    html = urlopen(req).read()

    soup = BeautifulSoup(html, "lxml")
    table = soup.find("table", attrs={"class":"td-table td-table-border-row td-table-border-column td-table-stripe-row td-table-hover-row"})
    navHtml = soup.find("div", attrs={"class":"td-layout-grid9 td-layout-column"})
    merHtml = soup.find("label", attrs={"for":"mer"})
    categoryHtml = soup.find("label", attrs={"for":"category"})
    minInvestHtml = soup.find("label", attrs={"for":"minimumInvestment"})
    descriptionHtml = soup.find("input", attrs={"id":"fundNameHidden"})

    returnList = {}
    performanceList = {}
    attribution = {}

    # The first tr contains the field names.
    headings = [th.get_text() for th in table.find("tr").find_all("th")]

    datasets = []
    for row in table.find_all("tr")[1:]:
        dataset = zip(headings, (td.get_text() for td in row.find_all("td")))
        datasets.append(dataset)

    for dataset in datasets:
        for field in dataset:
        	performanceList[field[0]] = field[1].strip()

    date = re.search(r'(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\s+\d{1,2},\s+\d{4}', navHtml.get_text())
    nav = navHtml.find_all('strong')[0].get_text()
    change = navHtml.find_all('strong')[1].get_text()
    attribution["date"] = date.group()
    attribution["nav"] = nav.strip()
    attribution["change"] = change.strip()

    mer = merHtml.find_all('strong')[0].get_text()
    attribution["mer"] = mer.strip()

    category = categoryHtml.find_all('strong')[0].get_text()
    attribution["category"] = category.strip()

    minInvest = minInvestHtml.find_all('strong')[0].get_text()
    attribution["minInvest"] = minInvest.strip()

    description = descriptionHtml.get('value')
    attribution["description"] = description.strip()

    returnList["attribution"] = attribution
    returnList["performanceList"] = performanceList
    return returnList

if __name__ == "__main__":
    print(GetFundInfo())
