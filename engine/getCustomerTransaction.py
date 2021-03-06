import json
import pandas as pd
import requests
import sys

def get_customer_transaction_data(customer_id):

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
    flat_list = []
    for item in categoryTags_list:
        str1 = ' '.join(item)
        flat_list.append(str1)
    flat_list_nsp = [] 
    for item in flat_list:
        item = item.replace(" ", "")
        flat_list_nsp.append(item)

    df_transaction['categoryTags'] = flat_list_nsp
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

    output = {}
    output["netBalance"] = net_balance
    output["netSpending"] = net_spending
    output["netIncome"] = net_income
    output["incomeCategory"] = income_dict
    output["expenseCategory"] = expense_dict
   
    print(output)
    return output


if __name__ == '__main__':
    get_customer_transaction_data(sys.argv[1])



