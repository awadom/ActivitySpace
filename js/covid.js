const key = "e6ef2cde327f46e3820d0344025b79fc"
const url = `https://newsapi.org/v2/top-headlines?country=us&pagesize=4&page=1&q=coronavirus&apiKey=${key}`

const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".lookbok-section .container-fluid .row .offset-lg-1 .lookbok-left .headlines")
    newsdata.articles.forEach((article) => {
			
			//Here we create and add html elements to our html file
      const div = document.createElement("div")
      div.className = "news col-lg-3 col-sm-6"
      div.innerHTML = `
            <div class="single-product-item">
                <figure>
		            <a href="${article.url} target="_blank">
                        <img src="${article.urlToImage}" style="height:200px;cover:object-fit;/>
                    </a>
                </figure>
                <div class="product-text">
                    <p>${article.title}</p>
                </div>
            </div>
			`
      articlesDiv.appendChild(div)
			
    })
}

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)

