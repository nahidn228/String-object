let computer = {
  brand: "accer",
  price: 35000,
  processor: "intel",
  storage: {
    hdd : '512 GB',
    SSD : {
      'ssd brand': 'intel',
      version : 'DDR4'
    }
  }
};

console.log(computer);

// {
//   brand: 'accer',
//   price: 35000,
//   processor: 'intel',
//   storage: { hdd: '512 GB', SSD: { 'ssd brand': 'intel', version: 'DDR4' } } }    


console.log(computer.storage);
//{ hdd: '512 GB', SSD: { 'ssd brand': 'intel', version: 'DDR4' } } 

console.log(computer.storage.SSD); 
//SSD: { 'ssd brand': 'intel', version: 'DDR4' }

console.log(computer.storage.SSD.version); //DDR4
