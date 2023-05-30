let products =[
    { id:1,
     picture:"https://i.postimg.cc/pVFNXcM8/bag.jpg",
     name: "bag",
     title : "bag",
    cost : "R8 580",
     },
     { id:2,
         picture:"https://i.postimg.cc/fbWm2d5T/chrome-hearts-ring.jpg",
         name: "pants",
         title : "pants",
        cost : "R70 000",
         },
         { id:2,
             picture:"https://i.postimg.cc/wvYv4yhb/vest.jpg",
             name: "vest",
             title : "vest",
            cost : "R5 000",
             },
             { id:2,
                 picture:"https://i.postimg.cc/5tVdZwRv/leather-Vest.jpg",
                 name: "leather vest",
                 title : "leather vest",
                cost : "R9 800",
                 },
                 { id:2,
                     picture:"https://i.postimg.cc/JzdHxz69/beanie.jpg",
                     name: "beanie",
                     title : "beanie",
                    cost : "R 900",
                     },
 ]
 // let divChrome = document.querySelector(".container");
 // de.forEach(element => {
 // });
 let divChrome = document.querySelector(".product");
 products.forEach((reader)=> {
     divChrome.innerHTML += `
     <div class= "cards-wrapper">
     <div class="images">
     <img src="${reader.picture}" alt="${reader.namee}" loading="lazy" class="img-fluid">
     <h2>${reader.title}</h2>
     </div>
     <p class="price">${reader.cost}</p>
     </div>
     `
    })