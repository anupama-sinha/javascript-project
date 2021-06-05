function contact(){
    alert("Contact Established");
}

$(document).ready(function () {
    var books = [
      {
        id: '1',
        img: 'book1.jpg',
        name: 'Java the beacon',
        rating: '4',
        review: '1234',
        price: '$ 20',
      },
      {
        id: '2',
        img: 'book1.jpg',
        name: 'Java Complete Reference',
        rating: '3.5',
        review: '1234',
        price: '$ 20',
      },
      {
        id: '3',
        img: 'book1.jpg',
        name: 'Java the beast',
        rating: '4.1',
        review: '1234',
        price: '$ 20',
      },
      {
        id: '3',
        img: 'book1.jpg',
        name: 'Java the beast',
        rating: '4.1',
        review: '1234',
        price: '$ 20',
      },
      {
        id: '3',
        img: 'book1.jpg',
        name: 'Java the beast',
        rating: '4.1',
        review: '1234',
        price: '$ 20',
      },
      {
        id: '3',
        img: 'book1.jpg',
        name: 'Java the beast',
        rating: '4.1',
        review: '1234',
        price: '$ 20',
      },
      {
        id: '3',
        img: 'book1.jpg',
        name: 'Java the beast',
        rating: '4.1',
        review: '1234',
        price: '$ 20',
      },
      {
        id: '3',
        img: 'book1.jpg',
        name: 'Java the beast',
        rating: '4.1',
        review: '1234',
        price: '$ 20',
      },
    ];
  
    $.each(books, function (i, book) {
      var t = document.querySelector('#search-result-template');
      t.content.querySelector('.search-name').innerHTML = book.name;
      t.content.querySelector('.search-rating').innerHTML =
        book.rating + " <i class='fa fa-star' aria-hidden='true'></i>";
      t.content.querySelector('.search-img').src = 'image/' + book.img;
      var clone = document.importNode(t.content, true);
      $('#search-results').append(clone);
    });
  });