import axios from "axios";

const getPlanesFromDB = () => {
    let planesFromServachok = []
  axios
    .get("http://127.0.0.1:5000/plane")
    .then((res) => {
      planesFromServachok = res.data;
      console.log(planesFromServachok);
      // return planesFromServachok
    })
    .then(() => {
      return planesFromServachok;
    });
};

export default getPlanesFromDB
