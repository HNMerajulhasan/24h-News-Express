const loadCategories = async() =>{
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  try{
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
  }
  catch(error){
    console.log(error);
  }
}

const displayCategories = (data) =>{
    
  const categoriesContainer = document.getElementById('categories-container');
  data.forEach(categorie =>{
    const {category_id, category_name} = categorie;
    // console.log(category_id);
     const categorieDiv = document.createElement('div');
     categorieDiv.innerHTML = `
     <button class="btn btn-outline-primary" onclick="loadNews(${category_id}), toggleSpinner(true)"><h5>${category_name}</h5></button>
     `;
     categoriesContainer.appendChild(categorieDiv);
  })
}

const loadNews = async (category_id, category_name) =>{
  const url = `https://openapi.programming-hero.com/api/news/category/0${category_id}`;
  try{
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data);
  }
  catch(error){
    console.log(error);
  }
}
