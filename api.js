const fetchUserData = () => {
    const tod = fetch("https://jsonplaceholder.typicode.com/todos");
    tod
        .then((response) => {
        console.log("response received", response);
        if (response.ok === false) {
            console.log("network request failed");
            return;
        }
        return response.json();
        })
        .then((data) => {
        console.log("data received of todes", data);
        }).catch(error => {
        console.error("NETWORK ERROR:", error);
    });

    const use = fetch("https://jsonplaceholder.typicode.com/users");
    use
        .then((response) => {
        console.log("response received", response);
        if (response.ok === false) {
            console.log("network request failed");
            return;
        }
        return response.json();
        })
        .then((data) => {
        console.log("data received of users", data);
        }).catch(error => {
        console.error("NETWORK ERROR:", error);
    });

    const photo = fetch("https://jsonplaceholder.typicode.com/photos");
    photo
        .then((response) => {
        console.log("response received", response);
        if (response.ok === false) {
            console.log("network request failed");
            return;
        }
        return response.json();
        })
        .then((data) => {
        console.log("data received of photos", data);
        }).catch(error => {
        console.error("NETWORK ERROR:", error);
    });

    const post = fetch("https://jsonplaceholder.typicode.com/posts");
    post
        .then((response) => {
        console.log("response received", response);
        if (response.ok === false) {
            console.log("network request failed");
            return;
        }
        return response.json();
        })
        .then((data) => {
        console.log("data received of posts", data);
        }).catch(error => {
        console.error("NETWORK ERROR:", error);
    });

    const com = fetch("https://jsonplaceholder.typicode.com/comments");
    com
        .then((response) => {
        console.log("response received", response);
        if (response.ok === false) {
            console.log("network request failed");
            return;
        }
        return response.json();
        })
        .then((data) => {
        console.log("data received of Comments", data);
        }).catch(error => {
        console.error("NETWORK ERROR:", error);
    });

    const alb = fetch("https://jsonplaceholder.typicode.com/albums");
    alb
        .then((response) => {
        console.log("response received", response);
        if (response.ok === false) {
            console.log("network request failed");
            return;
        }
        return response.json();
        })
        .then((data) => {
        console.log("data received of Albums", data);
        }).catch(error => {
        console.error("NETWORK ERROR:", error);
    });
};
fetchUserData();

