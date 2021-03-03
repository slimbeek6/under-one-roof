window.onload = () => {
    $.get(`/api/expenses`, data => {
        console.log(data);
    });
}