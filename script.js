document.addEventListener("DOMContentLoaded", (event) => {

    var optnMenu = 1

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            switch (optnMenu) {
                case 1:
                    document.getElementById('options').innerHTML = "  New game<br>> Continue"
                    optnMenu = 2
                    break
                case 2:
                    document.getElementById('options').innerHTML = "> New game<br>  Continue"
                    optnMenu = 1
                    break
            }
        }

        if (event.key === 'Enter') {
            switch(optnMenu){
                case 1:
                    document.getElementById("PrincipalDiv").style.opacity = "0"
                    setTimeout(() => {
                        document.getElementById("PrincipalDiv").style.display = "none"
                    }, 1000);
                    console.log("Opt 1 Select")
                    break
                case 2:
                    console.log("Opt 2 Select")
                    break            
            }
        }

    });
    
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('panorama-container');
    const image = document.getElementById('panorama-image');
    let containerWidth = container.offsetWidth;

    container.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const percentage = mouseX / containerWidth;
        const maxScrollLeft = image.scrollWidth - containerWidth;
        container.scrollLeft = maxScrollLeft * percentage;
    
        if(container.scrollLeft <= 300){
            console.log("Max Left")
        }
        
    });
});