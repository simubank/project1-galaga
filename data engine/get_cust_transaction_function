
def get_customer_transaction_data(customer_id):
    import json
    import pandas as pd
    import requests
    import requests
    response = requests.get('https://dev.botsfinancial.com/api/customers/'+customer_id+'/transactions', headers={'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiMjgxMzc2NyIsImV4cCI6OTIyMzM3MjAzNjg1NDc3NSwiYXBwX2lkIjoiMjk3ZjAwY2ItNThhNy00YTAzLTk3ZTAtYzhkMDlkMGFlYTU1In0.PPJpBOA6UMC5eZVRry4GmMQTh6zH7S_h6A7Z9ZoYS3A'})
    json_file = response.json()
    json_file = json.dumps(json_file)
    json_file = json.loads(json_file)
    json_str_transact = json.dumps(json_file['result'])
    json_transact = json.loads(json_str_transact)
    df_transaction = pd.DataFrame(json_transact)
    #sort transaction by date
    df_transaction = df_transaction.sort_values(by='originationDate')
    #flatten the category tag list 
    categoryTags_list = df_transaction['categoryTags'].tolist()
    flat_list = [item for sublist in categoryTags_list for item in sublist]
    df_transaction['categoryTags'] = flat_list
    #convert all creditcard purchase to negative values
    df_transaction.loc[df_transaction.type == 'CreditCardTransaction', 'currencyAmount'] = -1 * df_transaction['currencyAmount']
    
    net_balance =   df_transaction['currencyAmount'].sum()
    
    temp = df_transaction.groupby(df_transaction['type'])['currencyAmount'].agg([('negative' , lambda x : x[x < 0].sum()) , ('positive' , lambda x : x[x > 0].sum())])
    
    net_spending = abs(temp['negative'].sum())
    net_income = temp['positive'].sum()
    
    series = df_transaction.groupby(['categoryTags'])['currencyAmount'].sum()
    df_series = series.to_frame()
    df_income = df_series.drop(df_series[df_series.currencyAmount < 0].index)
    df_expense = df_series.drop(df_series[df_series.currencyAmount >= 0].index)
    df_expense['currencyAmount'] = df_expense['currencyAmount']*-1
    
    dict_income = df_income.to_dict('index')
    dict_expense = df_expense.to_dict('index')
    income_dict = dict()
    for key in dict_income:
        income_dict[key] = dict_income[key]['currencyAmount']
    
    expense_dict = dict()
    for key in dict_expense:
        expense_dict[key] = dict_expense[key]['currencyAmount']
   
    return net_balance,  net_spending, net_income, income_dict,expense_dict




get_customer_transaction_data('297f00cb-58a7-4a03-97e0-c8d09d0aea55_e2ba9727-a181-48f6-a1bc-0abf5ce173a2')

