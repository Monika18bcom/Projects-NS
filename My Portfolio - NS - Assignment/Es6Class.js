class API {
    #secure = false;
    constructor(url,method = "GET"){
        this.url = url;
        this.method = method;

        if(this.url.startsWith("https")){
            this.#secure = true;
        }
    }

    isSecure(){
        return this.#secure
    }

    updateURL(updatedurl){

        if(updatedurl.startsWith("https")){
            this.#secure = true;
        }else {
            this.#secure = false;
        }
    }
}


const s = new API('http://api.com/api/hello')
console. log(s.isSecure()) // false

s.updateURL('https://api. com/api/hello')
console. log(s.isSecure()) // true

console.log(s.url) // https://api. com/api/hello

console.log(s.method) // GET