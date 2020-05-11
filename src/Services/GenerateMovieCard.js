const API = `54e4b3f735dc7e796075865340b11815`;

const req = `https://api.themoviedb.org/3/movie/550?api_key=` + API;

axios.get(req)
      .then(res => {
        const movieInfo = res.data;
        this.setState({ persons });
      })