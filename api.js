const urlParams = new URLSearchParams(window.location.search);
const {
    action,
    data
} = urlParams.entries();

// axios.get('maps.json')
// .then(res => console.log(res.data))
// .catch(err => console.log(err))