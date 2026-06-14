import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarouseService {
   getImages() {
        return [
            {
                imageurl: 'assets/images/img1.jpeg',
                info:''
            },
             {
                imageurl: 'assets/images/img2.jpeg',
                info: '',
            },
             {
                imageurl: 'assets/images/img3.jpeg',
                info: '',
            },
             {
                imageurl: 'assets/images/img4.jpg',
                info: '',
            },
             {
                imageurl: 'assets/images/img5.jpg',
                info: '',
            },
             {
                imageurl: 'assets/images/img6.jpg',
                info: '',
            },
             {
                imageurl: 'assets/images/img7.jpg',
                info: '',
            },
             {
                imageurl: 'assets/images/img8.jpg',
                info: '',
            },
             {
                imageurl: 'assets/images/img9.jpg',
                info: '',
            },
             {
                imageurl: 'assets/images/img10.jpg',
                info: '',
            },
             {
                imageurl: 'assets/images/img11.jpg',
                info: '',
            },
             {
                imageurl: 'assets/images/img12.jpg',
                info: '',
            },
             {
                imageurl: 'assets/images/img13.jpg',
                info: '',
            },
             {
                imageurl: 'assets/images/img14.jpg',
                info: '',
            },
             {
                imageurl: 'assets/images/img15.jpg',
                info: '',
            },
             {
                imageurl: 'assets/images/img16.jpg',
                info: '',
            },
             {
                imageurl: 'assets/images/img17.jpg',
                info: '',
            },
             {
                imageurl: 'assets/images/img18.jpg',
                info: '',
            },
           
                ]
              }


               getAllImages() {
        return Promise.resolve(this.getImages().slice(0, 17));
    }
}
