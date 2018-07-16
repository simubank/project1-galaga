const List = []
const categoryList = ['utility', 'food', 'rental', 'insurance']

for (let i = 0; i < categoryList.length; i++) {
  List.push({
    category: categoryList[i],
    amount: Math.round(Math.random() * 20000) / 100
  })
}

export default {
  getList: () => {
    return {
      total: List.length,
      items: List,
      category: categoryList
    }
  }
}
