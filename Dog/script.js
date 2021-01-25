$.get('https://dog.ceo/api/breeds/list/all',(data)=>{
    let breedObject=data.message;
    let breedDropDown=$('.breedList');
    let listOfBreeds=Object.keys(breedObject);
    for(let breed of listOfBreeds){
        breedDropDown.append(`<option value=${breed}>${breed}</option>`)
    }
});

let getImageButton=$('.get-image');
let nextButton=$('.next');
let input=$('.breedList');
getImageButton.click(()=>{
    let value=input.val();
    $.get(`https://dog.ceo/api/breed/${value}/images/random`,(data)=>{
        let imageUrl=data.message;
        $('.image').attr('src',imageUrl);
    })
});
nextButton.click(()=>{
    let value=input.val();
    $.get(`https://dog.ceo/api/breed/${value}/images/random`,(data)=>{
        let imageUrl=data.message;
        $('.image').attr('src',imageUrl);
    })
});
