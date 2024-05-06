export default function notify(){
    if(!("Notification" in window)){
        alert("Browser does not support notifictaion!")
    }else if(Notification.permission==="granted"){
        console.log("yeah")
        const notifictaion = new Notification("Hy there", {
            body: 'This is a JavaScript Notification API demo',
            icon: './img/js.png'
        })
        console.log(notifictaion)
    }else if(Notification.permission!=="denied"){
        Notification.requestPermission().then((premission)=>{
            if(premission==="granted"){
                const notifictaion = new Notification("Hy there")
            }
        })
    }
} 