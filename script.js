let trendingsection = document.querySelector(".trendingsection")

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmE3ZTdkYjc3NzFkN2VhNjZhMWU1MjNjNDdkNjdlNSIsIm5iZiI6MTc2MDMzNTM3OC4wNDcwMDAyLCJzdWIiOiI2OGVjOTYxMjhjM2M5MDQ0NGY5ZGVhODYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.sSGrXplnrP_ocye3XQU7JB8Yg16cz8jh9eSp1Uqpjv0'
    }
}

let arr = [];
let url = {
    trendingMovieday: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    popularMovie: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    topratedMovie: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",

}

window.addEventListener("load", () => {
    fetchUrl(url, options)
})

let basicUrl = "https://image.tmdb.org/t/p/w500"


async function fetchUrl(url, options) {
    for (let x in url) {
        let fetchkey = url[x]
        let responce = await fetch(fetchkey, options)
        let result = await responce.json()
        // arr.push(result.results)

        for (let i = 0; i < result.results.length; i++) {
            let parent = document.createElement("div")
            parent.classList.add("parent")
            let div = document.createElement("div")
            div.classList.add("div")
            let img = document.createElement("img")
            let name = document.createElement("h3")
            name.innerHTML = result.results[i].title
            let image = basicUrl + result.results[i].poster_path
            img.src = image
            div.append(img, name)
            parent.append(div)
            trendingsection.append(parent)
        }
    }

}

