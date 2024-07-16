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

    const btnL1 = document.getElementById('btnL1');
    const btnL2 = document.getElementById('btnL2');
    const body = document.getElementById('body');

    const container = document.getElementById('panorama-container');
    const image = document.getElementById('panorama-image');
    let containerWidth = container.offsetWidth;

    let lastScrollTime = 0;
    const fpsInterval = 1000 / 30; // 10 fps

    document.addEventListener('mousemove', (e) => {
        const currentTime = Date.now();
        const timeSinceLastScroll = currentTime - lastScrollTime;

        if (timeSinceLastScroll > fpsInterval) {
            const mouseX = e.clientX;
            const percentage = mouseX / containerWidth;
            const maxScrollLeft = image.scrollWidth - containerWidth;
            container.scrollLeft = maxScrollLeft * percentage;
            lastScrollTime = currentTime;

            if (container.scrollLeft <= 300) {
                console.log("Max Left");
                btnL1.style.display = "block"
            } else {
                btnL1.style.display = "none"
            }

            if (container.scrollLeft >= maxScrollLeft -300) {
                console.log("Max Right");
                btnL2.style.display = "block"
            } else {
                btnL2.style.display = "none"
            }

        }
    });

    btnL1.addEventListener('mousedown', (e) => {
        body.style.backgroundColor = "#b2b2b2"
    });
    document.addEventListener('mouseup', (e) => {
        body.style.backgroundColor = "black"
    });

    btnL2.addEventListener('mousedown', (e) => {
        body.style.backgroundColor = "#b2b2b2"
    });
    document.addEventListener('mouseup', (e) => {
        body.style.backgroundColor = "black"
    });

});
