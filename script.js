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
                        GUI.style.display = "flex"
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
    const GUI = document.getElementById('GUI');
    const battery = document.getElementById('battery');
    const body = document.getElementById('body');

    const container = document.getElementById('panorama-container');
    const image = document.getElementById('panorama-image');
    let containerWidth = container.offsetWidth;

    let lastScrollTime = 0;
    const fpsInterval = 1000 / 60; // 10 fps

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

    let tiempoInicio, tiempoFin;
    var batteryLevel = 4
    let tiempoQHEP = 0;

    btnL1.addEventListener('mousedown', (e) => {
        if(batteryLevel!=0){
            body.style.backgroundColor = "#b2b2b2"
            tiempoInicio = new Date().getTime();
        }
    });
    document.addEventListener('mouseup', (e) => {
        body.style.backgroundColor = "black"

        tiempoFin = new Date().getTime(); // Registra el tiempo de finalización
        const tiempoPresionado = (tiempoFin - tiempoInicio) / 1000; // Calcula el tiempo en segundos
        tiempoQHEP += tiempoPresionado
        console.log(`El botón fue presionado por ${tiempoPresionado} segundos.`)
        checkBattery();
    });

    btnL2.addEventListener('mousedown', (e) => {
        body.style.backgroundColor = "#b2b2b2"
    });
    document.addEventListener('mouseup', (e) => {
        body.style.backgroundColor = "black"
    });

    function checkBattery(){
        console.log("Tiempo presionado: "+tiempoQHEP)

        if(tiempoQHEP>=15){
            battery.src = "assets/battery3.png"
            batteryLevel = 3
            if (tiempoQHEP >= 30) {
                battery.src = "assets/battery2.png"
                batteryLevel = 2
                if (tiempoQHEP >= 45) {
                    battery.src = "assets/battery1.png"
                    batteryLevel = 1
                    if (tiempoQHEP >= 60) {
                        battery.src = "assets/battery0.png"
                        batteryLevel = 0
                    }
                }
            }
        }
    }
});
