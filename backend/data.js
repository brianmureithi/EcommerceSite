import bcrypt from 'bcryptjs';
const data ={
    users:[
        {
            name:'Brian',
            email:'brianmurithi65@gmail.com',
            password:bcrypt.hashSync('letmein',8),
            isAdmin: true,
        },
        {
            name:'Lanoi',
            email:'lanoitikani@gmail.com',
            password:bcrypt.hashSync('letmein',8),
            isAdmin: false,
        },


    ],
    products:[
        {
          
            name:'Grey Khaki Slim Pants',
            category:'Pants',
            image:'/images/p5.jpg',
            price:1300,
            countInStock:10,
            brand:'Lacoste',
            rating:3.5,
            numReviews:10,
            description:'Nice high Quality pants and does not fade'
        },
        {
          
            name:'Adidas Checked Fit Shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:1000,
            countInStock:0,
            brand:'Adidas',
            rating:4.5,
            numReviews:18,
            description:'Nice high Quality Shirt'
        },{
  
        name:'White Khaki Slim Pants',
        category:'Pants',
        image:'/images/p4.jpg',
        price:1299,
        countInStock:20,
        brand:'Lacoste',
        rating:4,
        numReviews:16,
        description:'Nice high Quality white khaki pants'
    },
    {
       
        name:' Light Blue official Shirt',
        category:'Shirt',
        image:'/images/p3.jpg',
        price:1350,
        countInStock:8,
        brand:'Lacoste',
        rating:5,
        numReviews:30,
        description:'Nice quality shirt'
    },
    {
     
        name:' Dark Grey Khaki Slim Pants',
        category:'Pants',
        image:'/images/p5.jpg',
        price:1300,
        countInStock:13,
        brand:'Puma',
        rating:4.5,
        numReviews:26,
        description:'Nice high Quality Pants'
    },
    {
       
        name:' Checked   blue sleek Shirt',
        category:'Shirts',
        image:'/images/p1.jpg',
        price:1350,
        countInStock:16,
        brand:'Lacoste',
        rating:3.5,
        numReviews:23,
        description:'Official Shirt'
    },

    ]
}
export default data; 