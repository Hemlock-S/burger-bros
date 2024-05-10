import { products } from './data.js';
import User from './test.js';

const productWrapper = document.querySelector('.product-card-wrapper');

class App{
    constructor(){
        this._getBurgerData();
    }

    _getBurgerData(){
        products.forEach(product => this._renderProduct(product));
    }

    _currencyconvert(amount){
       return amount.toLocaleString('bn-BD', {style: 'currency', currency: 'BDT'});
    }

    _renderProduct(product){
        const html = `
            <div class="product-card rounded-lg shadow-md overflow-hidden w-80 h-96 bg-white">
                    <div class="product-img h-48 overflow-hidden flex justify-center items-center">
                        <img src=${product.img} alt="${product.title}"
                        class="block w-full">
                    </div>
                    <div class="product-texts p-5 flex flex-col items-start gap-2">
                        <h2 class="text-2xl font-semibold">${product.title}</h2>
                        <p class="text-xl font-semibold text-orange-500">BDT. ${this._currencyconvert(product.price)}</p>
                        <button ${onclick = this._orderHandler.bind(this)} 
                         class=" order bg-orange-500 text-white py-2 px-4 rounded-md uppercase font-semibold mt-2 hover:bg-gray-700 duration-300">Order now</button> 
                    </div>
                    
            </div>
        `;

        productWrapper.insertAdjacentHTML('afterbegin', html);
    }

    
    _orderHandler(){
        console.log(this); // In onclick attribute this keyword is a window object here unless we bind it with the class[this keyword]
        // onclick is a window attribute
        console.log('Clicked!');
    }
}

const myApp = new App();