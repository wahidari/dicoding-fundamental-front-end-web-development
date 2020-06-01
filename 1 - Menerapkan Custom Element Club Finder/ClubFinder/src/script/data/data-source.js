// dari js ke es6
// function DataSource(onSuccess, onFailed) {
//     this.onSuccess = onSuccess;
//     this.onFailed = onFailed;
//  }
  
  
//  DataSource.prototype.searchClub = function (keyword) {
//     // const filteredClubs = clubs.filter(function (club) {
//     //     return club.name.toUpperCase().includes(keyword.toUpperCase());
//     // });
    
//     // arrow function
//     const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
  
  
//     if (filteredClubs.length) {
//         this.onSuccess(filteredClubs);
//     } else {
//         // this.onFailed(keyword + " is not found");
//         this.onFailed(`${keyword} is not found`);
//     }
//  };


// dari es6 ke class dan penerapan callback function
//  class DataSource {
//     constructor(onSuccess, onFailed) {
//         this.onSuccess = onSuccess;
//         this.onFailed = onFailed;
//     }
  
//     searchClub(keyword) {
//         const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
  
//         if (filteredClubs.length) {
//             this.onSuccess(filteredClubs);
//         } else {
//             this.onFailed(`${keyword} is not found"`);
//         }
//     }
//  }

import clubs from './clubs.js';

// penerapan callback function menjadi Promise
 class DataSource {
    static searchClub(keyword) {
        return new Promise((resolve, reject) => {
            const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
            if (filteredClubs.length) {
                resolve(filteredClubs);
            } else {
                reject(`${keyword} is not found"`);
            }
        });
    }
}

// menggunakan modul
export default DataSource;