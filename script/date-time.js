function updateDate() {
    const now = new Date();

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = dayNames[now.getDay()];

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[now.getMonth()];
    

    const date = now.getDate();
    const year = now.getFullYear();
    
    const formattedDate = `${day},\n<span class='font-bold'>${month} ${date} ${year}</span>`;
    
    document.getElementById('datetime').innerHTML = formattedDate.replace('\n', '<br>');
    
    setTimeout(updateDate, 60000);
}

window.onload = updateDate();