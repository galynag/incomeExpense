# incomeExpense
db incomeExpense node/express/mongoDB/react/mobx

аналог приложения Spendee (http://www.spendee.com/)
только базовые возможности, а именно:
1. Редактор доходов/расходов:
- список, добавление, редактирование, удаление.
При добавлении можно внести сумму, дату, описание, категорию.

2. Редактор категорий:
- список, добавление, редактирование, удаление.

4. Возможность смотреть графики доходов/расходов за месяц разбитые по
категориям.

*созданы два документа/коллекции:

rs-ds135394:PRIMARY> db.categories.find()
{ "_id" : ObjectId("59b94a7489bdf7de47584e1e"), "picture" : "airplanemode_active", "name" : "Travel" }
{ "_id" : ObjectId("59b94acc89bdf7de47584e1f"), "picture" : "perm_identity", "name" : "Personal" }
{ "_id" : ObjectId("59b94b5189bdf7de47584e20"), "picture" : "shoping_basket", "name" : "Food&Drink" }
{ "_id" : ObjectId("59b94b9f89bdf7de47584e21"), "picture" : "description", "name" : "Bills" }
{ "_id" : ObjectId("59b94c0089bdf7de47584e22"), "picture" : "face", "name" : "Fun" }
{ "_id" : ObjectId("59b94c2489bdf7de47584e23"), "picture" : "home", "name" : "Home" }

rs-ds135394:PRIMARY> db.moneylist.find()
{ "_id" : ObjectId("59b97c1089bdf7de47584e24"), "description" : "description", "day" : "1", "month" : "september", "year" : "2017", "sum" : "1000", "connections" : [ { "category_id" : "59b94c0089bdf7de47584e22", "category_name"
: "Fun" } ] }

**создана предварительная структура приложения.
