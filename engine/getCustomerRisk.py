import sys


def age_group(x):
    if x < 18:
        group = 'under-age'
        return group
    elif x >= 18 and x<= 25:
        group = 'young'
        return group
    elif x > 25 and x <= 40:
        group = 'middle age'
        return group
    else:
        group = 'old'
        return group
def job_group(x):
    if x == 'fulltime':
        group = 'fulltime'
        return group
    elif x == 'parttime' or x == 'barista'  :
        group = 'parttime'
        return group
    else:
        group = 'school'
        return group
def rent_group(x):
    if x == 'rent' or x == 'sharingrent':
        group = 'rent'
        return group

    else:
        group = 'rentfree'
        return group
def label_risk (row):
    if row['age group'] == 'young' and row['job group'] == 'fulltime' and row['rent group'] == 'rentfree':
        risk = 'high'
        return risk
    elif row['age group'] == 'young' and row['job group'] == 'parttime' and row['rent group'] == 'rentfree':
        risk = 'high'
        return risk
    elif row['age group'] == 'young' and row['job group'] == 'fulltime' and row['rent group'] == 'rent':
        risk = 'medium'
        return risk
    elif row['age group'] == 'young' and row['job group'] == 'parttime' and row['rent group'] == 'rent':
        risk = 'medium'
        return risk
    elif row['age group'] == 'young' and row['job group'] == 'school' and row['rent group'] == 'rent':
        risk = 'medium'
        return risk
    elif row['age group'] == 'young' and row['job group'] == 'school' and row['rent group'] == 'rentfree':
        risk = 'high'
        return risk
    elif row['age group'] == 'middle age':
        risk = 'medium'
        return risk
    elif row['age group'] == 'old':
        risk = 'low'
        return risk
    else:
        risk = 'medium'
        return risk





import json
import pandas as pd
import requests
import json
import pandas as pd
import requests
def cutomer_risk_att(customer_id):
    r = requests.get('https://dev.botsfinancial.com/api/customers/'+customer_id,headers={'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiMjgxMzc2NyIsImV4cCI6OTIyMzM3MjAzNjg1NDc3NSwiYXBwX2lkIjoiMjk3ZjAwY2ItNThhNy00YTAzLTk3ZTAtYzhkMDlkMGFlYTU1In0.PPJpBOA6UMC5eZVRry4GmMQTh6zH7S_h6A7Z9ZoYS3A'})
    json_f = r.json()
    json_f = json.dumps(json_f)
    json_f = json.loads(json_f)
    json_str_cust = json.dumps(json_f['result'])
    json_cust = json.loads(json_str_cust)
    df_cust = pd.DataFrame(json_cust)
    df_cust['age group'] =  df_cust['age'].apply(age_group)
    df_cust['job group'] =  df_cust['primaryOccupation'].apply(job_group)
    df_cust['rent group'] =  df_cust['habitationStatus'].apply(rent_group)
    df_cust['risk'] = df_cust.apply(label_risk, axis=1)

    risk_value = df_cust.iloc[0]['risk']
    risk_dict = dict()
    risk_dict['risk'] = risk_value
    print(risk_dict)
    return risk_dict

if __name__ == '__main__':
    cutomer_risk_att(sys.argv[1])
