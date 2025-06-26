const res = fetch("https://jsonplaceholder.typicode.com/todos/3", {
  method: "PUT",
  body: JSON.stringify({ id: 2, title: "Learning CS", completed: false }),
  headers: {
    "Content-Type": "application/json"
  }
});

res.then(res => {
    console.log("NETWORK REQUEST DONE OF PUT:", res.ok);
    const data = res.json()
    data.then(d => {
        console.log("data",d);
    });
}).catch(error => {
    console.error("NETWORK ERROR:", error);
});


const post = fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({ id: 2, title: "Learning JS", completed: false }),
  headers: {
    "Content-Type": "application/json"
  }
});

post.then(res => {
    console.log("NETWORK REQUEST DONE OF POST:", res.ok);
    const data = res.json()
    data.then(d => {
        console.log("data",d);
    });
}).catch(error => {
    console.error("NETWORK ERROR:", error);
});


const del = fetch("https://jsonplaceholder.typicode.com/todos/3", {
  method: "DELETE",
  body: JSON.stringify({ id: 2, title: "Learning JAVA", completed: false }),
  headers: {
    "Content-Type": "application/json"
  }
});

res.then(res => {
    console.log("NETWORK REQUEST DONE OF DELETE:", res.ok);
    const data = res.json()
    data.then(d => {
        console.log("data",d);
    });
}).catch(error => {
    console.error("NETWORK ERROR:", error);
});
