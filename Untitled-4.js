
const books = [
    {
      title: "Speaking JavaScript",
      author: "Axel Rauschmayer",
      pages: 460
    },
    {
      title: "Programming JavaScript Applications",
      author: "Eric Elliott",
      pages: 254
    },
    {
      title: "Understanding ECMAScript 6",
      author: "Nicholas C. Zakas",
      pages: 352
    }
  ];
  
 
  const newBook = {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
  };
  
  books.push(newBook);
  

  console.log("Longitud del arreglo:", books.length);
  console.log("Nombres de los libros:");
  
  books.forEach(book => {
    console.log(book.title);
  });
  
 
  const lastTwoBooks = books.slice(-2);
  
 
  books.shift();
  
  
  console.log("Longitud del arreglo después de eliminar el primer libro:", books.length);
  console.log("Nombres de los libros después de eliminar el primer libro:");
  
  books.forEach(book => {
    console.log(book.title);
  });
  

  const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
  
  console.log("Suma de páginas de todos los libros:", totalPages);

  let x = 10/100;
  console.log(typeof (x));

  let xy =100/0;
  console.log(x)

  let  y=10+`alice`;
  console.log(y)

  let p ="abcdef".slice(2,4);
  console.log(p)

  let h=10
  {
    let h =20
    h = h +10
  }
  console.log(h)