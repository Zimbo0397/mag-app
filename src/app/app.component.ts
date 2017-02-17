import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  products = [
		{
			"title": "Декоративные бусины",
			"price": "1500",
			"src": "http://hobby4you.od.ua/images/thumbnails/220/220/detailed/44/DCBN006.jpg",
			"id": 1048,
			"category": "lent",
			"subCategory": "blue",
			"isSale": false,
			"rating": 5,
			"isLeader": false,
			"isNew": true
		},
		{
			"title": "Фетр черный, 91 х 91",
			"price": "120",
			"src": "http://www.rukodelie.com.ua/upload/iblock/064/50009.jpg",
			"id": 1047,
			"category": "lent",
			"subCategory": "red",
			"isSale": true,
			"rating": 5,
			"isLeader": false,
			"isNew": true
		},
		{
			"title": "Бумага Design Papers Flowers - 02",
			"price": "14",
			"src": "http://www.rukodelie.com.ua/upload/iblock/653/11777.jpg",
			"id": 1049,
			"category": "lent",
			"subCategory": "blue",
			"isSale": false,
			"rating": 1,
			"isLeader": false,
			"isNew": true
		},
		{
			"title": "Lugana 25 (ширина 140 см)",
			"price": "250",
			"src": "http://www.rukodelie.com.ua/upload/iblock/c38/3835_309.jpg",
			"id": 1050,
			"category": "lent",
			"subCategory": "blue",
			"isSale": false,
			"rating": 0,
			"isLeader": false,
			"isNew": true
		},
		{
			"title": "Махараджа, набор для  Чарівниця V-155",
			"price": "450",
			"src": "http://www.rukodelie.com.ua/upload/iblock/37a/12501.jpeg",
			"id": 1051,
			"category": "lent",
			"subCategory": "blue",
			"isSale": false,
			"rating": 5,
			"isLeader": false,
			"isNew": true
		},
		{
			"title": "набор для  Чарівниця V-",
			"price": "650",
			"src": "http://www.rukodelie.com.ua/upload/iblock/1f9/v_132.jpeg",
			"id": 1052,
			"category": "lent",
			"subCategory": "blue",
			"isSale": false,
			"rating": 5,
			"isLeader": false,
			"isNew": true
		},
		{
			"title": "MH 00128",
			"price": "1500",
			"src": "http://www.rukodelie.com.ua/upload/iblock/95a/2538.jpg",
			"id": 1053,
			"category": "lent",
			"subCategory": "blue",
			"isSale": false,
			"rating": 5,
			"isLeader": false,
			"isNew": true
		},
		{
			"title": "Винни Пух, набор для ковровой техники Vervaco, PN-0014474",
			"price": "580",
			"src": "http://www.rukodelie.com.ua/upload/iblock/93d/9795.jpg",
			"id": 1054,
			"category": "lent",
			"subCategory": "blue",
			"isSale": false,
			"rating": 5,
			"isLeader": false,
			"isNew": true
		},
		{
			"title": "Декоративные бусины",
			"price": "1500",
			"src": "http://hobby4you.od.ua/images/thumbnails/220/220/detailed/44/DCBN006.jpg",
			"id": 1055,
			"category": "lent",
			"subCategory": "blue",
			"isSale": false,
			"rating": 5,
			"isLeader": false,
			"isNew": true
		},
		{
			"title": "Фетр черный, 91 х 91",
			"price": "120",
			"src": "http://www.rukodelie.com.ua/upload/iblock/064/50009.jpg",
			"id": 1056,
			"category": "lent",
			"subCategory": "red",
			"isSale": true,
			"rating": 5,
			"isLeader": false,
			"isNew": true
		},
		{
			"title": "Бумага Design Papers Flowers - 02",
			"price": "14",
			"src": "http://www.rukodelie.com.ua/upload/iblock/653/11777.jpg",
			"id": 1057,
			"category": "lent",
			"subCategory": "blue",
			"isSale": false,
			"rating": 1,
			"isLeader": false,
			"isNew": true
		},
		{
			"title": "Lugana 25 (ширина 140 см)",
			"price": "250",
			"src": "http://www.rukodelie.com.ua/upload/iblock/c38/3835_309.jpg",
			"id": 1058,
			"category": "lent",
			"subCategory": "blue",
			"isSale": false,
			"rating": 0,
			"isLeader": false,
			"isNew": true
		},
		{
			"title": "Махараджа, набор для  Чарівниця V-155",
			"price": "450",
			"src": "http://www.rukodelie.com.ua/upload/iblock/37a/12501.jpeg",
			"id": 1059,
			"category": "lent",
			"subCategory": "blue",
			"isSale": false,
			"rating": 5,
			"isLeader": false,
			"isNew": true
		},
		{
			"title": "набор для  Чарівниця V-",
			"price": "650",
			"src": "http://www.rukodelie.com.ua/upload/iblock/1f9/v_132.jpeg",
			"id": 1060,
			"category": "lent",
			"subCategory": "blue",
			"isSale": false,
			"rating": 5,
			"isLeader": false,
			"isNew": true
		},
		{
			"title": "MH 00128",
			"price": "1500",
			"src": "http://www.rukodelie.com.ua/upload/iblock/95a/2538.jpg",
			"id": 1061,
			"category": "lent",
			"subCategory": "blue",
			"isSale": false,
			"rating": 5,
			"isLeader": false,
			"isNew": true
		},
		{
			"title": "Винни Пух, набор для ковровой техники Vervaco, PN-0014474",
			"price": "580",
			"src": "http://www.rukodelie.com.ua/upload/iblock/93d/9795.jpg",
			"id": 1062,
			"category": "lent",
			"subCategory": "blue",
			"isSale": false,
			"rating": 5,
			"isLeader": false,
			"isNew": true
		}
	];
}
