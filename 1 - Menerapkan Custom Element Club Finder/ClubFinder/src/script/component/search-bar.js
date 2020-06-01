// class SearchBar dengan mewarisi sifat HTMLElement
class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
   
    // Karena di dalam elemen ini terdapat <button> yang harus memiliki sebuah event ketika ia ditekan, 
    // maka kita harus menyediakan setter. Gunanya untuk menetapkan fungsi event agar dapat mudah diterapkan dari luar class SearchBar.
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    // buat fungsi getter yang mengembalikan nilai value dari elemen <input> tersebut.
    get value() {
        return this.querySelector("#searchElement").value;
    }

    // Di dalam fungsi render kita ambil elemen yang dibutuhkan untuk ditampilkan dari berkas index.html
    render() {
        this.innerHTML = `
        <div id="search-container" class="search-container">
            <input placeholder="Search football club" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

        // terapkan this._clickEvent sebagai event pada element <button> dengan cara menuliskan kode berikut pada akhir fungsi render():
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
 }

//  definisikan custom element yang kita buat agar dapat digunakan pada DOM.
 customElements.define("search-bar", SearchBar);